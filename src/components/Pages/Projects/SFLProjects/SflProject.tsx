import React from "react";
import { SkillsApplied } from "../SkillsApplied";
import { prUrl, SflProject as SflProjectData } from "../../../../data/sflProjects";

interface Props {
  project: SflProjectData;
  openImageOnClick: (image: string) => Window | null;
}

export const SflProject: React.FC<Props> = ({ project, openImageOnClick }) => {
  return (
    <section
      id={project.id}
      className="mt-4 p-6 md:p-8 rounded-2xl shadow-sm"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <article>
        <header className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
          <h3
            className="text-xl md:text-2xl font-semibold"
            style={{ color: "var(--color-accent-secondary)" }}
          >
            {project.title}
          </h3>
          <span
            className="text-sm font-medium"
            style={{ color: "var(--color-text-muted)" }}
          >
            {project.date}
          </span>
        </header>

        <p
          className="leading-relaxed mb-4"
          style={{ color: "var(--color-text)" }}
        >
          {project.summary}
        </p>

        {project.details && project.details.length > 0 && (
          <ul
            className="list-disc pl-6 mb-4 flex flex-col gap-1"
            style={{ color: "var(--color-text)" }}
          >
            {project.details.map((detail, i) => (
              <li key={i} className="leading-relaxed">
                {detail}
              </li>
            ))}
          </ul>
        )}

        {project.images && project.images.length > 0 && (
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {project.images.map((image, i) => (
              <figure key={i} className="flex flex-col gap-1 flex-1 min-w-0">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="portfolio cursor-pointer rounded-xl w-full"
                  onClick={() => openImageOnClick(image.src)}
                />
                <figcaption
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {project.prs && project.prs.length > 0 && (
          <div className="mt-4">
            <h4
              className="text-sm font-medium mb-2"
              style={{ color: "var(--color-text-muted)" }}
            >
              Representative PRs
            </h4>
            <div className="flex flex-row flex-wrap gap-2">
              {project.prs.map((pr) => (
                <a
                  key={`${pr.repo}-${pr.number}`}
                  href={prUrl(pr)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="skill-pill text-xs"
                  style={{ color: "var(--color-text)" }}
                >
                  <span style={{ color: "var(--color-text-muted)" }}>
                    {pr.repo}
                  </span>
                  <span>#{pr.number}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <SkillsApplied skillsArray={project.skills} />
      </article>
    </section>
  );
};
