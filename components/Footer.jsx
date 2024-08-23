import React from "react";
import Link from "next/link";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xl font-semibold">About Me</h3>
          <p className="text-gray-400">
            I am a passionate developer committed to turning your ideas into
            innovative solutions. Let's work together to create something
            amazing!
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <MailIcon size={20} />
              <span>ayodejiakinola007@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <PhoneIcon size={20} />
              <span>(+234) 8140570029</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPinIcon size={20} />
              <span>15 I.K Peters street, Ajao Estate Lagos</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Follow Me</h3>
          <div className="flex space-x-4 ">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-8 text-sm text-center text-gray-500 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Akinola Ayodeji. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
