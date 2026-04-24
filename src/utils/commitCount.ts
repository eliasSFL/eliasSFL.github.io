import { useEffect, useState } from "react";

const CACHE_KEY = "portfolio.commitCount";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const FALLBACK_FE_COUNT = 1500;
// BE repo is private — REST API can't see it unauthenticated.
// Bump this manually on deploy (or wire a build-time fetch with a PAT secret).
const KNOWN_BE_COMMIT_COUNT = 900;
const PUBLIC_REPOS = ["sunflower-land/sunflower-land"];
const AUTHOR = "eliasSFL";

type CacheEntry = { count: number; fetchedAt: number };

const readCache = (): CacheEntry | null => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CacheEntry;
    if (Date.now() - parsed.fetchedAt > CACHE_TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
};

const writeCache = (count: number) => {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ count, fetchedAt: Date.now() } satisfies CacheEntry)
    );
  } catch {
    // localStorage unavailable — silently skip
  }
};

// Filtering by `?author=<github-user>` excludes bot accounts automatically —
// bots like github-actions[bot] and dependabot[bot] have their own user records.
const fetchRepoCommitCount = async (repo: string): Promise<number> => {
  const url = `https://api.github.com/repos/${repo}/commits?author=${AUTHOR}&per_page=1`;
  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const link = res.headers.get("link");
  if (link) {
    const lastMatch = link.match(/[?&]page=(\d+)>;\s*rel="last"/);
    if (lastMatch) return Number(lastMatch[1]);
  }
  // No Link header → fewer than 2 pages → 0 or 1 commits
  const data = (await res.json()) as unknown[];
  return data.length;
};

export const useCommitCount = (): number => {
  const cached = readCache();
  const [count, setCount] = useState<number>(
    cached?.count ?? FALLBACK_FE_COUNT + KNOWN_BE_COMMIT_COUNT
  );

  useEffect(() => {
    if (cached) return;
    let cancelled = false;
    (async () => {
      try {
        const counts = await Promise.all(
          PUBLIC_REPOS.map(fetchRepoCommitCount)
        );
        const total =
          counts.reduce((a: number, b: number) => a + b, 0) +
          KNOWN_BE_COMMIT_COUNT;
        if (cancelled) return;
        setCount(total);
        writeCache(total);
      } catch {
        // network/rate-limit failure — keep the fallback
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [cached]);

  return count;
};

export const formatCommitCount = (count: number): string =>
  `${count.toLocaleString("en-US")}+`;
