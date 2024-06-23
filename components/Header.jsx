"use client";
import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./ui/MobileNav";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 40 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && ""}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-16 sm:w-16">
          <Link href={"/"}>
            <img
              src="/work/ayo.jpg"
              alt="ayodeji"
              className="shadow rounded-full max-w-full h-auto border-none"
            />
          </Link>
        </div>
        <div className="flex items-center gap-x-6">
          <Nav
            containerStyles="hidden xl:flex gap-x-8 items-center"
            linkStyles="relative hover:text-primary transition-all"
            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
          />
          <ThemeToggler />
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
