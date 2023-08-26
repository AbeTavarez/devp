import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MyPhoto from "../../public/efren-tavarez-aws-nyc-Abraham-Tavarez-1000x978.png";
import { useRouter } from "next/router";

export const AppLayout = ({ children }) => {
  const router = useRouter(); // router

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
    <div className="h-screen max-h-screen max-w-screen ">
      <div className="p-3 font-mono bg-gradient-to-r from-indigo-500 to-fuchsia-600 text-black dark:bg-gradient-to-r  dark:from-slate-500 dark:to-slate-700">
        {/* <div className="p-3 font-mono bg-gradient-to-t from-violet-500 to-violet-700 dark:from-slate-500 dark:to-slate-700"> */}
        <div className="m-2 flex justify-between">
          <h3 className="mb-1 text-xl text-white dark:text-black">
            Abraham Tavarez
          </h3>
          {/* TOGGLE BUTTON  */}
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in self-end">
            <input
              ref={toggleRef}
              onChange={handleChange}
              type="checkbox"
              name="toggle"
              id="toggle"
              class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
            <label htmlFor="toggle" class="text-xs text-amber-500 font-bold">
              Dark Mode
            </label>
          </div>
        </div>

        <nav className="mt-10">
          <nav className="flex justify-evenly items-center">
            <Link
              className={`nav-link ${
                router.pathname === "/" ? "text-amber-500 dark:text-white" : "text-white"
              } `}
              href="/"
            >
              Home
            </Link>

            <Link
              className={`nav-link ${
                router.pathname === "/projects" ? "text-amber-500 dark:text-white" : "text-white"
              } `}
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className={`nav-link ${
                router.pathname === "/courses" ? "text-amber-500 dark:text-white" : "text-white"
              } `}
              href="/courses"
            >
              Courses
            </Link>
            <Link
              className={`nav-link ${
                router.pathname === "/blogs" ? "text-amber-500 dark:text-white" : "text-white"
              } `}
              href="/blogs"
            >
              Blogs
            </Link>
            <Link
              className={`nav-link ${
                router.pathname === "/contact" ? "text-amber-500 dark:text-white" : "text-white"
              } `}
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </nav>
      </div>
      {children}
      {/* <footer className="p-10 font-mono bg-gradient-to-r from-indigo-500 to-fuchsia-600 text-black dark:bg-gradient-to-r  dark:from-slate-500 dark:to-slate-700">
        <div className="text-white">
          <h6>Abraham Tavarez</h6>
          <h5>All rights reserved | {Date()}</h5>
        </div>
      </footer> */}
    </div>
  );
};
