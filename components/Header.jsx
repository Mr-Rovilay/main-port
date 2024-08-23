"use client";

import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./ui/MobileNav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all ${
        isScrolled ? "py-1 bg-white shadow-lg dark:bg-accent" : "py-6 dark:bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="w-16 sm:w-16">
          <Image
            src="/work/ayo.jpg"
            width={58}
            height={58}
            alt="Ayodeji Olusegun Akinola"
            className="border-none rounded-full shadow"
          />
        </Link>
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
