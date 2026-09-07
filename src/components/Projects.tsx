import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import Section from "./Section";
import { GithubIcon } from "./BrandIcons";
import AmaGraphic from "./AmaGraphic";
import penaltyImg from "../assets/images/penalty-game.webp";

interface Project {
  name: string;
  description: string;
  image?: string;
  githubLink: string;
  liveLink?: string;
  featured?: boolean;
}

interface GithubRepo {
  name: string;
  description: string | null;
  homepage: string | null;
  html_url: string;
  fork: boolean;
  pushed_at: string;
  topics?: string[];
}

const GITHUB_USER = "oscarojling";
// Any repo tagged with this topic on GitHub shows up here automatically —
// no code changes needed to add a new project to the site.
const FEATURE_TOPIC = "portfolio";

// Group projects that live under teammates' GitHub accounts go here only
// if they can't be forked into oscarojling's own account — a fork tagged
// "portfolio" (see FEATURE_TOPIC above) is picked up by the live fetch
// instead, no entry needed. Zoo, Pokemon, and HSS have all been forked
// and tagged, so this list is empty for now.
const PINNED: Project[] = [];

// Shown until repos are tagged "portfolio" on GitHub (see FEATURE_TOPIC
// above) — once tagged, the live fetch replaces these automatically.
const FALLBACK: Project[] = [
  {
    name: "Ask Me Anything",
    description:
      "An AI chatbot embedded on my site that answers recruiter questions about me directly — background, skills, projects. Built with Next.js, the Vercel AI SDK streaming a Claude model, Drizzle + Postgres, and better-auth.",
    githubLink: `https://github.com/${GITHUB_USER}/ask-me-anything`,
    featured: true,
  },
  {
    name: "Penalty Game",
    description:
      "An interactive penalty shootout game built with JavaScript, where you take turns as both the shooter and the goalkeeper — reflexes and strategy in a turn-based football game.",
    image: penaltyImg,
    githubLink: `https://github.com/${GITHUB_USER}/Improved-penalty-game`,
  },
];

function humanize(repoName: string) {
  return repoName
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Projects() {
  const [autoProjects, setAutoProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((repos: GithubRepo[]) => {
        if (cancelled) return;
        const tagged = repos
          // Forks are allowed through too — the "portfolio" topic tag is
          // the real gate, so a tagged fork of a group project counts.
          .filter((r) => r.topics?.includes(FEATURE_TOPIC))
          .sort(
            (a, b) =>
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
          )
          .map(
            (r, i): Project => ({
              name: humanize(r.name),
              description: r.description || "No description added on GitHub yet.",
              image: `https://opengraph.githubassets.com/1/${GITHUB_USER}/${r.name}`,
              githubLink: r.html_url,
              liveLink: r.homepage || undefined,
              featured: i === 0,
            }),
          );
        if (tagged.length > 0) setAutoProjects(tagged);
      })
      .catch(() => {
        /* keep the fallback data */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const projects = [...(autoProjects ?? FALLBACK), ...PINNED];

  return (
    <Section id="projects" index="03" label="Projects">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        Recent work
      </h2>
      <p className="mt-4 max-w-xl text-[15px] text-ink/70">
        Pulled straight from GitHub — tag a repo{" "}
        <code className="rounded bg-paper-2 px-1.5 py-0.5 font-mono text-[13px]">
          {FEATURE_TOPIC}
        </code>{" "}
        and it shows up here.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className={`flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-2/50 transition-colors hover:border-accent ${
              project.featured ? "sm:col-span-2 sm:flex-row" : ""
            }`}
          >
            <div
              className={
                project.featured
                  ? "sm:w-2/5 sm:shrink-0"
                  : "aspect-video w-full"
              }
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <AmaGraphic />
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {project.name}
                </h3>
                {project.featured && (
                  <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.1em] text-accent uppercase">
                    Latest build
                  </span>
                )}
              </div>
              <p className="mt-2 line-clamp-4 flex-1 text-sm text-ink/70">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 font-mono text-[11px] tracking-[0.08em] text-paper uppercase transition-colors hover:bg-accent"
                  >
                    Live demo <ExternalLink size={12} />
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] tracking-[0.08em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
                >
                  GitHub <GithubIcon className="h-3 w-3" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
