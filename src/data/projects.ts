export interface Project {
  name: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  featured?: boolean;
}

export const GITHUB_USER = "oscarojling";
export const FEATURE_TOPIC = "portfolio";

export const FEATURED: Project = {
  name: "Ask Me Anything",
  description:
    "A standalone AI chatbot that answers recruiter questions about me directly, covering my background, skills, and projects. It's built with Next.js, the Vercel AI SDK streaming a Claude model, Drizzle and Postgres via Supabase, and better-auth.",
  githubLink: `https://github.com/${GITHUB_USER}/ask-me-anything`,
  liveLink: "https://ask-me-anything-red.vercel.app/",
  featured: true,
};

export const PINNED: Project[] = [];

export const FALLBACK: (Project & { repoName: string })[] = [
  {
    repoName: "Improved-penalty-game",
    name: "Penalty Game",
    description:
      "An interactive penalty shootout game built with JavaScript, where you take turns as both the shooter and the goalkeeper.",
    githubLink: `https://github.com/${GITHUB_USER}/Improved-penalty-game`,
  },
];

export function humanize(repoName: string) {
  return repoName
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
