"use client";
import {
  RiMailFill,
  RiGithubFill,
  RiDiscordFill,
  RiInstagramFill,
  RiLinkedinBoxFill
} from "react-icons/ri";
import Link from "next/link";
import path from "path";

const icons = [
  {
    path: "/contact",
    name: <RiMailFill />,
  },
  {
    path: "https://www.linkedin.com/in/suchanart-khumbungkhla-028688306/",
    name: <RiLinkedinBoxFill />,
  },
  {
    path: "https://github.com/NamkheangV",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/_iixxix/",
    name: <RiInstagramFill />,
  },
  // {
  //   path: "",
  //   name: <RiDiscordFill />,
  // },
];

const Socials = ({
  containerStyles,
  iconsStyles,
}: {
  containerStyles: string;
  iconsStyles: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
