import { Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Ayodeji Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
   <Head>
        <title>Ayodeji Portfolio</title>
        <meta property="og:title" content="Ayodeji's Portfolio" />
        <meta
          property="og:description"
          content="Explore Ayodeji's portfolio showcasing innovative solutions and creative designs in web and app development."
        />
        <meta property="og:image" content="/work/deji.pdf" />
        <meta property="og:url" content="https://portfolio-tiyh.onrender.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayodeji's Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Ayodeji's portfolio showcasing innovative solutions and creative designs in web and app development."
        />
        <meta name="twitter:image" content="/work/deji.pdf" />
      </Head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
