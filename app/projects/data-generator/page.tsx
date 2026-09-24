import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function QuizGame() {
  return (
    <>
      <h1 className="text-4xl font-bold">Data Generator</h1>
      <p className="mt-3 text-lg text-white">
        A Python tool that generates new, realistic data from a small existing
        dataset, making it possible to train AI models when real data is
        limited.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-medium text-black">
            Python
          </span>
        </div>

        <a
          href="https://github.com/keevinb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-11 w-11 items-center justify-center text-indigo-100 transition-transform duration-200 hover:scale-125 hover:text-white"
        >
          <FaGithub className="h-5 w-5" />
        </a>
      </div>

      <Image
        src="/projects/UI_data_generator.png"
        alt="Data generator"
        width={1200}
        height={675}
        className="mt-10 aspect-video w-full rounded-lg border object-cover"
        priority
      />

      <h2 className="mt-12 text-2xl font-bold">About the project</h2>
      <p className="mt-3 leading-relaxed text-white">
        Training an AI model usually requires a lot of data, but in many real
        situations only a small sample is available. This project is a data
        generator that takes an existing dataset and extends it with new,
        synthetic data points that follow the same patterns as the original. The
        tool has a user interface where the user can load a dataset, choose how
        much data to generate, and export the result.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Challenges and solutions</h2>
      <p className="mt-3 leading-relaxed text-white">
        A key challenge was making sure the generated data was actually useful:
        realistic enough to reflect the original, but varied enough to add new
        information instead of just copying it. I experimented with both
        AI-based generation and more traditional algorithmic methods.
      </p>

      <h2 className="mt-10 text-2xl font-bold">What I learned</h2>
      <p className="mt-3 leading-relaxed text-white">
        Besides developing my Python skills, the biggest lesson was about when
        to use AI and when not to. It's tempting to add AI to everything, but a
        well-designed algorithm is often faster, cheaper and easier to
        understand and test. I now think of AI as one tool among many, to be
        used where it actually solves a problem better than simpler methods.
      </p>

      {/* <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Image
          src="/projects/quiz1.png"
          alt="Quiz game screenshot"
          width={800}
          height={450}
          className="aspect-video w-full rounded-lg border object-cover"
        />
        <Image
          src="/projects/quiz4.png"
          alt="Quiz game screenshot"
          width={800}
          height={450}
          className="aspect-video w-full rounded-lg border object-cover"
        />
      </div> */}
    </>
  );
}
