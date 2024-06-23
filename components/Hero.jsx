"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Socials from "./Socials";
import DevImg from "./DevImg";

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download for 3 seconds
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000);
  };

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Ayodeji</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I am a passionate web developer with a keen interest in creating
              dynamic and user-friendly web experiences. My journey in web
              development has equipped me with a diverse set of skills in both
              frontend and backend technologies. I thrive in collaborative
              environments and continuously seek opportunities to learn and
              grow.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <a
                href="/work/deji.pdf" // Ensure this path is correct relative to the public directory
                download="Ayodeji_CV.pdf"
              >
                <Button
                  variant="secondary"
                  className="gap-x-2"
                  onClick={handleDownload}
                  disabled={isDownloading}
                >
                  {isDownloading ? "Downloading..." : "Download CV"}{" "}
                  <Download size={18} />
                </Button>
              </a>
            </div>
            <Socials
              containerStyles={"flex gap-x-6 mx-auto xl:mx-0"}
              IconStyles={
                "text-foreground text-22px hover:text-primary transition-all"
              }
            />
          </div>
          <div className="hidden xl:flex relative">
            <div className="w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles={
                "relative bg-bottom rounded-full overflow-hidden shadow-lg shadow  max-w-full h-auto border-none"
              }
              imgStyles={"w-[510px] h-[462px] object-cover"}
              ImgSrc={"/work/ayo.jpg"}
              alt={"Developer Image"}
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
