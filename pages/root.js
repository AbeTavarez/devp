import Image from "next/image";
import { Inter } from "next/font/google";
import { AppLayout } from "../components/AppLayout";

// const inter = Inter({ subsets: ["latin"] });

export default function Root() {
  return (
    <main
      className={`flex justify-center items-center w-screen h-screen overflow-hidden relative bg-gradient-to-r from-indigo-500 to-indigo-800`}
    >
      <h1>Root</h1>
    </main>
  );
}

Root.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};
