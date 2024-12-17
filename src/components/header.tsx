"use client";
import { RxEnvelopeClosed } from "react-icons/rx";
import { PiPhoneCallBold } from "react-icons/pi";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { CiHeart, CiSearch } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full md:w-[1170px] mt-[30px] px-4 md:px-16 items-center max-w-screen-xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-1 items-center">
          <h2 className="font-bold mr-16 font-inter text-[#000000] text-center md:text-left text-3xl md:text-[24px] md:w-auto">
            Hekto
          </h2>
          <button
            className="sm:hidden text-[#7E33E0] text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } sm:flex flex-col sm:flex-row absolute sm:static top-[100%] left-0 w-full sm:w-auto bg-white sm:bg-transparent z-10 sm:space-x-6`}
          >
            <Link
              href="/"
              className="text-[#FB2E86] font-[Lato] text-sm px-4 py-2 sm:px-0"
            >
              Home
            </Link>
            <Link
              href="#HeroSection"
              className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
            >
              Pages
            </Link>
            <Link
              href="#Latest"
              className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
            >
              Products
            </Link>
            <Link
              href="#LatestBlog"
              className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
            >
              Blog
            </Link>
            <Link
              href="/shop"
              className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center ml-auto mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-[200px] h-[35px] border border-[#ddd] px-4 text-sm rounded-l"
          />
          <div className="w-[35px] h-[35px] bg-[#FB2E86] flex items-center justify-center rounded-r">
            <CiSearch className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

