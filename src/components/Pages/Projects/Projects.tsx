import React from "react";
import { Portfolio } from "./Portfolio";
import { SettingsMenu } from "./SFLProjects/SettingsMenu";

export const openImageOnClick = (image: string) => window.open(image, "_blank");

export const Projects: React.FC = () => {
  return (
    <main className="m-5 px-4 py-8 max-w-5xl mx-auto flex flex-col gap-8">
      <header>
        <h1 className="font-mono text-2xl md:text-3xl mb-2" style={{ color: "var(--color-accent)" }}>
          &gt; Project Showcase
        </h1>
      </header>
      {/* Portfolio Website */}
      <Portfolio openImageOnClick={openImageOnClick} />
      <section>
        <h2 className="font-mono text-xl md:text-2xl mt-6 mb-2" style={{ color: "var(--color-accent)" }}>
          &gt; Sunflower Land Projects
        </h2>
        <p style={{ color: "var(--color-text-muted)" }}>
          Here are some of the contributions that I made for Sunflower Land
        </p>
        <SettingsMenu openImageOnClick={openImageOnClick} />
      </section>
    </main>
  );
};
