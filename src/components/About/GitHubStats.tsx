import React from "react";
import { useIsDarkMode } from "../../utils/darkMode";

const USERNAME = "eliasSFL";

export const GitHubStats: React.FC = () => {
  const { isDarkMode } = useIsDarkMode();
  const theme = isDarkMode ? "tokyonight" : "default";
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&hide_border=true&theme=${theme}`;
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&hide_border=true&theme=${theme}`;

  return (
    <div className="flex flex-col md:flex-row gap-4 items-stretch">
      <img
        key={`stats-${theme}`}
        src={statsUrl}
        alt={`${USERNAME} GitHub stats`}
        className="rounded-xl flex-1 min-w-0"
        loading="lazy"
      />
      <img
        key={`langs-${theme}`}
        src={langsUrl}
        alt={`${USERNAME} top languages`}
        className="rounded-xl flex-1 min-w-0"
        loading="lazy"
      />
    </div>
  );
};
