import Image from "next/image";
import { Inter } from "next/font/google";
import { AppLayout } from "../components/AppLayout";

// const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <main
      className={`flex justify-center items-center w-full h-screen overflow-hidden relative bg-gradient-to-r from-indigo-500 to-indigo-800 md:flex-col dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-950`}
    >
       <div className="font-bold text-2xl text-center leading-loose">
      <h1 className="underline">Contact Page</h1>
      <h1>Sorry, this page is being redesigned &#127912;</h1>
      <h1>Please comeback soon to see the new content!</h1>
     </div>
    </main>
  );
}

Contact.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};