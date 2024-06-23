"use client";
import Link from "next/link";
import {
  RiYoutubeFill,
  RiGithubFill,
  RiTwitterFill,
  RiFacebookFill,
} from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";

const icons = [
  {
    path: "https://www.linkedin.com/in/ayodeji-akinola-296405224/",
    name: <FaLinkedinIn />,
  },
  {
    path: "https://github.com/Mr-Rovilay",
    name: <RiGithubFill />,
  },
  {
    path: "https://x.com/Mr__rovilay",
    name: <RiTwitterFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100079050875392",
    name: <RiFacebookFill />,
  },
];

const Socials = ({ containerStyles, IconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, i) => {
        return (
          <Link href={icon.path} key={i}>
            <div className={`${IconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
