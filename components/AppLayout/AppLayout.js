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
      toggleRef.current.style.left = '';
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      toggleRef.current.style.left = 0;
      toggleRef.current.style.right = '';
    }
  }
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className="p-3 font-mono">
        <div className="m-2 flex justify-between">
          <Image
            width={100}
            src={MyPhoto}
            alt="my photo"
            className="rounded-full hover:scale-75 hover:skew-x-12 transition-all border-4 border-white mr-5 object-cover"
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
        <h4 className="text-3xl font-bold mt-5 text-indigo-500 tracking-wide  shadow-md shadow-indigo-400 p-2 hover:shadow-lg hover:shadow-indigo-400 hover:text-white hover:cursor-pointer">
          <Link href="/root">Abraham E. Tavarez</Link>
        </h4>
        <nav className="mt-10 flex flex-col">
          <h3 className="mb-1 text-xl text-yellow-400">Directory</h3>
          <Link
            className="bg-violet-400 font-bold border-b rounded-t-sm p-1 hover:translate-x-2 mt-2 dark:bg-slate-500"
            href="/root"
          >
            /Root
          </Link>

          <Link
            className="bg-violet-400 font-bold border-b p-1 hover:translate-x-2 mt-2 dark:bg-slate-500"
            href="/projects"
          >
            /Projects
          </Link>
          <Link
            className="bg-violet-400 font-bold border-b p-1 hover:translate-x-2 mt-2 dark:bg-slate-500"
            href="/resources"
          >
            /Resources
          </Link>
          <Link
            className="bg-violet-400 font-bold border-b p-1 hover:translate-x-2 mt-2 dark:bg-slate-500"
            href="/blogs"
          >
            /Blogs
          </Link>
          <Link
            className="bg-violet-400 font-bold border-b p-1 hover:translate-x-2 mt-2 dark:bg-slate-500"
            href="/message"
          >
            /Message
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
};
