import Image from "next/image";
import Link from "next/link";
import ProjectSlideshow from "@/components/ProjectSlideshow";
import TypingEffect from "@/components/TypingEffect";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const primaryButton =
  "rounded-md bg-indigo-300 px-5 py-2 font-medium text-indigo-950 hover:bg-indigo-200";

const iconButton =
  "flex h-11 w-11 items-center justify-center text-indigo-100 transition-transform duration-200 hover:scale-125 hover:text-white";

const contactTile =
  "rounded-lg border border-indigo-800 px-4 py-4 transition-colors hover:border-indigo-400";

export default function Home() {
  return (
    <>
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col-reverse items-center justify-center gap-16 px-6 py-24 sm:flex-row sm:gap-24">
        <div>
          <h1 className="text-4xl font-bold">
            <TypingEffect text="Hello, I'm Kevin" />
          </h1>
          <p className="mt-4 text-lg text-indigo-300">
            A computer engineer originally from Olofström in southern Sweden,
            currently living in Gothenburg, with an interest in embedded
            systems, electronics, and software development. I enjoy building
            things that make life easier and more enjoyable.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/keevinb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconButton}
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-bondesson-923311234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconButton}
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <Image
          src="/me.png"
          alt="Photo of Kevin"
          width={600}
          height={600}
          className="h-80 w-80 shrink-0 rounded-full object-cover sm:h-120 sm:w-120"
          priority
        />
      </section>

      <section
        id="projects"
        className="mx-auto max-w-3xl scroll-mt-20 px-6 py-24"
      >
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="mb-6 mt-2 text-indigo-300">
          Click an image to learn more about each project.
        </p>
        <ProjectSlideshow />
      </section>

      <section
        id="contact"
        className="mx-auto max-w-3xl scroll-mt-20 px-6 py-24"
      >
        <div className="rounded-2xl border border-indigo-800 bg-slate-800/40 p-8 text-center backdrop-blur sm:p-12">
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-300">
            I'm open to new opportunities and always happy to talk about
            projects. The easiest way to reach me is by email.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:kevin-bondesson@hotmail.com"
              className={contactTile}
            >
              <span className="block text-sm text-indigo-300">Email</span>
              <span className="block break-all font-medium">
                kevin-bondesson@hotmail.com
              </span>
            </a>
            <a href="tel:+46768633474" className={contactTile}>
              <span className="block text-sm text-indigo-300">Phone</span>
              <span className="block font-medium">076 - 863 34 74</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
