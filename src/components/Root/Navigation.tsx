import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/Elias_Chew_logo.png";
import logo_dark from "../../../src/assets/elias_chew_logo_dark.png";
import { useIsDarkMode } from "../../utils/darkMode";

const NAVIGATION_LINKS = {
  About: "/",
  "My Story": "/story",
  Projects: "/projects",
  Contact: "/contact",
};

export const Navigation: React.FC = () => {
  const { isDarkMode } = useIsDarkMode();
  return (
    <nav>
      <div className="nav-logo" style={{ backgroundColor: "var(--color-surface)" }}>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
          className="text-5xl"
        >
          <img src={isDarkMode ? logo_dark : logo} alt="Elias" />
        </Link>
      </div>
      <ul className="nav-links">
        {Object.entries(NAVIGATION_LINKS).map(([key, value], index) => (
          <li key={index}>
            <NavLink
              to={value}
              end={key === "About"}
              className={({ isActive }) =>
                `nav-link ${isActive ? `nav-link-active` : ""}`
              }
            >
              {key}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
