import React from "react";
import { Link } from "react-router-dom";

type Initiative = { label: string; projectId?: string };

type Role = {
  company: string;
  title: string;
  location: string;
  dates: string;
  description: string;
  initiatives?: Initiative[];
};

const ROLES: Role[] = [
  {
    company: "Sunflower Land",
    title: "Software Engineer",
    location: "Remote",
    dates: "Aug 2023 → present",
    description:
      "Full-stack engineer on a live web3 farming game. Shipping product to thousands of daily players across a TypeScript/React FE and a Node/MongoDB BE deployed on AWS. ~2,300 commits and ~1,900 merged PRs to date.",
    initiatives: [
      { label: "Pets ecosystem (game system + NFT extension)", projectId: "pets" },
      { label: "Skills Revamp", projectId: "skills-revamp" },
      { label: "i18n localisation platform (8+ languages)", projectId: "i18n-platform" },
      { label: "Salt Awakening Chapter", projectId: "salt-awakening" },
      { label: "Counter-based PRNG rollout", projectId: "prng" },
      { label: "Marketplace & Crafting", projectId: "marketplace-crafting" },
      { label: "Auctions system", projectId: "auctions" },
    ],
  },
  {
    company: "Thought Farm Pty Ltd",
    title: "Software Engineer",
    location: "Singapore",
    dates: "Earlier",
    description:
      "Software engineer transitioning into tech from a creative background. Worked on web applications using React, TypeScript and Node.",
  },
];

export const Experience: React.FC = () => {
  return (
    <main className="m-0 px-4 py-8 max-w-5xl mx-auto flex flex-col gap-6">
      <header>
        <h1
          className="text-3xl md:text-4xl font-semibold mb-2"
          style={{ color: "var(--color-accent-secondary)" }}
        >
          Experience
        </h1>
        <p
          className="leading-relaxed text-base md:text-lg"
          style={{ color: "var(--color-text-muted)" }}
        >
          Work history and the initiatives I've owned along the way.
        </p>
      </header>
      <ol className="flex flex-col gap-4">
        {ROLES.map((role) => (
          <li
            key={`${role.company}-${role.title}`}
            className="p-5 md:p-6 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-4"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="flex flex-col">
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--color-accent-secondary)" }}
              >
                {role.dates}
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                {role.location}
              </span>
            </div>
            <article>
              <h2
                className="text-lg md:text-xl font-semibold"
                style={{ color: "var(--color-accent-secondary)" }}
              >
                {role.title} · {role.company}
              </h2>
              <p
                className="leading-relaxed mt-2"
                style={{ color: "var(--color-text)" }}
              >
                {role.description}
              </p>
              {role.initiatives && role.initiatives.length > 0 && (
                <>
                  <h3
                    className="text-sm font-medium mt-4 mb-2"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Key initiatives
                  </h3>
                  <ul className="list-disc pl-6 flex flex-col gap-1">
                    {role.initiatives.map((init) => (
                      <li
                        key={init.label}
                        className="leading-relaxed"
                        style={{ color: "var(--color-text)" }}
                      >
                        {init.projectId ? (
                          <Link
                            to={`/projects#${init.projectId}`}
                            style={{ color: "var(--color-accent)" }}
                          >
                            {init.label}
                          </Link>
                        ) : (
                          init.label
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          </li>
        ))}
      </ol>
    </main>
  );
};
