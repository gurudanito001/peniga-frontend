"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center py-10 relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center space-x-6 px-6 py-2 rounded-lg bg-[#FAF9F8] border border-[#E0E0E0]">
        <Link href="/" className="text-xl font-bold text-[#272727] flex items-center">Peniga <div className="border-r-2 border-gray-900 h-6 w-px ml-4"></div></Link>

        <ul className="flex items-center space-x-6 p-0 m-0 text-[#272727] font-medium">
          <li className="cursor-pointer hover:text-[#C55938]">How it works</li>
          <li className="cursor-pointer hover:text-[#C55938]">Why Choose Us</li>
          <li className="cursor-pointer hover:text-[#C55938] flex items-center">FAQ <div className="h-6 w-px border-gray-900 ml-4 border-r-2"></div></li>
        </ul>
          
        <Link href="/sign-up">
        <button className="px-4 py-2 rounded-md bg-[#C55938] text-white font-medium hover:bg-[#B04A2D]">
        Get Started
        </button>
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div className="bg-[#FAF9F8] px-4 py-2 md:hidden w-[90%] md:w-0 mx-auto md:mx-0 md:p-0 border border-[#E0E0E0] rounded-md">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-[#272727]">Peniga</div>

          <button
            className="p-2 w-10 h-10 rounded-md flex items-center justify-center bg-[#C55938]"
            onClick={() => setIsOpen(true)}
          >
            <HiMenu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide in from the right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#F3F3F3] shadow-lg p-6 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-bold text-[#272727]">MENU</span>
          <button className="text-2xl text-gray-700" onClick={() => setIsOpen(false)}>
            <HiX />
          </button>
        </div>

        <div className="flex flex-col space-y-4 text-left">
          <a
            className="cursor-pointer text-[#272727] font-medium hover:text-[#C55938] border-b border-[#606060] pb-2"
            onClick={() => setIsOpen(false)}
          >
            How it works
          </a>
          <a
            className="cursor-pointer text-[#272727] font-medium hover:text-[#C55938] border-b border-[#606060] pb-2"
            onClick={() => setIsOpen(false)}
          >
            Why Choose Us
          </a>
          <a
            className="cursor-pointer text-[#272727] font-medium hover:text-[#C55938]"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>
        </div>

         <Link href="/sign-up">
        <button
          className="w-full px-4 py-3 mt-6 rounded-md bg-[#C55938] text-white font-medium hover:bg-[#B04A2D] transition"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </button>
        </Link>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;