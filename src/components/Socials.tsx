"use client";
import {
  RiMailFill,
  RiGithubFill,
  RiDiscordFill,
  RiInstagramFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "/",
    name: <RiMailFill />,
  },
  {
    path: "https://github.com/NamkheangV",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/_iixxix/",
    name: <RiInstagramFill />,
  },
  {
    path: "https://discord.gg/Q7VpBy4M",
    name: <RiDiscordFill />,
  },
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
