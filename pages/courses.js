import Image from "next/image";
import { AppLayout } from "../components/AppLayout";
import ComingSoon from "../public/assets/coming-soon-banner.png";
import ReactShorts from "../public/React-Shorts-YouTube-Thumbnail.png";
import GPT4 from "../public/assets/gpt-4.avif";
import ChatbotsProjects from '../public/assets/chatbots-course.png';
import AIProjects from '../public/assets/ai-projects.png';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import EmailSubscribeForm from "../components/EmailSubscribeForm";

export default function Courses() {
  return (
    <main className="w-full h-full bg-blk-dark dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-950 p-5">
      <h1 className="text-white text-3xl p-10 font-bold dark:text-white font-sans">
        Free Courses
      </h1>

      <section className="flex justify-evenly flex-wrap">
        {/* CARD  */}
        <div className="font-bold text-xl mt-5 h-full">
          <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="max-w-md mx-auto">
              <Image
                src={ChatbotsProjects}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="p-4 sm:p-6 min-h-48">
                <p className="font-bold text-gray-700 text-xl leading-7 mb-1">
                  Building Intelligent Bots!
                </p>
                <div className="flex flex-row">
                  <p className="text-[#3C3C4399] text-2xl mr-2 line-through">
                    $200
                  </p>
                  <p className="text-2xl font-bold text-[#0FB478]">FREE</p>
                </div>
                <p className="text-gray-700 text-xl mt-6">
                  Develop Intelligent Bots using NextJS, and OpenAI GPT4 models.
                </p>

                <a
                  target="_blank"
                  referrerPolicy="origin"
                  href="https://youtu.be/RnQvAZHArL0?si=EigoYUrdo1Lr5Jc8"
                  className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-slate-800 rounded-[14px] hover:bg-slate-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  aria-label="open course on youtube website"
                >
                  View on YouTube
                </a>
                {/* <a
                target="_blank"
                href="https://apps.apple.com/us/app/id1493631471"
                className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Download app
              </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* CARD  */}
        <div className="font-bold text-xl mt-5 h-full">
          <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="max-w-md mx-auto">
              <Image
                src={AIProjects}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="p-4 sm:p-6 min-h-48">
                <p className="font-bold text-gray-700 text-xl leading-7 mb-1">
                  NextJS AI Projects
                </p>
                <div className="flex flex-row">
                  <p className="text-[#3C3C4399] text-2xl mr-2 line-through">
                    $200
                  </p>
                  <p className="text-2xl font-bold text-[#0FB478]">FREE</p>
                </div>
                <p className="text-gray-700 text-xl mt-6">
                  Become a AI Web Developer by building real life AI Web Applications.
                </p>

                <a
                  target="_blank"
                  referrerPolicy="origin"
                  href="https://youtu.be/SaKVX8vzzZc?si=8PKRE2RxrXS4Jbbt"
                  className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-slate-800 rounded-[14px] hover:bg-slate-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  aria-label="open course on youtube website"
                >
                  View on YouTube
                </a>
                {/* <a
                target="_blank"
                href="https://apps.apple.com/us/app/id1493631471"
                className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Download app
              </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* CARD  */}
        <div className="font-bold text-xl mt-5 h-full">
          <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="max-w-md mx-auto">
              <Image
                src={GPT4}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="p-4 sm:p-6 min-h-48">
                <p className="font-bold text-gray-700 text-xl leading-7 mb-1">
                  NextJS Crash Course
                </p>
                <div className="flex flex-row">
                  <p className="text-[#3C3C4399] text-2xl mr-2 line-through">
                    $200
                  </p>
                  <p className="text-2xl font-bold text-[#0FB478]">FREE</p>
                </div>
                <p className="text-gray-700 text-xl mt-6">
                  Beginner friendly NextJS Course go From 0 to hero!
                </p>

                <a
                  target="_blank"
                  href="https://youtu.be/lfenDlOFycw?si=3CujfsC2OSSg3S0j"
                  className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-slate-800 rounded-[14px] hover:bg-slate-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  aria-label="open course on youtube website"
                >
                  View on YouTube
                </a>
                {/* <a
                target="_blank"
                href="https://apps.apple.com/us/app/id1493631471"
                className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Download app
              </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* CARD  */}
        <div className="font-bold text-xl mt-5 h-full">
          <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="max-w-md mx-auto">
              <Image
                src={ReactShorts}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="p-4 sm:p-6 min-h-48">
                <p className="font-bold text-gray-700 text-xl leading-7 mb-1">
                  &quot;React Shorts&quot; Full React Course
                </p>
                <div className="flex flex-row">
                  <p className="text-[#3C3C4399] text-2xl mr-2 line-through">
                    $200
                  </p>
                  <p className="text-2xl font-bold text-[#0FB478]">FREE</p>
                </div>
                <p className="text-gray-700 text-xl mt-6">
                  Beginner friendly React Course! Take a fresh looks at React.
                </p>

                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=Og6SncuVLx8&list=PLs2MFTFGx8_4knGrUEa1ZwUEEf9MmodVN"
                  className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-slate-800 rounded-[14px] hover:bg-slate-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  aria-label="open course on youtube website"
                >
                  View on YouTube
                </a>
                {/* <a
                target="_blank"
                href="https://apps.apple.com/us/app/id1493631471"
                className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Download app
              </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* JS and TS Course CARD  */}
        <div className="font-bold text-xl mt-5 h-full">
          <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="max-w-md mx-auto">
              <Image
                src={ComingSoon}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="p-4 sm:p-6 min-h-48">
                <p className="font-bold text-gray-700 text-xl leading-7 mb-1">
                  <span className="text-amber-500">
                    Cloud Developer: React & Amazon AWS
                  </span>
                </p>
                <div className="flex flex-row">
                  <p className="text-[#3C3C4399] text-2xl mr-2 line-through">
                    $200
                  </p>
                  <p className="text-2xl font-bold text-[#0FB478]">FREE</p>
                </div>
                <p className="text-gray-700 text-xl mt-6">
                  Develop Cloud Based Applications using Amazon AWS!
                </p>

                <a
                  target=""
                  href="#email-signup"
                  className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-slate-800 rounded-[14px] hover:bg-slate-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  aria-label="go to email sign up form"
                >
                  Coming Soon!
                </a>
                {/* <a
                target="_blank"
                href="https://apps.apple.com/us/app/id1493631471"
                className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Download app
              </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* NEWSLETTER  */}
        {/* <MailchimpSubscribe
          url={`https://abrahamtavarez.us14.list-manage.com/subscribe/post?u=674102ce360a5a9acf12c3683&amp;id=1c2a5f48e3&amp;f_id=001f9de0f0`}
          render={({ subscribe, status, message }) => (
            <EmailSubscribeForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        /> */}

        {/* JS and TS Course CARD  */}
        <div className="font-bold text-xl mt-5 h-full">
          <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="max-w-md mx-auto">
              <Image
                src={ComingSoon}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="p-4 sm:p-6 min-h-48">
                <p className="font-bold text-gray-700 text-xl leading-7 mb-1">
                  <span className="text-blue-500">
                    React Native: Mobile Development
                  </span>
                </p>
                <div className="flex flex-row">
                  <p className="text-[#3C3C4399] text-2xl mr-2 line-through">
                    $200
                  </p>
                  <p className="text-2xl font-bold text-[#0FB478]">FREE</p>
                </div>
                <p className="text-gray-700 text-xl mt-6">
                  Launch your own cross mobile apps for Android and iOS using
                  React Native!
                </p>

                <a
                  target=""
                  href="#email-signup"
                  className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-slate-800 rounded-[14px] hover:bg-slate-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  aria-label="go to email sign up form"
                >
                  Coming Soon!
                </a>
                {/* <a
                target="_blank"
                href="https://apps.apple.com/us/app/id1493631471"
                className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Download app
              </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* JS and TS Course CARD  */}
        <div className="font-bold text-3xl mt-5 h-full">
          <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="max-w-md mx-auto">
              <Image
                src={ComingSoon}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="p-4 sm:p-6 min-h-48">
                <p className="font-bold text-gray-700 text-xl leading-7 mb-1">
                  <span className="text-violet-400">
                    TypeScript for JavaScript Developers
                  </span>
                </p>
                <div className="flex flex-row">
                  <p className="text-[#3C3C4399] text-2xl mr-2 line-through">
                    $200
                  </p>
                  <p className="text-2xl font-bold text-[#0FB478]">FREE</p>
                </div>
                <p className="text-gray-700 text-xl mt-6">
                  Learn fast by converting JavaScript apps to TypeScript apps!
                </p>

                <a
                  target=""
                  href="#email-signup"
                  className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-slate-800 rounded-[14px] hover:bg-slate-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  aria-label="go to email sign up form"
                >
                  Coming Soon!
                </a>
                {/* <a
                target="_blank"
                href="https://apps.apple.com/us/app/id1493631471"
                className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Download app
              </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

Courses.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};
