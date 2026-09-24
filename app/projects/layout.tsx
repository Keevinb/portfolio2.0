import Link from "next/link";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/#projects"
        className="text-sm text-indigo-300 hover:underline"
      >
        Back to projects
      </Link>
      <div className="mt-6">{children}</div>
    </article>
  );
}
