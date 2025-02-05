"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="flex flex-col gap-2 items-center justify-center py-6 bg-gray-100 px-4">
      <div className="flex space-x-4 mb-3">
        {/* Social icons remain the same */}
        <Link href="https://facebook.com" target="_blank">
          <FaFacebook className="w-6 h-6 text-[#948873] hover:text-gray-700" />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <FaTwitter className="w-6 h-6 text-[#948873] hover:text-gray-700" />
        </Link>
        <Link href="https://linkedin.com" target="_blank">
          <FaLinkedin className="w-6 h-6 text-[#948873] hover:text-gray-700" />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <FaInstagram className="w-6 h-6 text-[#948873] hover:text-gray-700" />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-2 text-center">
        <p className="text-gray-600 font-source_sans_3 text-sm md:text-base">
          © {new Date().getFullYear()} Chrissy Marketing. All rights reserved.
        </p>

        <div className="hidden md:flex gap-2">
          <span className="text-gray-600">|</span>
          <Link
            href="/privacy-policy"
            className="underline hover:text-gray-800 text-sm md:text-base"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-600">|</span>
        </div>

        <p className="text-gray-600 font-source_sans_3 text-sm md:text-base">
          Created with{" "}
          <Link
            href="https://www.leadpages.com"
            className="underline hover:text-gray-800"
          >
            Leadpages
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
