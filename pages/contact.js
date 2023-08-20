import Image from "next/image";
import { Inter } from "next/font/google";
import { AppLayout } from "../components/AppLayout";

// const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <main
      className={`flex justify-center items-center w-full h-screen overflow-hidden relative bg-gradient-to-r from-indigo-500 to-indigo-800 md:flex-col`}
    >
       <div className="font-bold text-5xl">
      <h1>Contact Page</h1>
      <h1>Sorry, this page is being redesigned &#127912;</h1>
      <h1>Please comeback soon to see the new content!</h1>
     </div>
    </main>
  );
}

Contact.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};