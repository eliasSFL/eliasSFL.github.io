import React from "react";
import { SkillName } from "../About";
import { SkillsApplied } from "./SkillsApplied";

const PortfolioSiteSkills: SkillName[] = [
  "HTML5",
  "CSS3",
  "TypeScript",
  "React",
  "NodeJS",
  "Yarn",
  "Git",
  "GitHub",
];

export const Portfolio: React.FC = () => (
  <section
    id="website"
    className="md:grid md:grid-cols-[1fr_auto] gap-8 p-6 md:p-8 rounded-2xl shadow-sm"
    style={{
      backgroundColor: "var(--color-surface)",
      border: "1px solid var(--color-border)",
    }}
  >
    <article>
      <h2
        className="text-xl md:text-2xl font-semibold"
        style={{ color: "var(--color-accent-secondary)" }}
      >
        Portfolio Website
      </h2>
      <h3
        className="mt-2 text-base md:text-lg font-medium"
        style={{ color: "var(--color-text-muted)" }}
      >
        Why I decided to build my own portfolio site
      </h3>
      <div className="flex flex-col gap-4 mt-4">
        <p className="leading-relaxed" style={{ color: "var(--color-text)" }}>
          As a software developer, I believe in showcasing my technical skills
          and creativity. Instead of using pre-made templates like Wiz or
          SquareSpace, I chose to develop my portfolio website using React
          without using a template. This decision allows me to demonstrate my
          proficiency in web development and highlight the skills I’ve mastered.
        </p>
        <p>
          To develop this website, I utilized React.js and TypeScript, along
          with a blend of CSS and Tailwind CSS. I ensured that the site is fully
          responsive, providing an optimal viewing experience on both large and
          small screens.
        </p>
      </div>
      <SkillsApplied skillsArray={PortfolioSiteSkills} />
    </article>
  </section>
);
