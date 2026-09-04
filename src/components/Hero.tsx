import { ArrowRight } from "lucide-react";
import Section from "./Section";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import portrait from "../assets/images/portrait.webp";

export default function Hero() {
  return (
    <Section id="about" index="01" label="About">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-start md:gap-14">
        <div className="order-2 md:order-1">
          <div className="relative w-40 md:w-full md:max-w-[280px]">
            <div className="absolute -inset-2 -z-10 rounded-2xl bg-accent/15" />
            <img
              src={portrait}
              alt="Portrait of Oscar Öjling"
              className="aspect-square w-full rounded-2xl border border-line object-cover"
              width={800}
              height={800}
            />
          </div>
          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://github.com/oscarojling"
              target="_blank"
              rel="noreferrer"
              aria-label="Oscar's GitHub"
              className="text-ink/70 transition-colors hover:text-accent"
            >
              <GithubIcon className="h-[19px] w-[19px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/oscar-%C3%B6jling-806216257/"
              target="_blank"
              rel="noreferrer"
              aria-label="Oscar's LinkedIn"
              className="text-ink/70 transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-[19px] w-[19px]" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h1 className="font-display text-4xl leading-[1.08] font-semibold tracking-tight text-ink md:text-5xl">
            Oscar Öjling
          </h1>
          <p className="mt-2 font-mono text-sm tracking-[0.02em] text-pine">
            Frontend Developer student at Futuregames
          </p>

          <div className="mt-6 space-y-4 max-w-xl text-[15px] leading-relaxed text-ink/75">
            <p>
              Hello! I'm Oscar, a frontend developer student at Futuregames,
              based in Stockholm. I hold a degree in Communications from
              Umeå University and worked at KMH — the Royal College of
              Music — maintaining their internal site, which is where my
              interest in programming started.
            </p>
            <p>
              I'm now in my second year, currently taking a databases
              course, and comfortable with TypeScript, JavaScript, React,
              Next.js, jQuery, HTML/CSS, and Node.js. Always eager to learn
              new technologies and grow as a developer.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs tracking-[0.12em] text-paper uppercase transition-colors hover:bg-accent"
          >
            Open to internships
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </Section>
  );
}
