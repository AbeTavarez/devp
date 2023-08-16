import Image from "next/image";
import { Inter } from "next/font/google";
import { AppLayout } from "../components/AppLayout";

// const inter = Inter({ subsets: ["latin"] });

export default function Message() {
  return (
    <main
      className={`flex justify-center items-center w-screen h-screen overflow-hidden relative bg-gradient-to-r from-indigo-500 to-indigo-800 md:flex-col`}
    >
      <h1>Message</h1>
    </main>
  );
}

Message.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};