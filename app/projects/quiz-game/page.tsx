import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function QuizGame() {
  return (
    <>
      <h1 className="text-4xl font-bold">Quiz game</h1>
      <p className="mt-3 text-lg text-white">
        A multiplayer quiz game about the UN's 17 Sustainable Development Goals,
        where every answer is a number between 0 and 100.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-medium text-black">
            JavaScript
          </span>
          <span className="rounded-full bg-orange-600 px-3 py-1 text-sm font-medium text-black">
            HTML
          </span>
          <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-black">
            CSS
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
        src="/projects/quiz4.png"
        alt="Quiz game"
        width={1200}
        height={675}
        className="mt-10 aspect-video w-full rounded-lg border object-cover"
        priority
      />

      <h2 className="mt-12 text-2xl font-bold">About the project</h2>
      <p className="mt-3 leading-relaxed text-white">
        Know-it Showdown is a browser-based quiz game that tests how much you
        know about the UN's Sustainable Development Goals. Instead of multiple
        choice, every question has a numeric answer between 0 and 100, so
        players have to estimate rather than guess between options, and the
        closest answer wins. Anyone can create a game and share a code with
        friends, or join an existing game, without needing an account. It was
        built it with JavaScript, HTML and CSS to make learning about global
        issues a bit more fun and competitive, as a part of a agile software
        development course at Chalmers University of Technology.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Challenges and solutions</h2>
      <p className="mt-3 leading-relaxed text-white">
        The hardest part was managing the game state and keeping it in sync
        between players over WebSockets. Every player needs to see the same
        question, timer and scores at the same time, and things like players
        joining mid-game, answering at different speeds or disconnecting could
        easily make the state drift apart. I solved this by letting the server
        own the game state and treating it as the single source of truth:
        players send their actions to the server, the server updates the state,
        and then broadcasts the new state to everyone in the game. This made the
        game much more predictable and easier to debug.
      </p>

      <h2 className="mt-10 text-2xl font-bold">What I learned</h2>
      <p className="mt-3 leading-relaxed text-white">
        I learned how real-time applications work with WebSockets, and how
        important it is to have a clear structure for state when several clients
        depend on the same data. I also got better at thinking about edge cases,
        like what should happen when someone leaves or reconnects, and at
        designing a game flow that feels smooth for the player.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Image
          src="/projects/quiz1.png"
          alt="Quiz game screenshot"
          width={800}
          height={450}
          className="aspect-video w-full rounded-lg border object-cover"
        />
        <Image
          src="/projects/quiz2.png"
          alt="Quiz game screenshot"
          width={800}
          height={450}
          className="aspect-video w-full rounded-lg border object-cover"
        />
      </div>
    </>
  );
}
