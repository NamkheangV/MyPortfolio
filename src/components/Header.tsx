"use client";
import React, { useState, useEffect } from "react";

// components
import ThemeToggler from "./ThemeToggler";
import MyNav from "./MyNav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const MyHeader = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
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
      } sticky top-0 z-30 transition-all`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="h1-logo">MyPortfolio</h1>
          <div className="flex items-center gap-x-6">
            <MyNav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underLineSyltes="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />

            {/* Mobile Nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
