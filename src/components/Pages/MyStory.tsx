import React from "react";

const STORY: { year: string; heading: string; body: string }[] = [
  {
    year: "Aug 2023",
    heading: "Started contributing to Sunflower Land as a frontend engineer",
    body: "Started shipping into a live web3 game with thousands of daily players. The codebase was already large and the player base unforgiving — every regression was visible within minutes.",
  },
  {
    year: "2024",
    heading: "Built the localisation platform from scratch",
    body: "Designed the translation library, dictionary architecture, language switcher, and an automated AWS Translate pipeline for new keys. Eight+ languages now ship with the game, including Chinese with a dedicated CJK font loader.",
  },
  {
    year: "Jul 2024",
    heading: "Joined Sunflower Land as a part-time software engineer",
    body: "Joined Sunflower Land as a part-time software engineer. Access to backend codebase and ability to ship features directly to players.",
  },
  {
    year: "2024 → 2025",
    heading: "Owned the Skills Revamp",
    body: "Multi-month rewrite of the player progression system across Mining, Compost, Animal, Fruit and Machinery skill trees. Designed the new Skill Powers model and rolled it out behind a beta-testing flag. Around this time I also started picking up backend work — first BE commit landed in July 2024.",
  },
  {
    year: "Jan 2025",
    heading: "Converted to full-time software engineer",
    body: "Converted to full-time software engineer. Worked on various backend features, including the Skills Revamp, the localisation platform, and the Ronin integration.",
  },
  {
    year: "2025",
    heading: "Deep dive into web3",
    body: "Owned NFT pets end-to-end (functionality, traits, reveal, level perks, marketplace listings, ticket auctions), shipped marketplace signature verification, integrated the Ronin chain, and built the Love Charm ↔ FLOWER conversion flow with face verification. Migrated the dApp from Wagmi v2 to v3 along the way.",
  },
  {
    year: "2025 → 2026",
    heading: "Cross-cutting determinism + platform upgrades",
    body: "Replaced ad-hoc Math.random calls with a seeded counter-based PRNG across yields, cooking, fishing, composting and tree cooldowns — replay-stable and audit-friendly. In parallel: React 18, TypeScript 6, Node 22, Tailwind 3.4 — framework upgrades shipped without breaking the feature train.",
  },
  {
    year: "Now (Apr 2026)",
    heading: "Salt Awakening + AI-tooling DX",
    body: "Shipping the Salt Awakening chapter end-to-end (Salt Farm, Aging Shed, Fermentation Racks, Spice Rack, Fermented Fertilisers) and contributing to AI-tooling DX — most recently making the Codex/Claude PR reviewer enforce React Compiler safety in its own suggestions.",
  },
];

export const MyStory: React.FC = () => {
  return (
    <main className="m-0 px-4 py-8 max-w-5xl mx-auto flex flex-col gap-6">
      <header>
        <h1
          className="text-3xl md:text-4xl font-semibold mb-2"
          style={{ color: "var(--color-accent-secondary)" }}
        >
          My Story
        </h1>
        <p
          className="leading-relaxed text-base md:text-lg"
          style={{ color: "var(--color-text-muted)" }}
        >
          A chronological pass through the work that shaped me as an engineer at
          Sunflower Land.
        </p>
      </header>
      <ol className="flex flex-col gap-4">
        {STORY.map((entry) => (
          <li
            key={entry.year}
            className="p-5 md:p-6 rounded-2xl shadow-sm"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
              <h2
                className="text-lg md:text-xl font-semibold"
                style={{ color: "var(--color-accent-secondary)" }}
              >
                {entry.heading}
              </h2>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                {entry.year}
              </span>
            </div>
            <p
              className="leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              {entry.body}
            </p>
          </li>
        ))}
      </ol>
    </main>
  );
};
