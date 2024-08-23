import Head from "next/head";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
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
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Cta />
      </main>
    </>
  );
}
