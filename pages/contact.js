import Image from "next/image";
import { Inter } from "next/font/google";
import { AppLayout } from "../components/AppLayout";
import emailjs from '@emailjs/browser';
import {useRef} from 'react';

// const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  const formRef = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await emailjs.sendForm("service_usjsgia", "contact_template", formRef.current, "lCFaHU7UWsFAHhH4t");
      console.log(res);
    } catch (e) {
        console.log(e);
    }
  }
  return (
    <main
      className={`w-full h-screen overflow-hidden relative bg-blk-dark md:flex-col dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-950`}
    >
      <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
        <div className="md:w-full lg:w-3/5 2xl:w-4/6 flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
          <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
            <h4 className="text-2xl 2xl:text-3xl font-bold text-heading font-sans">
              Get in touch
            </h4>
          </div>
          <form
            ref={formRef}
            className="w-full mx-auto flex flex-col justify-center "
            noValidate
            onSubmit={sendEmail}
          >
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
                <div className="w-full md:w-1/2 ">
                  <label
                    htmlFor="from_name"
                    className="block text-white font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Your Name (required)
                  </label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    placeholder="Enter Your Name"
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12  bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 text-black"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                  <label
                    htmlFor="user_email"
                    className="block text-white font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Your Email (required)
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    placeholder="Enter Your Email"
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 text-black"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="subject"
                  className="block text-white font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter Your Subject"
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 text-black  bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="block text-white font-semibold text-sm leading-none mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm  focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body text-black"
                  autoComplete="off"
                  spellCheck="false"
                  rows={4}
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <div className="relative">
                <button
                  data-variant="flat"
                  className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-[#5EC9CC] text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-violet-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
</div>
    </main>
  );
}

Contact.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};