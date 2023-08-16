import Image from "next/image";
import { Inter } from "next/font/google";
import { AppLayout } from "../components/AppLayout";

// const inter = Inter({ subsets: ["latin"] });

export default function Root() {
  return (
    <main
      className={`flex p-10 w-screen h-screen overflow-hidden relative bg-gradient-to-r from-indigo-500 to-indigo-800 md:flex-col`}
    >
      <section>
        <h1 className="text-2xl text-yellow-400 font-bold mb-5">Story Mode</h1>

        <h1 className="text-xl text-yellow-400 font-bold mb-5">Location: The Root</h1>

        <p>
          Welcome, I&apos;m glad you made it here! Let&apos;s get right to
          business shall we!
        </p>

        <h1 className="text-xl text-yellow-400 font-bold my-5">Basic Controls</h1>

        <p>
          You can move to different parts of this app by clicking on the menu on
          the left.
        </p>
        <p>You can always come back to the root by clicking on the app logo.</p>

        <p>Now let me tell you a little be more about me.</p>
      </section>

      <section>
      <h1 className="text-xl text-yellow-400 font-bold my-5">WhoIam</h1>
        <p>My name is Abraham E. Tavarez, but you can call me Abe. </p>
        <p>I like movies, video games, coding and on my days off i do all kinds of sports.</p>
        <p>Currently i live in Orlando Florida but Im originally from New York City, beaches are beautiful here, anyways if you want to know more about me checkout the message section and the projects to see some of my masterpieces.</p>
      </section>
    </main>
  );
}

Root.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};
