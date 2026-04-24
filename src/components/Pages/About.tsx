import {
  faCss3Alt,
  faDiscord,
  faEthereum,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faLinux,
  faNode,
  faNpm,
  faReact,
  faYarn,
  IconDefinition,
  faTypescript,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faGamepad } from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../../../src/assets/Elias-Profile-photo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "mobile-device-detect";
import React from "react";
import { Tooltip } from "react-tooltip";
import { faPython } from "@fortawesome/free-brands-svg-icons/faPython";
import { MilestonesStrip } from "../About/MilestonesStrip";
import { GitHubStats } from "../About/GitHubStats";

export const SkillIcons = {
  HTML5: faHtml5,
  CSS3: faCss3Alt,
  JavaScript: faJs,
  TypeScript: faTypescript,
  React: faReact,
  NodeJS: faNode,
  npm: faNpm,
  Yarn: faYarn,
  Git: faGitAlt,
  GitHub: faGithub,
  Linux: faLinux,
  Python: faPython,
  AWS: faAws,
  Web3: faEthereum,
  MongoDB: faDatabase,
  Phaser: faGamepad,
  Discord: faDiscord,
} satisfies Record<string, IconDefinition>;

export type SkillName = keyof typeof SkillIcons;

export const About: React.FC = () => (
  <main className="m-0 px-4 py-8 max-w-5xl mx-auto flex flex-col gap-8">
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      <div className="mr-0 md:mr-6 flex-1">
        <h2
          className="text-2xl md:text-3xl font-semibold mb-4"
          style={{ color: "var(--color-accent-secondary)" }}
        >
          About Me
        </h2>
        <p
          className="leading-relaxed text-base md:text-lg"
          style={{ color: "var(--color-text-muted)" }}
        >
          Hi I'm Elias, a Software Engineer at Thought Farm Pty Ltd based in
          Singapore. I'm in the midst of a career transition from the creative
          world to the tech world. Transitioning from a creative background to
          software development has enabled me to infuse creativity into my
          coding practices. I am driven by a desire to make a significant impact
          by resolving technical challenges and broadening my expertise in web
          development. I have extensive experience developing and maintaining
          large-scale applications using React, TypeScript, NodeJS, and MongoDB.
        </p>
      </div>
      <img
        src={profilePicture}
        alt="Elias"
        className="rounded-2xl w-32 h-32 md:w-44 md:h-44 object-cover shadow-lg transition-transform duration-200 hover:scale-[1.02]"
      />
    </section>
    <section id="milestones">
      <MilestonesStrip />
    </section>
    <section id="skills">
      <h2
        className="text-2xl md:text-3xl font-semibold mb-6"
        style={{ color: "var(--color-accent-secondary)" }}
      >
        Technical Skills
      </h2>
      <div className="flex flex-row flex-wrap gap-3">
        {Object.entries(SkillIcons).map(([name, icon], index) => (
          <div
            key={index}
            className={`skill-pill ${name}`}
            style={{ color: "var(--color-text)" }}
          >
            <FontAwesomeIcon
              icon={icon}
              className="w-4 h-4 skill-icon"
              style={{ color: "var(--color-muted-accent)" }}
            />
            <span>{name}</span>
            <Tooltip
              anchorSelect={`.${name}`}
              place="bottom"
              openOnClick={!!isMobile}
            >
              {name}
            </Tooltip>
          </div>
        ))}
      </div>
    </section>
    <section className="mb-8">
      <h2
        className="text-2xl md:text-3xl font-semibold mb-6"
        style={{ color: "var(--color-accent-secondary)" }}
      >
        Soft Skills
      </h2>
      <ul className="list-none flex flex-wrap gap-3">
        {[
          "Communication",
          "Teamwork",
          "Creativity",
          "Collaboration",
          "Inquisitiveness",
        ].map((skill) => (
          <li
            key={skill}
            className="skill-pill"
            style={{ color: "var(--color-text)" }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h2
        className="text-2xl md:text-3xl font-semibold mb-6"
        style={{ color: "var(--color-accent-secondary)" }}
      >
        Beyond features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "Framework upgrades shipped in production",
            body: "React 18, TypeScript 6, Node 22, Wagmi v2 → v3, Tailwind 3.4 — across an actively-shipping codebase.",
          },
          {
            title: "AI-tooling DX",
            body: "Enhanced the Codex/Claude PR-review workflow and made the reviewer enforce React Compiler safety in its own suggestions.",
          },
          {
            title: "Observability",
            body: "CloudWatch log-group expansion, Discord-webhook commit alerts, engineer-role tagging on alert webhooks, detailed Discord error reporting for the fee liquidator.",
          },
          {
            title: "Performance engineering",
            body: "Measurable wins: Crop Machine performance, getCountAndType lookup, Codex performance, Visiting State exit on mobile.",
          },
          {
            title: "Backend serialisation overhauls",
            body: "Buildings, Wardrobe, Trees & Rocks, Collectibles — storage and read-path improvements across the API.",
          },
          {
            title: "Cross-cutting refactors",
            body: "Counter-based PRNG rolled out across yields, cooking, fishing, composting and tree cooldowns to make game outcomes replay-stable and audit-friendly.",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="p-4 rounded-xl"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3
              className="text-base md:text-lg font-semibold mb-1"
              style={{ color: "var(--color-accent-secondary)" }}
            >
              {card.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              {card.body}
            </p>
          </article>
        ))}
      </div>
    </section>
    <section className="mb-8">
      <h2
        className="text-2xl md:text-3xl font-semibold mb-6"
        style={{ color: "var(--color-accent-secondary)" }}
      >
        GitHub activity
      </h2>
      <GitHubStats />
    </section>
  </main>
);
