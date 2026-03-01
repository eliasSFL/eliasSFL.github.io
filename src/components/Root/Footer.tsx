import React from "react";
import SwitchToggle from "../Switch/Switch";
import { useIsDarkMode } from "../../utils/darkMode";

export const Footer: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useIsDarkMode();

  return (
    <footer
      className="flex flex-col-reverse p-6 md:p-8 text-center text-sm md:text-base relative"
      style={{
        backgroundColor: "var(--color-footer-bg)",
        color: "var(--color-footer-text)",
      }}
    >
      <div className="mt-2 md:mt-0 md:absolute md:bottom-4 md:left-4">
        <SwitchToggle
          toggleEnabled={"Dark Mode"}
          toggleDisabled={"Light Mode"}
          isToggled={isDarkMode}
          toggleEffect={toggleDarkMode}
        />
      </div>
      <div>
        <p>Designed and built by Elias Chew</p>
        <p>Powered by React, TypeScript and Tailwind CSS</p>
        <a
          href="https://github.com/eliasSFL/portfolio"
          target="_blank"
          rel="noreferrer"
          className="mt-2 transition-colors hover:opacity-80"
          style={{ color: "var(--color-highlight)" }}
        >
          View Source Code
        </a>
        <p>&copy; 2025 Elias Chew. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
