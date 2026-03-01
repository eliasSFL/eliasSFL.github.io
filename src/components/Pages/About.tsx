import {
  faCss3Alt,
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
} from "@fortawesome/free-brands-svg-icons";
import typescriptIcon from "../../../src/assets/typescript.png";
import typescriptInverted from "../../../src/assets/typescript-invert.png";
import profilePicture from "../../../src/assets/Elias-Profile-photo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "mobile-device-detect";
import React from "react";
import { Tooltip } from "react-tooltip";
import { useIsDarkMode } from "../../utils/darkMode";

export const SkillIcons = (isDarkMode?: boolean) =>
  ({
    HTML5: faHtml5,
    CSS3: faCss3Alt,
    JavaScript: faJs,
    TypeScript: isDarkMode ? typescriptInverted : typescriptIcon,
    React: faReact,
    NodeJS: faNode,
    npm: faNpm,
    Yarn: faYarn,
    Git: faGitAlt,
    GitHub: faGithub,
    Linux: faLinux,
  }) as Record<string, IconDefinition | string>;

export type SkillName = keyof ReturnType<typeof SkillIcons>;

export const About: React.FC = () => {
  const { isDarkMode } = useIsDarkMode();
  return (
    <main className="m-0 px-4 py-8 max-w-5xl mx-auto flex flex-col gap-8">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        <div className="mr-0 md:mr-4 flex-1">
          <h2 className="font-mono text-xl md:text-2xl mb-4" style={{ color: "var(--color-accent)" }}>
            &gt; About Me
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--color-text)" }}>
            Hi I'm Elias, a Software Engineer at Thought Farm Pty Ltd based in
            Singapore. I'm in the midst of a career transition from the creative
            world to the tech world. Transitioning from a creative background to
            software development has enabled me to infuse creativity into my
            coding practices. I am driven by a desire to make a significant
            impact by resolving technical challenges and broadening my expertise
            in web development. I have extensive experience developing and
            maintaining large-scale applications using React, TypeScript,
            NodeJS, and MongoDB.
          </p>
        </div>
        <img
          src={profilePicture}
          alt="Elias"
          className="rounded-lg w-32 h-32 md:w-40 md:h-40 mt-4 border-2 transition-all duration-200 hover:shadow-lg"
          style={{
            borderColor: "var(--color-accent)",
            boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)",
          }}
        />
      </section>
      <section id="skills">
        <h2 className="font-mono text-xl md:text-2xl mb-4" style={{ color: "var(--color-accent)" }}>
          &gt; Technical Skills
        </h2>
        <div
          className="flex flex-row flex-wrap gap-3 p-4 rounded-lg"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          {Object.entries(SkillIcons(isDarkMode)).map(([name, icon], index) => {
            const isString = typeof icon === "string";
            return (
              <React.Fragment key={index}>
                {isString ? (
                  <img
                    src={icon}
                    alt={name}
                    className={`w-10 h-10 md:w-12 md:h-12 skill-icon ${name}`}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={icon}
                    className={`w-10 h-10 md:w-12 md:h-12 skill-icon ${name}`}
                    style={{ color: "var(--color-accent)" }}
                  />
                )}
                <Tooltip
                  anchorSelect={`.${name}`}
                  place="bottom"
                  openOnClick={!!isMobile}
                >
                  {name}
                </Tooltip>
              </React.Fragment>
            );
          })}
        </div>
      </section>
      <section className="mb-5">
        <h2 className="font-mono text-xl md:text-2xl mb-4" style={{ color: "var(--color-accent)" }}>
          &gt; Soft Skills
        </h2>
        <ul
          className="list-none p-4 rounded-lg space-y-2 font-mono text-sm"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          {["Communication", "Teamwork", "Creativity", "Collaboration", "Inquisitiveness"].map(
            (skill) => (
              <li key={skill} style={{ color: "var(--color-text)" }}>
                • {skill}
              </li>
            )
          )}
        </ul>
      </section>
    </main>
  );
};
