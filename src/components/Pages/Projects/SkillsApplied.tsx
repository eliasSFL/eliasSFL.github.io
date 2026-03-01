import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "mobile-device-detect";
import React from "react";
import { Tooltip } from "react-tooltip";
import { SkillIcons, SkillName } from "../About";

interface Props {
  skillsArray: SkillName[];
}

export const SkillsApplied: React.FC<Props> = ({ skillsArray }) => {
  return (
    <>
      <h3 className="text-sm font-medium mt-4 mb-3" style={{ color: "var(--color-text-muted)" }}>
        Skills applied
      </h3>
      <div className="flex flex-row flex-wrap gap-3">
        {skillsArray.map((name, index) => {
          const icon = SkillIcons[name];
          return (
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
                place="top"
                openOnClick={!!isMobile}
              >
                {name}
              </Tooltip>
            </div>
          );
        })}
      </div>
    </>
  );
};
