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
      className="mt-4 p-5 rounded-lg md:grid md:grid-cols-[1fr_auto] gap-5"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <article>
        <h3 className="font-mono text-lg md:text-xl mb-3" style={{ color: "var(--color-accent)" }}>
          &gt; Game Options Menu
        </h3>
        <div className="flex flex-col items-start gap-2">
          <div id="old-settings" className="flex flex-col items-start gap-2">
            <h4>Old Settings Menu</h4>
            <div className="settings-menu-sections">
              <p>
                At this point the settings menu was getting long and
                disorganised. It needs a reorganisation with clearer categories
                for each option in the settings menu
              </p>
              <img
                src={oldSettingsMenu}
                alt="Old Settings Menu"
                onClick={() => openImageOnClick(oldSettingsMenu)}
              />
            </div>
          </div>
          <div
            id="new-game-options"
            className="flex flex-col items-start gap-2"
          >
            <h4 className="font-mono text-sm" style={{ color: "var(--color-text-muted)" }}>
              New Game Options
            </h4>
            <div className="settings-menu-sections">
              <div className="flex flex-col gap-2">
                <p>
                  When I was developing a new settings menu I categorised the
                  existing options into 2 new sections: Blockchain Settings and
                  General Settings.
                </p>
                <p>
                  I also left the "Refresh from Chain", "Plaza Settings", and
                  "Logout" buttons in the main menu for quick access
                </p>
                <p>
                  It's already less cluttered and more organised than before!
                </p>
              </div>
              <img
                src="https://github.com/sunflower-land/sunflower-land/assets/101262042/06edcfa3-7984-40a4-86a9-b6228c64a8d9"
                alt="New Settings Menu"
                className="portfolio cursor-pointer rounded"
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
