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

export const PINNED: Project[] = [
  {
    name: "GameStreet — Game On?",
    description:
      "A hackathon prototype built with another developer and two UX designers, presented to and well received by the client. GameStreet's gaming PCs were only bookable for group events with staff assistance — this reimagines that as self-service: scan a QR code on an open PC, choose and pay for playtime on your phone, and it unlocks automatically, with no booking, account, or staff needed.",
    githubLink: "https://github.com/oscarojling/hackathon-gamestreet",
    liveLink: "https://gamestreet-mobile.vercel.app/live",
  },
];

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
