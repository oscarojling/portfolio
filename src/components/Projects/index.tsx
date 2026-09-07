import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import Section from "../Section";
import { GithubIcon } from "../BrandIcons";
import AmaGraphic from "../AmaGraphic";
import RepoGraphic from "../RepoGraphic";
import {
  FALLBACK,
  FEATURE_TOPIC,
  FEATURED,
  GITHUB_USER,
  PINNED,
  humanize,
  type Project,
} from "../../data/projects";

interface GithubRepo {
  name: string;
  description: string | null;
  homepage: string | null;
  html_url: string;
  fork: boolean;
  pushed_at: string;
  topics?: string[];
}

export default function Projects() {
  const [taggedProjects, setTaggedProjects] = useState<Project[]>([]);
  const [taggedRepoNames, setTaggedRepoNames] = useState<Set<string>>(
    new Set(),
  );

  useEffect(() => {
    let cancelled = false;

    fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((repos: GithubRepo[]) => {
        if (cancelled) return;
        const taggedRepos = repos.filter((r) =>
          r.topics?.includes(FEATURE_TOPIC),
        );
        const tagged = [...taggedRepos]
          .sort(
            (a, b) =>
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
          )
          .map(
            (r): Project => ({
              name: humanize(r.name),
              description: r.description || "No description added on GitHub yet.",
              githubLink: r.html_url,
              liveLink: r.homepage || undefined,
            }),
          );
        setTaggedProjects(tagged);
        setTaggedRepoNames(new Set(taggedRepos.map((r) => r.name)));
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const remainingFallback = FALLBACK.filter(
    (f) => !taggedRepoNames.has(f.repoName),
  );

  const projects = [FEATURED, ...taggedProjects, ...remainingFallback, ...PINNED];

  return (
    <Section id="projects" index="03" label="Projects">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        Recent work
      </h2>
      <p className="mt-4 max-w-xl text-[15px] text-ink/70">
        A mix of coursework, group projects, and personal builds.
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
              {project.name === "Ask Me Anything" ? (
                <AmaGraphic />
              ) : (
                <RepoGraphic seed={project.name} />
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {project.name}
                </h3>
                {project.featured && (
                  <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.1em] text-accent uppercase">
                    Featured
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
