import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "mobile-device-detect";
import React from "react";
import { Tooltip } from "react-tooltip";
import { SkillIcons, SkillName } from "../About";
import { useIsDarkMode } from "../../../utils/darkMode";

interface Props {
  skillsArray: SkillName[];
}

export const SkillsApplied: React.FC<Props> = ({ skillsArray }) => {
  const { isDarkMode } = useIsDarkMode();
  return (
    <>
      <h3 className="font-mono text-sm my-3" style={{ color: "var(--color-text-muted)" }}>
        Skills applied
      </h3>
      <div className="flex flex-row flex-wrap gap-3">
        {skillsArray.map((name, index) => {
          const icon = SkillIcons(isDarkMode)[name];
          const isString = typeof icon === "string";
          return (
            <React.Fragment key={index}>
              {isString ? (
                <img
                  src={icon}
                  alt={name}
                  className={`w-8 h-8 md:w-10 md:h-10 skill-icon ${name}`}
                />
              ) : (
                <FontAwesomeIcon
                  icon={icon}
                  className={`w-8 h-8 md:w-10 md:h-10 skill-icon ${name}`}
                  style={{ color: "var(--color-accent)" }}
                />
              )}
              <Tooltip
                anchorSelect={`.${name}`}
                place="top"
                openOnClick={!!isMobile}
              >
                {name}
              </Tooltip>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};
