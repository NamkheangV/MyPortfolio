import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "home" },
  { path: "/myprojects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const MyNav = ({
  containerStyles,
  linkStyles,
  underLineSyltes,
}: {
  containerStyles: string;
  linkStyles: string;
  underLineSyltes: string;
}) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underLineSyltes}`}
              ></motion.span>
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default MyNav;
