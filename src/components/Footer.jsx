import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer
      role="contentinfo"
      className="w-[95%] mx-auto shadow-lg py-10 md:py-16"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-row items-center justify-center gap-6">
          <span className="text-lg font-bold text-blue-500">ReadRight</span>

          <div className="flex gap-2">
            <a
              href="https://linkedin.com/in/nrehman19"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:-translate-y-1 transition-transform"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/naifrehman/read_withEase"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:-translate-y-1 transition-transform"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://twitter.com/your-handle"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:-translate-y-1 transition-transform"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ReadRight. Improve your reading
          today!
        </p>
      </div>
    </footer>
  );
}

export default Footer;