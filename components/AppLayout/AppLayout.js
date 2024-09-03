import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/abraham-tavarez-logo-mini.png";
import { FaLinkedin, FaGithub, FaMoon, FaYoutube } from "react-icons/fa6";
import { useWindowSize } from "../../hooks/useWindowSize";
import GoogleAnalytics from "../GoogleAnalytics";

export const AppLayout = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const router = useRouter(); // router
  const size = useWindowSize();

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
    <div className="h-full max-h-screen max-w-screen">
      <div className=" p-3 font-mono bg-gradient-to-r from-[#181818] to-[#5EC9CC] text-black dark:bg-gradient-to-r  dark:from-slate-500 dark:to-slate-700">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <div className="flex justify-between items-center justify-items-center content-center">
          <Link href="/">
            <Image
              src={Logo}
              className=""
              width={70}
              height={20}
              alt="logo image"
            />
          </Link>
          {/* DROPDOWM MENU  */}
          {/* ********* NAVIGATION BAR AND DROP DOWN **************** */}
          {size.width < 1100 && (
            <nav className="flex">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#5EC9CC] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setShowDropDown(!showDropDown)}
                  >
                    {" "}
                    menu
                    {/* <svg
                      aria-hidden="true"
                      className="h-6 w-6 text-white hover:text-[#5EC9CC]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg> */}
                  </button>
                </div>
                <div>
                  {showDropDown && (
                    <div
                      className="absolute right-[-0%] z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        <Link
                          href="/"
                          className={`block px-4 py-2 text-sm ${
                            router.pathname === "/"
                              ? "text-[#5EC9CC]"
                              : "text-gray-700"
                          } `}
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                          onClick={() => setShowDropDown(!showDropDown)}
                        >
                          Home
                        </Link>
                        <Link
                          href="/projects"
                          className={`block px-4 py-2 text-sm ${
                            router.pathname === "/projects"
                              ? "text-[#5EC9CC]"
                              : "text-gray-700"
                          } `}
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                          onClick={() => setShowDropDown(!showDropDown)}
                        >
                          Projects
                        </Link>
                        <Link
                          href="/courses"
                          className={`block px-4 py-2 text-sm ${
                            router.pathname === "/courses"
                              ? "text-[#5EC9CC]"
                              : "text-gray-700"
                          } `}
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                          onClick={() => setShowDropDown(!showDropDown)}
                        >
                          Courses
                        </Link>
                        <Link
                          href="/blogs"
                          className={`block px-4 py-2 text-sm ${
                            router.pathname === "/blogs"
                              ? "text-[#5EC9CC]"
                              : "text-gray-700"
                          } `}
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                          onClick={() => setShowDropDown(!showDropDown)}
                        >
                          Blogs
                        </Link>
                        <Link
                          href="/contact"
                          className={`block px-4 py-2 text-sm ${
                            router.pathname === "/contact"
                              ? "text-[#5EC9CC]"
                              : "text-gray-700"
                          } `}
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                          onClick={() => setShowDropDown(!showDropDown)}
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          )}
        </div>
        <div className="mt-10 flex justify-evenly items-center  content-evenly">
          {size.width > 1100 && (
            <nav className="flex justify-evenly content-evenly">
              <Link
                className={`nav-link ${
                  router.pathname === "/"
                    ? "text-[#5EC9CC] dark:text-white"
                    : "text-white"
                } `}
                href="/"
              >
                Home
              </Link>

              <Link
                className={`nav-link ${
                  router.pathname === "/projects"
                    ? "text-[#5EC9CC] dark:text-white"
                    : "text-white"
                } `}
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className={`nav-link ${
                  router.pathname === "/courses"
                    ? "text-[#5EC9CC] dark:text-white"
                    : "text-white"
                } `}
                href="/courses"
              >
                Courses
              </Link>
              <Link
                className={`nav-link ${
                  router.pathname === "/blogs"
                    ? "text-[#5EC9CC] dark:text-white"
                    : "text-white"
                } `}
                href="/blogs"
              >
                Blogs
              </Link>
              <Link
                className={`nav-link ${
                  router.pathname === "/contact"
                    ? "text-[#5EC9CC] dark:text-white"
                    : "text-white"
                } `}
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          )}
        </div>
        {/* TOGGLE BUTTON  */}
        <div className="flex flex-end">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in  order-6 self-end ml-auto">
            <input
              ref={toggleRef}
              onChange={handleChange}
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />

            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
            <label htmlFor="toggle" className="text-xs text-white font-bold">
              Slate
            </label>
          </div>
        </div>
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
