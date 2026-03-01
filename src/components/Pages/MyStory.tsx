import React from "react";

export const MyStory: React.FC = () => {
  return (
    <main className="m-0 px-4 py-8 max-w-5xl mx-auto flex flex-col">
      <h1 className="font-mono text-2xl md:text-3xl mb-4" style={{ color: "var(--color-accent)" }}>
        &gt; My Story
      </h1>
      <p style={{ color: "var(--color-text-muted)" }}>Coming soon...</p>
    </main>
  );
};
