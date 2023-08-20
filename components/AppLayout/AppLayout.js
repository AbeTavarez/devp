import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MyPhoto from "../../public/efren-tavarez-aws-nyc-Abraham-Tavarez-1000x978.png";

export const AppLayout = ({ children }) => {
  // handle dark mode
  const toggleRef = useRef();
  const handleChange = () => {
    if (toggleRef.current.checked) {
      toggleRef.current.style.right = 0;
      toggleRef.current.style.left = "";
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      toggleRef.current.style.left = 0;
      toggleRef.current.style.right = "";
    }
  };
  return (
    <div className="h-full max-h-screen max-w-screen transition-all">
      <div className="p-3 font-mono bg-gradient-to-t from-slate-500 to-slate-700">
        <div className="m-2 flex justify-between">
          <Image
            width={100}
            src={MyPhoto}
            alt="my photo"
            className="rounded-full hover:scale-75 hover:skew-x-12 transition-all border-4 border-white mr-5 object-cover shadow-xl  shadow-zinc-950"
          />

          {/* TOGGLE BUTTON  */}
          <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in self-end">
            <input
              ref={toggleRef}
              onChange={handleChange}
              type="checkbox"
              name="toggle"
              id="toggle"
              class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              for="toggle"
              class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
            <label for="toggle" class="text-xs text-yellow-400">
              Dark Mode
            </label>
          </div>
        </div>

        <nav className="mt-10">
          <h3 className="mb-1 text-xl">Abraham Tavarez</h3>
         <nav className="flex justify-evenly">
         <Link
            className="font-bold border-b rounded-t-sm px-5 py-2 hover:scale-125 hover:text-slate-900 mt-2 dark: transition-all"
            href="/home"
          >
            Home
          </Link>

          <Link
            className="font-bold border-b p-1 hover:scale-125 hover:text-slate-900 mt-2 dark: transition-all"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="font-bold border-b p-1 hover:scale-125 hover:text-slate-900 mt-2 dark: transition-all"
            href="/resources"
          >
            Resources
          </Link>
          <Link
            className="font-bold border-b p-1 hover:scale-125 hover:text-slate-900 mt-2 dark: transition-all"
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            className="font-bold border-b p-1 hover:scale-125 hover:text-slate-900 mt-2 dark: transition-all"
            href="/contact"
          >
            Contact
          </Link>
         </nav>
        </nav>
      </div>
      {children}
    </div>
  );
};
