import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import Section from "./Section";
import { GithubIcon } from "./BrandIcons";
import AmaGraphic from "./AmaGraphic";
import zooImg from "../assets/images/zoo-project.webp";
import pokemonImg from "../assets/images/pokemon-project.webp";
import penaltyImg from "../assets/images/penalty-game.webp";

interface Project {
  name: string;
  description: string;
  image?: string;
  githubLink: string;
  liveLink?: string;
  featured?: boolean;
}

const BASE_PROJECTS: Project[] = [
  {
    name: "Ask Me Anything",
    description:
      "An AI chatbot embedded on Oscar's site that answers recruiter questions about him directly — background, skills, projects. Built with Next.js, the Vercel AI SDK streaming a Claude model, Drizzle + Postgres, and better-auth.",
    githubLink: "https://github.com/oscarojling/ask-me-anything",
    featured: true,
  },
  {
    name: "Australian Zoo",
    description:
      "A group project building a multi-page website for an Australian zoo. Built with HTML, CSS, and JavaScript, featuring dynamic animal displays and a full SCRUM workflow.",
    image: zooImg,
    liveLink: "https://assignment3-zoo.vercel.app/",
    githubLink: "https://github.com/SgnCycles/FG-Assignment3-Zoo",
  },
  {
    name: "Pokemon Project",
    description:
      "A group project building a Pokemon information app that fetches data from the PokeAPI — browse and discover Pokemon with detailed stats, abilities, and descriptions.",
    image: pokemonImg,
    liveLink: "https://pokemon-project-nu.vercel.app/",
    githubLink: "https://github.com/besethda/Pokemon-Project",
  },
];

const PENALTY_FALLBACK: Project = {
  name: "Penalty Game",
  description:
    "An interactive penalty shootout game built with JavaScript, where you take turns as both the shooter and the goalkeeper — reflexes and strategy in a turn-based football game.",
  image: penaltyImg,
  githubLink: "https://github.com/oscarojling/Improved-penalty-game",
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    ...BASE_PROJECTS,
    PENALTY_FALLBACK,
  ]);

  // Mirrors the original site's trick: pull the live homepage URL straight
  // from the GitHub API instead of hardcoding it.
  useEffect(() => {
    let cancelled = false;

    fetch("https://api.github.com/users/oscarojling/repos?sort=updated&per_page=20")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((repos: Array<{ name: string; homepage?: string; html_url: string }>) => {
        if (cancelled) return;
        const repo = repos.find((r) => r.name === "Improved-penalty-game");
        if (!repo) return;
        setProjects((prev) =>
          prev.map((p) =>
            p.name === "Penalty Game"
              ? { ...p, liveLink: repo.homepage || undefined, githubLink: repo.html_url }
              : p,
          ),
        );
      })
      .catch(() => {
        /* keep the fallback data */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section id="projects" index="03" label="Projects">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        Recent work
      </h2>
      <p className="mt-4 max-w-xl text-[15px] text-ink/70">
        A mix of solo and group builds — the latest being an AI chatbot
        trained on his own background.
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
              <p className="mt-2 flex-1 text-sm text-ink/70">
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
