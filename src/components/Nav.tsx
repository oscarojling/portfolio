import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-line bg-paper/90 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="flex items-center gap-2.5 font-display text-lg font-semibold text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink font-mono text-xs font-medium text-paper">
            OÖ
          </span>
          <span className="hidden sm:inline">Oscar Öjling</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs tracking-[0.15em] text-ink/70 uppercase transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://github.com/oscarojling"
            target="_blank"
            rel="noreferrer"
            aria-label="Oscar's GitHub"
            className="text-ink/70 transition-colors hover:text-accent"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-%C3%B6jling-806216257/"
            target="_blank"
            rel="noreferrer"
            aria-label="Oscar's LinkedIn"
            className="text-ink/70 transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 font-mono text-xs tracking-[0.1em] text-paper uppercase transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm tracking-[0.1em] text-ink uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-5">
            <a
              href="https://github.com/oscarojling"
              target="_blank"
              rel="noreferrer"
              aria-label="Oscar's GitHub"
              className="text-ink/70"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/oscar-%C3%B6jling-806216257/"
              target="_blank"
              rel="noreferrer"
              aria-label="Oscar's LinkedIn"
              className="text-ink/70"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
