"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      {/* <div>
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div> */}

      <div
        onClick={() => {
          setToggle(!toggle);
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className={`flex h-6 w-12 cursor-pointer rounded-full boder border-black ${
          toggle ? "justify-start bg-white" : "justify-end bg-black"
        } p-[2px]`}
      >
        <motion.div
          className={`h-5 w-5 rounded-full ${toggle ? "bg-black" : "bg-white"}`}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default ThemeToggler;
