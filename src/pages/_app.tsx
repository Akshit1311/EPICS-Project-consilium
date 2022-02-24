import type { AppProps } from "next/app";

// styles
import "@styles/globals.css";

// components
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-[#12181B]">
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
