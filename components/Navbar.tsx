import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-800/80 backdrop-blur">
      <nav className="flex justify-end gap-6 px-6 py-4 text-lg">
        <Link href="/" className="font-bold text-slate-300 hover:text-white">
          Home
        </Link>
        <Link
          href="/#projects"
          className="font-bold text-slate-300 hover:text-white"
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className="font-bold text-slate-300 hover:text-white"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
