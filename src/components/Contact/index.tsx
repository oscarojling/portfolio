import { Mail } from "lucide-react";
import Section from "../Section";
import { GithubIcon, LinkedinIcon } from "../BrandIcons";

export default function Contact() {
  return (
    <Section id="contact" index="04" label="Contact">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Let's connect
        </h2>
        <p className="mt-4 text-[15px] text-ink/70">
          Always up for collaborating on a project or talking through web
          development, or hearing about internship openings right now.
          Reach out anytime.
        </p>

        <a
          href="mailto:oscarojling@gmail.com"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-xs tracking-[0.12em] text-paper uppercase transition-opacity hover:opacity-90"
        >
          <Mail size={14} />
          Send an email
        </a>

        <div className="mt-8 flex items-center gap-5">
          <a
            href="https://github.com/oscarojling"
            target="_blank"
            rel="noreferrer"
            aria-label="Oscar's GitHub"
            className="text-ink/70 transition-colors hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-%C3%B6jling-806216257/"
            target="_blank"
            rel="noreferrer"
            aria-label="Oscar's LinkedIn"
            className="text-ink/70 transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </Section>
  );
}
