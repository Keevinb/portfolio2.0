export default function GitHubButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md border px-4 py-2 text-sm hover:bg-zinc-800"
    >
      GitHub
    </a>
  );
}
