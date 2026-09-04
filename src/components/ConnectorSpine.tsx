/**
 * The vertical trace running behind every section — the signature element
 * for this design. Grounded in something Oscar actually said about himself:
 * what he likes about development is "figuring out how pieces fit together."
 */
export default function ConnectorSpine() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-8 top-0 bottom-0 hidden w-px bg-line md:block"
    />
  );
}
