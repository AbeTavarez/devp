import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <main
      className={`flex justify-center items-center w-screen h-screen overflow-hidden relative bg-gradient-to-r from-indigo-800 to-indigo-500`}
    >
      <div className="relative bg-slate-900 px-10 py-5 rounded-md max-w-screen-sm backdrop-blur-lg flex flex-col">
        <div className="self-end bg-red-500 px-2 hover:cursor-not-allowed">x</div>
        <h1 className="">
          <code className="text-green-500">$ </code>
          Hello World!
        </h1>
        <h2>
          <code className="text-green-500">$ </code>
          Abraham here...
        </h2>
        <p className="mb-4">
          <code className="text-green-500">$ </code>
          Welcome to my page, I hope you have a pleasant experience.
        </p>
        <div className="flex justify-center items-center flex-col sm:flex-row">
          <input
            type="text"
            className="mr-auto w-80 self-center p-1 shadow-sm border-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-purple-400 rounded-md mb-5 sm:mb-0"
            placeholder="type and press enter or use the mouse --- >"
            onKeyDown={(e) => e.key === 'Enter' && (window.location = '/root')}
          />
          <Link
            href="/root"
            className=" bg-violet-500 hover:bg-violet-700 py-2 px-4 rounded-md  text-bold transition-all duration-500 rotate-12 hover:rotate-[-12deg] shadow-md shadow-white"
          >
            Enter
          </Link>
        </div>
      </div>
    </main>
  );
}
