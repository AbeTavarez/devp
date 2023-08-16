import Image from "next/image";
import { Inter } from "next/font/google";
import { AppLayout } from "../components/AppLayout";
import MyPhoto from "../public/efren-tavarez-aws-nyc-Abraham-Tavarez-1000x978.png";

// const inter = Inter({ subsets: ["latin"] });

export default function Root() {
  return (
    <main
      className={`grid grid-cols-[0.5fr_2fr] p-10 w-screen h-screen overflow-hidden relative dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-950 bg-gradient-to-r from-indigo-500 to-indigo-800 md:flex-col`}
    >
      <section className="w-auto border-r px-2">
        <h1 className="text-2xl text-yellow-400 font-bold mb-5 underline">About</h1>

        <h1 className="text-xl text-yellow-400 font-bold mb-5">
          I.T. Information Technology
        </h1>

        <p>
          Manage and maintain the organization&apos; IT infrastructure,
          including servers, networks, and systems, to ensure uninterrupted
          operations and data security
        </p>

        <h1 className="text-xl text-yellow-400 font-bold my-5">Developer</h1>

        <p>
          Develop and maintain responsive web applications using React.js,
          ensuring seamless user experiences across various devices and browsers
        </p>

        <h1 className="text-xl text-yellow-400 font-bold my-5">
          Tech Instructor
        </h1>

        <p>
          Deliver engaging and comprehensive technical training sessions,
          leveraging in-depth knowledge of the subject matter to effectively
          convey complex concepts to learners.
        </p>
      </section>

      <section className="max-w-5xl  p-10">
        <h1 className="text-2xl text-yellow-400 font-bold my-10 underline animate-bounce">
          WhoAmI
        </h1>
        <div className="">
          <Image
            width={200}
            src={MyPhoto}
            alt="my photo"
            className="rounded-full hover:scale-75 hover:skew-x-12 transition-all border-4 border-white  mr-3  float-left"
          />

          <div className="m-5">
            <p>
              Welcome, I&apos;m glad you made it here! My name is Abraham E.
              Tavarez.
            </p>
            <p>
              I love movies, video games, coding and on my days off I do all
              kinds of sports.
            </p>
            <p>
              Grew up in New York City, and I currently live in Orlando Florida.
            </p>
            <p>
              What can I say, I enjoy the hot wether and the beautiful beaches
              here.
            </p>
          </div>
        </div>

        <section className="">
          <h2 className="text-xl text-yellow-400 font-bold my-1">
            Professional Summary
          </h2>
          <p>
            Experienced React Frontend Developer with a passion for crafting
            dynamic and visually appealing user interfaces.
          </p>
          <p>
            {" "}
            Proficient in translating design concepts into responsive and
            engaging web applications using modern web technologies.
          </p>
          <p>
            Adept at collaborating with cross-functional teams to deliver
            high-quality software solutions that enhance user experiences.
          </p>
          <p>
            Skilled in optimizing application performance, staying up-to-date
            with industry trends, and continuously refining development
            processes.
          </p>
          <p>
            Ready to contribute creativity and technical expertise to drive
            innovation and elevate user-centric frontend development.
          </p>
        </section>
      </section>
    </main>
  );
}

Root.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};
