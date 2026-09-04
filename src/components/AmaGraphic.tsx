/**
 * Stand-in visual for the Ask Me Anything project card — an abstract
 * conversation rendered in the same token system as the rest of the site,
 * since there's no marketing screenshot for a chat UI worth taking.
 */
export default function AmaGraphic() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      role="img"
      aria-label="Abstract illustration of a chat conversation"
    >
      <rect width="400" height="300" fill="#e2e4d8" />
      <circle cx="40" cy="36" r="3" fill="#e85d3c" />
      <circle cx="360" cy="264" r="3" fill="#1f6f5c" />
      <path
        d="M40 36 L120 36"
        stroke="#cac6b6"
        strokeWidth="1.5"
        strokeDasharray="3 4"
      />
      <path
        d="M280 264 L360 264"
        stroke="#cac6b6"
        strokeWidth="1.5"
        strokeDasharray="3 4"
      />

      {/* visitor question */}
      <rect x="40" y="60" width="180" height="34" rx="17" fill="#15181b" />
      <rect x="58" y="73" width="120" height="8" rx="4" fill="#edefe6" opacity="0.85" />

      {/* assistant reply, longer, offset right */}
      <rect x="120" y="118" width="240" height="56" rx="18" fill="#f4f5ee" stroke="#cac6b6" />
      <rect x="140" y="134" width="180" height="7" rx="3.5" fill="#15181b" opacity="0.7" />
      <rect x="140" y="150" width="130" height="7" rx="3.5" fill="#15181b" opacity="0.45" />

      {/* follow-up question */}
      <rect x="60" y="196" width="150" height="32" rx="16" fill="#15181b" />
      <rect x="76" y="208" width="96" height="7" rx="3.5" fill="#edefe6" opacity="0.85" />

      {/* streaming indicator */}
      <circle cx="150" cy="256" r="4" fill="#e85d3c" />
      <circle cx="166" cy="256" r="4" fill="#e85d3c" opacity="0.6" />
      <circle cx="182" cy="256" r="4" fill="#e85d3c" opacity="0.3" />
    </svg>
  );
}
