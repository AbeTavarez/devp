import Image from "next/image";
import { Inter } from "next/font/google";
import { AppLayout } from "../components/AppLayout";
import ReactShorts from "../public/React-Shorts-YouTube-Thumbnail.png";

// const inter = Inter({ subsets: ["latin"] });

export default function Courses() {
  return (
    <main className="w-full h-full md:flex-col bg-white dark:bg-slate-900">
      <h1 className=" text-slate-900 text-5xl p-10 font-bold dark:text-white">Free YouTube Courses</h1>

      {/* CARD  */}
      <div className="font-bold text-5xl mt-5 h-96">
        <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="max-w-md mx-auto">
            <Image
              src={ReactShorts}
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div className="p-4 sm:p-6">
              <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
                &quot;React Shorts&quot; Full React Course
              </p>
              <div className="flex flex-row">
                <p className="text-[#3C3C4399] text-[17px] mr-2 line-through">
                  $200
                </p>
                <p className="text-[17px] font-bold text-[#0FB478]">FREE</p>
              </div>
              <p className="text-[#7C7C80] font-[15px] mt-6">
                Beginner friendly React Course! Take a fresh looks at React.
              </p>

              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=Og6SncuVLx8&list=PLs2MFTFGx8_4knGrUEa1ZwUEEf9MmodVN"
                className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-slate-800 rounded-[14px] hover:bg-slate-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                View on You Tube
              </a>
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/id1493631471"
                className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Download app
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

Courses.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};