import { FolderGit2 } from "lucide-react";

export default function RepoGraphic({ seed }: { seed: string }) {
  return (
    <div
      role="img"
      aria-label={`${seed} repository`}
      className="flex h-full w-full items-center justify-center bg-accent/10"
    >
      <FolderGit2 className="h-12 w-12 text-accent" strokeWidth={1.5} />
    </div>
  );
}
