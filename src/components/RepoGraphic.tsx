/**
 * Generic stand-in visual for any project pulled automatically from
 * GitHub — used instead of GitHub's own default social-preview image,
 * which renders as a busy stats card rather than something that reads
 * as a project screenshot. Alternates the accent tab color by name so a
 * row of cards doesn't look identical.
 */
export default function RepoGraphic({ seed }: { seed: string }) {
  const usesPine =
    seed.split("").reduce((sum, c) => sum + c.charCodeAt(0), 0) % 2 === 0;
  const tab = usesPine ? "#1f6f5c" : "#e85d3c";

  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      role="img"
      aria-label={`${seed} repository`}
    >
      <rect width="400" height="300" fill="#e2e4d8" />
      <rect x="48" y="66" width="304" height="168" rx="10" fill="#f4f5ee" stroke="#cac6b6" />
      <rect x="48" y="66" width="304" height="30" rx="10" fill="#15181b" />
      <rect x="48" y="86" width="304" height="10" fill="#15181b" />
      <circle cx="66" cy="81" r="4" fill="#e85d3c" />
      <circle cx="80" cy="81" r="4" fill="#edefe6" opacity="0.5" />
      <circle cx="94" cy="81" r="4" fill="#edefe6" opacity="0.3" />
      <rect x="70" y="118" width={tab === "#1f6f5c" ? 150 : 170} height="10" rx="5" fill={tab} opacity="0.85" />
      <rect x="70" y="142" width="230" height="8" rx="4" fill="#15181b" opacity="0.35" />
      <rect x="70" y="160" width="190" height="8" rx="4" fill="#15181b" opacity="0.35" />
      <rect x="70" y="178" width="210" height="8" rx="4" fill="#15181b" opacity="0.35" />
      <rect x="70" y="206" width="64" height="20" rx="10" fill={tab} />
    </svg>
  );
}
