"use client";
import React, { useState, useEffect } from "react";

// components
import ThemeToggler from "./ThemeToggler";
import MyNav from "./MyNav";
import MobileNav from "./MobileNav";

const MyHeader = () => {
  return (
    <header>
      <div className="container mt-4">
        <div className="flex justify-between items-center">
          <h3>MyPortfolio</h3>
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
