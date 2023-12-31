import Image from "next/image";
import { Inter } from "next/font/google";
import { AppLayout } from "../components/AppLayout";
import MyPhoto from "../public/efren-tavarez-aws-nyc-Abraham-Tavarez-1000x978.png";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` sm:grid grid-cols-[0.5fr_2fr] grid-rows-2-[25%_75%] w-full h-full  bg-blk-dark  dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-950 text-white p-5`}
    >
      {/* Left SECTION  */}
      <section className="">
        <div className="flex flex-col flex-center content-center items-center">
          <h1 className="text-2xl font-bold my-10 self-center font-sans">
            Abraham E Tavarez
          </h1>
          <Image
            width={150}
            src={MyPhoto}
            alt="my photo"
            className="rounded-full hover:scale-75 transition-all border-4 border-white mb-1 shadow-xl  shadow-zinc-950  hover:skew-x-12 hover:border-slate-500"
          />
          {/* SOCIAL LINKS  */}

          <div className="mt-5 flex">
            <Link
              href="https://www.linkedin.com/in/abrahametavarez/"
              target="_blank"
              className="hover:text-amber-500 hover:animate-bounce transition-all"
            >
              <FaLinkedin size={"28"} />
            </Link>

            <Link
              href="https://github.com/AbeTavarez"
              target="_blank"
              className="hover:text-amber-500 mx-2 hover:animate-bounce transition-all"
            >
              <FaGithub size={"28"} />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCsKM1yW-g1VRsC1kcspXegQ"
              target="_blank"
              className="hover:text-amber-500 hover:animate-bounce transition-all"
            >
              <FaYoutube size={"28"} />
            </Link>
          </div>

          <div className="m-5">
            <p className="font-medium">
              <p>
                Hello I&apos;m{" "}
                <span className="text-[#5EC9CC] font-semibold">Abraham</span> 🐛
              </p>
              I enjoy building and maintaining applications.
            </p>

            <h1 className="text-xl font-bold mb-5 self-start">
              Cloud and I.T.
            </h1>

            <p className="font-medium">
              Manage and maintain the organization&apos; IT infrastructure,
              including servers, networks, and systems, to ensure uninterrupted
              operations and data security on premises and the cloud.
            </p>

            <h1 className="text-xl font-bold my-5 self-start">Developer</h1>

            <p className="font-medium">
              Develop and maintain responsive web applications using React and
              React Native, ensuring seamless user experiences across various
              devices and browsers.
            </p>

            <h1 className="text-xl font-bold my-5 self-start">
              Tech Instructor
            </h1>

            <p className="font-medium">
              Deliver engaging and comprehensive technical training sessions,
              leveraging in-depth knowledge of the subject matter to effectively
              convey complex concepts to learners.
            </p>
          </div>
        </div>
      </section>

      {/* WHOAMI SECTION  */}
      <section className="max-w-5xl p-5">
        <section className="">
          <h2 className="text-xl font-bold my-1">Professional Summary</h2>
          <p className="font-medium">
            Experienced React Frontend Developer with a passion for crafting
            dynamic and visually appealing user interfaces. Proficient in
            translating design concepts into responsive and engaging web
            applications using modern web technologies. Adept at collaborating
            with cross-functional teams to deliver high-quality software
            solutions that enhance user experiences. Skilled in optimizing
            application performance, staying up-to-date with industry trends,
            and continuously refining development processes. Ready to contribute
            creativity and technical expertise to drive innovation and elevate
            user-centric frontend development.
          </p>
        </section>
     

      {/* RECENT PROJECTS SECTION  */}
      <section className="col-span-2">
        <h3 className="text-3xl mt-10 font-bold">
          Feature Projects
        </h3>

        <div className="max-w-2xl mx-auto mb-10">
        <div class="p-4 w-full text-center  rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">

        <img className="w-full h-60 object-cover min-h-0" src='https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="open ai logo"/>

        
          <h3 class="mb-2 text-3xl font-bold text-white dark:text-white">
            <span className="underline">With Compose</span> Beta Version SAAS
          </h3>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Chat GPT-4 AI-powered SAAS solution to help you get your tasks done
            in minutes. <span className="text-white">Created with OpenAI, NextJS, Auth0 and MongoDB.</span>
          </p>
          <a
            href="https://clownfish-app-23htu.ondigitalocean.app/"
            target="_blank"
          >
            <div className="text-md text-white text-center py-4 font-heading bg-slate-900 w-48 rounded hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="text-2xl text-white"
              />
              <span className="text-white ml-5 font-sans text-sm font-semibold ">
                Visit{" "}
              </span>
            </div>
          </a>
         
        </div>
        </div>

        {/* MOBILE APP  */}
        <div class="max-w-2xl mx-auto">
          <div class="p-4 w-full text-center  rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
          <img
              className="w-full h-60 object-cover min-h-0"
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="open ai logo"
            />
            <h3 class="mb-2 text-3xl font-bold text-gray-900 text-white">
              Devle Mobile App
            </h3>
            <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Keep learning tech while having fun with Devle, FREE on iOS &
              Android.{" "}
              <span className="text-white">
                Created with React Native, JavaScript and Kotlin.
              </span>
            </p>
            <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href="https://apps.apple.com/za/app/devle/id1659893831"
                target="_blank"
                class="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  class="mr-3 w-7 h-7"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                <div class="text-left">
                  <div class="mb-1 text-xs">Download on the</div>
                  <div class="-mt-1 font-sans text-sm font-semibold">
                    Mac App Store
                  </div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.tacticalDevs.devle"
                target="_blank"
                class="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  class="mr-3 w-7 h-7"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google-play"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  ></path>
                </svg>
                <div class="text-left">
                  <div class="mb-1 text-xs">Get in on</div>
                  <div class="-mt-1 font-sans text-sm font-semibold">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      </section>
    </main>
  );
}

Home.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};
