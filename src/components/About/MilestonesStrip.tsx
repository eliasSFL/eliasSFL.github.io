import React from "react";
import { formatCommitCount, useCommitCount } from "../../utils/commitCount";

const SFL_START = new Date("2024-07-10");

const formatTenure = (start: Date, now: Date): string => {
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  if (now.getDate() < start.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  if (years === 0) return `${months} mo`;
  if (months === 0) return `${years} yr${years === 1 ? "" : "s"}`;
  return `${years} year${years === 1 ? "" : "s"} ${months} month${months === 1 ? "" : "s"}`;
};

export const MilestonesStrip: React.FC = () => {
  const commitCount = useCommitCount();
  const milestones: { label: string; value: string }[] = [
    { value: "Aug 2023", label: "First SFL PR" },
    { value: formatCommitCount(commitCount), label: "Repo commits" },
    { value: "8+", label: "Languages shipped" },
    { value: formatTenure(SFL_START, new Date()), label: "Tenure at SFL" },
  ];

  return (
    <ul className="flex flex-wrap gap-3">
      {milestones.map((m) => (
        <li
          key={m.label}
          className="flex flex-col items-start px-4 py-2 rounded-xl"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <span
            className="text-lg md:text-xl font-semibold leading-tight"
            style={{ color: "var(--color-accent-secondary)" }}
          >
            {m.value}
          </span>
          <span
            className="text-xs leading-tight"
            style={{ color: "var(--color-text-muted)" }}
          >
            {m.label}
          </span>
        </li>
      ))}
    </ul>
  );
};
