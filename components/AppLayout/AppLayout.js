import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/abraham-tavarez-logo.png';

export const AppLayout = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState(false);
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
    <div className="h-full max-h-screen max-w-screen ">
      <div className="p-3 font-mono bg-gradient-to-r from-indigo-500 to-fuchsia-600 text-black dark:bg-gradient-to-r  dark:from-slate-500 dark:to-slate-700">
        {/* <div className="p-3 font-mono bg-gradient-to-t from-violet-500 to-violet-700 dark:from-slate-500 dark:to-slate-700"> */}
        <div className="m-2 flex justify-between items-center justify-items-center content-center">
          {/* <div className="bg-red-500"> */}
          <Image 
            src={Logo}
            className="w-50 h-50"
            width={200}
            height={200}
            alt='logo image'
          />
          {/* </div> */}
          {/* TOGGLE BUTTON  */}
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
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

        <nav className="mt-10 flex  justify-end">
          {/* DROPDOWM MENU  */}
          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setShowDropDown(!showDropDown)}
              >
                Navigation
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
            {showDropDown && (
              <div
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                  <Link
                    href="/"
                    // className="text-gray-700 block px-4 py-2 text-sm"
                    className={`block px-4 py-2 text-sm ${
                      router.pathname === "/"
                        ? "text-amber-500 dark:text-white"
                        : "text-gray-700"
                    } `}
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    onClick={() => setShowDropDown(!showDropDown)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/projects"
                    className={`block px-4 py-2 text-sm ${
                      router.pathname === "/projects"
                        ? "text-amber-500 dark:text-white"
                        : "text-gray-700"
                    } `}
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    onClick={() => setShowDropDown(!showDropDown)}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/courses"
                    className={`block px-4 py-2 text-sm ${
                      router.pathname === "/courses"
                        ? "text-amber-500 dark:text-white"
                        : "text-gray-700"
                    } `}
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    onClick={() => setShowDropDown(!showDropDown)}
                  >
                    Courses
                  </Link>
                  <Link
                    href="/blogs"
                    className={`block px-4 py-2 text-sm ${
                      router.pathname === "/blogss"
                        ? "text-amber-500 dark:text-white"
                        : "text-gray-700"
                    } `}
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    onClick={() => setShowDropDown(!showDropDown)}
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/contact"
                    className={`block px-4 py-2 text-sm ${
                      router.pathname === "/contact"
                        ? "text-amber-500 dark:text-white"
                        : "text-gray-700"
                    } `}
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    onClick={() => setShowDropDown(!showDropDown)}
                  >
                    Contact
                  </Link>
                 
                </div>
              </div>
            )}
          </div>
          {/* NAVBAR MENU  */}
          {/* <nav className="flex justify-evenly items-center">
            <Link
              className={`nav-link ${
                router.pathname === "/"
                  ? "text-amber-500 dark:text-white"
                  : "text-white"
              } `}
              href="/"
            >
              Home
            </Link>

            <Link
              className={`nav-link ${
                router.pathname === "/projects"
                  ? "text-amber-500 dark:text-white"
                  : "text-white"
              } `}
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className={`nav-link ${
                router.pathname === "/courses"
                  ? "text-amber-500 dark:text-white"
                  : "text-white"
              } `}
              href="/courses"
            >
              Courses
            </Link>
            <Link
              className={`nav-link ${
                router.pathname === "/blogs"
                  ? "text-amber-500 dark:text-white"
                  : "text-white"
              } `}
              href="/blogs"
            >
              Blogs
            </Link>
            <Link
              className={`nav-link ${
                router.pathname === "/contact"
                  ? "text-amber-500 dark:text-white"
                  : "text-white"
              } `}
              href="/contact"
            >
              Contact
            </Link>
          </nav> */}
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
