import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const pill = "rounded-full px-3 py-1 text-sm font-medium text-black";

export default function LokalBokning() {
  return (
    <>
      <h1 className="text-4xl font-bold">Room Booking Application</h1>
      <p className="mt-3 text-lg text-white">
        A full-stack web application for finding and booking rooms, built as my
        degree project at Chalmers University of Technology.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <span className={`${pill} bg-orange-400`}>Next.js</span>
          <span className={`${pill} bg-sky-400`}>React</span>
          <span className={`${pill} bg-yellow-400`}>TypeScript</span>
          <span className={`${pill} bg-blue-400`}>PostgreSQL</span>
          <span className={`${pill} bg-green-400`}>Prisma</span>
          <span className={`${pill} bg-rose-400`}>Google OAuth</span>
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
        src="/projects/login2.png"
        alt="Room booking application login page"
        width={1200}
        height={675}
        className="mt-10 aspect-video w-full rounded-lg border object-cover"
        priority
      />

      <h2 className="mt-12 text-2xl font-bold">About the project</h2>
      <p className="mt-3 leading-relaxed text-white">
        This was my degree project, where I built a complete room booking
        application, from the database to the user interface. Users sign in with
        their Google account, find a room that fits their needs and book it,
        either for themselves or together with a group.
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-6 text-white">
        <li>
          Search and advanced dynamic filtering by size, building and more
        </li>
        <li>
          Detailed room cards with the most important information at a glance
        </li>
        <li>Group bookings that can be shared with others</li>
        <li>Favorite rooms for quick access</li>
        <li>Room recommendations based on your location</li>
        <li>An admin page for managing rooms and their details</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">Challenges and solutions</h2>
      <p className="mt-3 leading-relaxed text-white">
        The plan was to fetch room information directly from Chalmers&apos;
        systems, but access to their API was not granted. Instead of letting
        that stop the project, I built an admin page where rooms and their
        details can be added and managed manually. This made the application
        more flexible, since it no longer depends on an external system and
        could be used by other organizations as well.
      </p>
      <p className="mt-3 leading-relaxed text-white">
        Security was another focus. Since the app handles personal data, I used
        Google OAuth so that only signed-in users can access sensitive
        information. Location is only used if the user gives permission, and the
        app works fully without it.
      </p>

      <h2 className="mt-10 text-2xl font-bold">What I learned</h2>
      <p className="mt-3 leading-relaxed text-white">
        Building a full application gave me experience across the whole stack,
        from database design with PostgreSQL and Prisma to the user interface in
        React. The biggest lesson was how to adapt when a plan doesn&apos;t work
        out, like the missing API access, and how a constraint can lead to a
        better and more flexible solution.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Image
          src="/projects/admin.png"
          alt="Admin page for managing rooms"
          width={800}
          height={450}
          className="aspect-video w-full rounded-lg border object-cover"
        />
        <Image
          src="/projects/allarum2.png"
          alt="Overview of all rooms"
          width={800}
          height={450}
          className="aspect-video w-full rounded-lg border object-cover"
        />
      </div>
    </>
  );
}
