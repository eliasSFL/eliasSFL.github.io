import { SkillName } from "../components/Pages/About";
import oldSettingsMenu from "../assets/old_settings_menu.png";

export type PrRef = { repo: "FE" | "BE"; number: number };

export type ProjectImage = { src: string; caption: string };

export type SflProject = {
  id: string;
  title: string;
  date: string;
  summary: string;
  details?: string[];
  skills: SkillName[];
  prs?: PrRef[];
  images?: ProjectImage[];
};

const FE_REPO = "https://github.com/sunflower-land/sunflower-land";
const BE_REPO = "https://github.com/sunflower-land/sunflower-land-api";

export const prUrl = ({ repo, number }: PrRef) =>
  `${repo === "FE" ? FE_REPO : BE_REPO}/pull/${number}`;

const NEW_SETTINGS_MENU =
  "https://github.com/sunflower-land/sunflower-land/assets/101262042/06edcfa3-7984-40a4-86a9-b6228c64a8d9";

export const sflProjects: SflProject[] = [
  {
    id: "pets",
    title: "Pets ecosystem",
    date: "2025-08 → 2026-03",
    summary:
      "Owned a major game system end-to-end across FE and BE: pet shop, requests/levels, neglect/fetch, helping visitors. Then extended it on-chain with NFT pets, reveal/traits, marketplace listings, offers, and ticket auctions.",
    details: [
      "Foundational mechanics: shop, requests, levels, neglect/fetch, helping visiting pets",
      "On-chain extension: NFT functionality, level perks for NFT pets, NFT pet restrictions, reveal/trait pipeline",
      "Marketplace integration: listings, offers, query and reveal flows for pets",
      "Auctions: NFT pet ticket auctions",
    ],
    skills: ["TypeScript", "React", "NodeJS", "MongoDB", "Web3", "AWS"],
    prs: [
      { repo: "FE", number: 6210 },
      { repo: "FE", number: 6213 },
      { repo: "FE", number: 6238 },
      { repo: "FE", number: 6331 },
      { repo: "FE", number: 6450 },
      { repo: "BE", number: 2689 },
      { repo: "BE", number: 2776 },
    ],
  },
  {
    id: "skills-revamp",
    title: "Skills Revamp",
    date: "2024-09 → 2025-02",
    summary:
      "Multi-month rewrite of the player progression system spanning Mining, Compost, Animal, Fruit, and Machinery skill trees. Designed the new skill power model and shipped behind a beta-testing flag before a full rollout.",
    details: [
      "Five skill trees rewritten end-to-end (Mining, Compost, Animal, Fruit, Machinery)",
      "Enhanced Skills UI with a new tree visualisation",
      "Skill Powers model introduced",
      "Beta-testing rollout via feature flags",
    ],
    skills: ["TypeScript", "React", "NodeJS", "MongoDB"],
    prs: [
      { repo: "FE", number: 4458 },
      { repo: "FE", number: 4869 },
      { repo: "FE", number: 4906 },
      { repo: "FE", number: 4894 },
      { repo: "FE", number: 4499 },
      { repo: "FE", number: 4925 },
      { repo: "FE", number: 5136 },
      { repo: "BE", number: 1527 },
      { repo: "BE", number: 1545 },
    ],
  },
  {
    id: "i18n-platform",
    title: "i18n localisation platform",
    date: "2024-02 → 2026-01",
    summary:
      "Built the localisation system from scratch — translation library, dictionary architecture, language switcher, an automated AWS Translate workflow for new keys, and CJK font handling. Eight+ languages now ship with the game.",
    details: [
      "Translation library and dictionary file architecture",
      "Language switcher with metadata-stored preference and English fallback",
      "Automated translation pipeline backed by AWS Translate for new keys",
      "Eight+ language packs: Chinese (Simplified), Spanish, Italian, German, Korean, Japanese, Malay, Indonesian",
      "Chinese-fonts loader for CJK support",
    ],
    skills: ["TypeScript", "React", "NodeJS", "AWS"],
    prs: [
      { repo: "FE", number: 3304 },
      { repo: "FE", number: 3463 },
      { repo: "FE", number: 4309 },
      { repo: "FE", number: 3748 },
      { repo: "FE", number: 3853 },
      { repo: "FE", number: 6673 },
      { repo: "FE", number: 6804 },
    ],
  },
  {
    id: "salt-awakening",
    title: "Salt Awakening Chapter",
    date: "2026-02 → present",
    summary:
      "Current seasonal content drop — full vertical from new resource (Salt Farm) through processing buildings (Aging Shed, Fermentation Racks, Spice Rack) to consumables (Fermented Fertilisers). Shipped end-to-end across FE and BE with a beta-testing rollout.",
    details: [
      "Salt Farm — new harvestable resource and node placement",
      "Aging Shed upgrade with ingredient-state UI indicators",
      "Fermentation Racks and Spice Rack buildings",
      "Fermented Fertilisers consumable line",
      "Post-release rebalancing of salt and bait economy",
    ],
    skills: ["TypeScript", "React", "Phaser", "NodeJS", "MongoDB"],
    prs: [
      { repo: "FE", number: 7035 },
      { repo: "FE", number: 7053 },
      { repo: "FE", number: 7059 },
      { repo: "FE", number: 7067 },
      { repo: "FE", number: 7090 },
      { repo: "FE", number: 7130 },
      { repo: "BE", number: 3262 },
      { repo: "BE", number: 3274 },
    ],
  },
  {
    id: "prng",
    title: "Determinism / counter-based PRNG rollout",
    date: "2025-10 → 2026-04",
    summary:
      "Replaced ad-hoc Math.random calls across a multi-year codebase with a seeded counter-based PRNG. Audit-friendly, replay-stable, and rolled out incrementally across yields, cooking, fishing, composting, and tree cooldowns.",
    details: [
      "Designed a counter-based PRNG suitable for replay/audit",
      "Migrated resource yield, cooking boosts, tree cooldowns, fetch yield, composter bait",
      "Per-feature rollout to keep regressions traceable",
    ],
    skills: ["TypeScript", "NodeJS"],
    prs: [
      { repo: "FE", number: 6556 },
      { repo: "FE", number: 6770 },
      { repo: "FE", number: 6553 },
      { repo: "FE", number: 6420 },
      { repo: "FE", number: 6811 },
      { repo: "FE", number: 7077 },
      { repo: "BE", number: 2940 },
    ],
  },
  {
    id: "marketplace-crafting",
    title: "Marketplace & Crafting",
    date: "2024-08 → 2026-03",
    summary:
      "Trade Points economy, signature-verified marketplace listings, instant crafting, crafting box queues, and search/filter improvements across the in-game economy stack.",
    details: [
      "Trade Points and Marketplace Reward Shop",
      "Signature verification for listings and offer acceptance",
      "Instant Crafting and Crafting Box Queues",
      "Marketplace search and filters (Buds, Pets)",
    ],
    skills: ["TypeScript", "React", "NodeJS", "MongoDB", "Web3"],
    prs: [
      { repo: "FE", number: 4838 },
      { repo: "FE", number: 4416 },
      { repo: "FE", number: 5794 },
      { repo: "FE", number: 6984 },
      { repo: "FE", number: 6385 },
      { repo: "FE", number: 6545 },
      { repo: "BE", number: 2080 },
    ],
  },
  {
    id: "auctions",
    title: "Auctions system",
    date: "2024-07 → 2026-04",
    summary:
      "Recurring auction infrastructure for wearables and collectibles, extended with NFT ticket auctions, boost integration, cancel-bid flows, and item-restriction handling.",
    details: [
      "Auction wearables and collectibles infra",
      "Auction Boosts iterated across multiple seasons",
      "Pet NFT ticket auctions",
      "Cancel Bid flow and wearable restrictions for auction items",
    ],
    skills: ["TypeScript", "React", "NodeJS", "MongoDB", "Web3"],
    prs: [
      { repo: "FE", number: 4107 },
      { repo: "FE", number: 4108 },
      { repo: "FE", number: 6450 },
      { repo: "FE", number: 6510 },
      { repo: "FE", number: 7160 },
      { repo: "BE", number: 1350 },
      { repo: "BE", number: 1351 },
      { repo: "BE", number: 2911 },
    ],
  },
  {
    id: "settings-menu",
    title: "Game Options Menu redesign",
    date: "Earlier",
    summary:
      "Reorganised a long, cluttered settings menu into clearer categories — Blockchain Settings and General Settings — while keeping high-frequency actions (Refresh from Chain, Plaza, Logout) in the main menu for quick access.",
    skills: ["TypeScript", "React", "Git", "GitHub"],
    images: [
      { src: oldSettingsMenu, caption: "Before — original settings menu" },
      { src: NEW_SETTINGS_MENU, caption: "After — categorised game options" },
    ],
  },
];
