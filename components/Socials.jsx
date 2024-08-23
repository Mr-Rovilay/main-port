"use client";
import Link from "next/link";
import {
  RiYoutubeFill,
  RiGithubFill,
  RiTwitterFill,
  RiFacebookFill,
} from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiCoderwall } from "react-icons/si";

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
  {
    path: "https://matching.turing.com/developer-resume-preview/b7be7730055b0f21b6592c70a2aa64585eb6ebf8649530",
    name: <SiCoderwall />
  },
];

const Socials = ({ containerStyles, IconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, i) => {
        return (
          <Link href={icon.path} key={i} target="_blank">
            <div className={`${IconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
