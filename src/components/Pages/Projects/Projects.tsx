import React from "react";
import { Portfolio } from "./Portfolio";
import { SettingsMenu } from "./SFLProjects/SettingsMenu";

export const openImageOnClick = (image: string) => window.open(image, "_blank");

export const Projects: React.FC = () => {
  return (
    <main className="m-5 px-4 py-8 max-w-5xl mx-auto flex flex-col gap-10">
      <header>
        <h1
          className="text-3xl md:text-4xl font-semibold mb-2"
          style={{ color: "var(--color-accent-secondary)" }}
        >
          Project Showcase
        </h1>
      </header>
      {/* Portfolio Website */}
      <Portfolio />
      <section>
        <h2
          className="text-2xl md:text-3xl font-semibold mt-8 mb-3"
          style={{ color: "var(--color-accent-secondary)" }}
        >
          Sunflower Land Projects
        </h2>
        <p
          className="text-base mb-6"
          style={{ color: "var(--color-text-muted)" }}
        >
          Here are some of the contributions that I made for Sunflower Land
        </p>
        <SettingsMenu openImageOnClick={openImageOnClick} />
      </section>
    </main>
  );
};
