import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function QuizGame() {
  return (
    <>
      <h1 className="text-4xl font-bold">Chat Application</h1>
      <p className="mt-3 text-lg text-white">
        A real-time chat application built by a team of five in Java, with a
        frontend and backend communicating over WebSockets.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-medium text-black">
            Java
          </span>
          <span className="rounded-full bg-orange-600 px-3 py-1 text-sm font-medium text-black">
            JavaFX
          </span>
          <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-black">
            SQL
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
        src="/projects/chat-img2.png"
        alt="Chat app"
        width={1200}
        height={675}
        className="mt-10 aspect-video w-full rounded-lg border object-cover"
        priority
      />

      <h2 className="mt-12 text-2xl font-bold">About the project</h2>
      <p className="mt-3 leading-relaxed text-white">
        This project was built as part of a course in object-oriented
        programming, where we worked as a team of five to design and build a
        complete chat application from scratch. Users can create an account, log
        in and send messages to each other in real time. The focus of the course
        was not only on getting it to work, but on structuring the code well,
        using object-oriented principles and established design patterns such as
        Factory. My main responsibilities were implementing the WebSocket
        communication, setting up the database and adding emoji support.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Challenges and solutions</h2>
      <p className="mt-3 leading-relaxed text-white">
        One of the main challenges was making messages appear instantly for
        everyone in a conversation, without users having to refresh. We solved
        this with WebSockets, which keep an open connection between the client
        and the server so the server can push new messages the moment they
        arrive. Another important part was security: passwords are never stored
        in plain text, but hashed before they are saved, so they can&apos;t be
        read even if someone gets access to the database.
      </p>

      <h2 className="mt-10 text-2xl font-bold">What I learned</h2>
      <p className="mt-3 leading-relaxed text-white">
        Working in a team of five taught me how much good structure matters when
        many people work in the same codebase. Design patterns like Factory made
        it easier to add new features without breaking existing code. I also got
        hands-on experience with real-time communication and secure password
        handling.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Image
          src="/projects/chat-img3.png"
          alt="Chat app screenshot"
          width={800}
          height={450}
          className="aspect-video w-full rounded-lg border object-cover"
        />
        <Image
          src="/projects/chat-img4.png"
          alt="Chat app screenshot"
          width={800}
          height={450}
          className="aspect-video w-full rounded-lg border object-cover"
        />
      </div>
    </>
  );
}
