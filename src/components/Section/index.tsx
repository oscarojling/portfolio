import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  index,
  label,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 md:py-28 md:pl-20 ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute left-8 top-[4.6rem] hidden h-3 w-3 -translate-x-1/2 rounded-full bg-accent md:block"
      />
      <p className="mb-4 font-mono text-xs tracking-[0.2em] text-pine uppercase">
        {index} — {label}
      </p>
      {children}
    </section>
  );
}
