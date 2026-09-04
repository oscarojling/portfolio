const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <a href="#" className="font-display text-sm font-medium text-ink">
          Oscar Öjling
        </a>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11px] tracking-[0.1em] text-ink/60 uppercase transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-mono text-[11px] text-ink/40">
          Built with React &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
