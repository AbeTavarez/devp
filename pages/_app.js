import "@/styles/globals.css";
import { Roboto, Monoton } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: '--font-roboto'
});
const monoton = Monoton({
  weight: ["400"],
  subsets: ["latin"],
  variable: '--font-monoton'
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <main className={`${roboto.className}`}>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </main>
  );
}
