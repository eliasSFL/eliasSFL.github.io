import {
  faDiscord,
  faGithub,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import profilePicture from "../../../src/assets/Elias-Profile-photo.jpeg";

interface ContactItem {
  icon: IconDefinition;
  link?: string;
  display: string;
  hover?: boolean;
}

const contactInfo: Record<string, ContactItem> = {
  Email: {
    icon: faEnvelope,
    link: "mailto:elias.chew1999@gmail.com",
    display: "elias.chew1999@gmail.com",
    hover: true,
  },
  Discord: {
    icon: faDiscord,
    display: "eliassfl",
  },
  LinkedIn: {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/eliascse",
    display: "linkedin.com/in/eliascse",
    hover: true,
  },
  GitHub: {
    icon: faGithub,
    link: "https://www.github.com/eliasSFL",
    display: "github.com/eliasSFL",
    hover: true,
  },
};

export const Contact: React.FC = () => {
  const [iframeWidth, setIframeWidth] = useState(770);

  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(770, Math.max(window.innerWidth - 40));
      setIframeWidth(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <h1 className="mt-8 text-3xl md:text-4xl font-semibold" style={{ color: "var(--color-text)" }}>
        Contact Me
      </h1>
      <img
        src={profilePicture}
        alt="Elias"
        className="rounded-2xl w-32 h-32 md:w-40 md:h-40 mt-6 object-cover shadow-lg transition-transform duration-200 hover:scale-[1.02]"
      />
      <div className="flex flex-col items-center gap-6 mt-8 w-full">
        <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: "var(--color-text)" }}>
          Socials
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center w-full max-w-2xl gap-6 md:gap-8">
          {Object.entries(contactInfo).map(
            ([social, { link, icon, display, hover }]) => (
              <div
                key={social}
                className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-200 ${
                  hover ? "cursor-pointer hover:shadow-md" : ""
                }`}
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
                onClick={() => link && handleClick(link)}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="w-12 h-12 md:w-14 md:h-14 transition-colors"
                  style={{ color: "var(--color-info)" }}
                />
                <span className="text-sm font-medium mt-3" style={{ color: "var(--color-text)" }}>
                  {social}
                </span>
                {link ? (
                  <a
                    href={link}
                    className="text-xs mt-1 break-all hover:underline"
                    style={{ color: "var(--color-info)" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {display}
                  </a>
                ) : (
                  <span className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                    {display}
                  </span>
                )}
              </div>
            )
          )}
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: "var(--color-text)" }}>
          Or fill in this form
        </h2>
        <iframe
          title="Contact Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSezSd2a3VpxDfErlGTmM8WtrgGFUrqLhu5Azs-MP_4pS6JE3w/viewform?embedded=true"
          width={iframeWidth}
          height={600}
        >
          {/* Show loading when form hasn't loaded */}
          Loading…
        </iframe>
      </div>
    </div>
  );
};
