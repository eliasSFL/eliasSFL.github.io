import React from "react";
import oldSettingsMenu from "../../../../../src/assets/old_settings_menu.png";
import { SkillsApplied } from "../SkillsApplied";
import { SkillName } from "../../About";

const oldSettingsMenuSkills: SkillName[] = [
  "TypeScript",
  "React",
  "Git",
  "GitHub",
];

export const SettingsMenu: React.FC<{
  openImageOnClick: (image: string) => Window | null;
}> = ({ openImageOnClick }) => {
  return (
    <section
      className="mt-4 p-6 md:p-8 rounded-2xl shadow-sm"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <article>
        <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: "var(--color-accent-secondary)" }}>
          Game Options Menu
        </h3>
        <div className="flex flex-col items-start gap-2">
          <div id="old-settings" className="flex flex-col items-start gap-2">
            <h4 className="text-base font-medium" style={{ color: "var(--color-text-muted)" }}>
              Old Settings Menu
            </h4>
            <div className="settings-menu-sections">
              <p className="leading-relaxed" style={{ color: "var(--color-text)" }}>
                At this point the settings menu was getting long and
                disorganised. It needs a reorganisation with clearer categories
                for each option in the settings menu
              </p>
              <img
                src={oldSettingsMenu}
                alt="Old Settings Menu"
                className="portfolio cursor-pointer rounded-xl"
                onClick={() => openImageOnClick(oldSettingsMenu)}
              />
            </div>
          </div>
          <div
            id="new-game-options"
            className="flex flex-col items-start gap-2"
          >
            <h4 className="text-base font-medium" style={{ color: "var(--color-text-muted)" }}>
              New Game Options
            </h4>
            <div className="settings-menu-sections">
              <div className="flex flex-col gap-2">
                <p>
                  When I was developing a new settings menu I categorised the
                  existing options into 2 new sections: Blockchain Settings and
                  General Settings.
                </p>
                <p className="leading-relaxed" style={{ color: "var(--color-text)" }}>
                  I also left the "Refresh from Chain", "Plaza Settings", and
                  "Logout" buttons in the main menu for quick access
                </p>
                <p className="leading-relaxed" style={{ color: "var(--color-text)" }}>
                  It's already less cluttered and more organised than before!
                </p>
              </div>
              <img
                src="https://github.com/sunflower-land/sunflower-land/assets/101262042/06edcfa3-7984-40a4-86a9-b6228c64a8d9"
                alt="New Settings Menu"
                className="portfolio cursor-pointer rounded-xl"
                onClick={() =>
                  openImageOnClick(
                    "https://github.com/sunflower-land/sunflower-land/assets/101262042/06edcfa3-7984-40a4-86a9-b6228c64a8d9"
                  )
                }
              />
            </div>
          </div>
          <div></div>
        </div>
        <SkillsApplied skillsArray={oldSettingsMenuSkills} />
      </article>
    </section>
  );
};
