import React from "react";

export const MyStory: React.FC = () => {
  return (
    <main className="m-0 px-4 py-8 max-w-5xl mx-auto flex flex-col">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: "var(--color-text)" }}>
        My Story
      </h1>
      <p className="text-base" style={{ color: "var(--color-text-muted)" }}>Coming soon...</p>
    </main>
  );
};
