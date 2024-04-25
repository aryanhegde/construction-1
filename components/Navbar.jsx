"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#161517] h-[144px] text-white fixed  top-0 w-full  ">
      <div className="flex items-center  h-full justify-between w-[85%] mx-auto">
        <div className="text-2xl lg:text-4xl font-medium md:text-3xl">
          LV Constructions
        </div>
        <ul className="hidden md:flex lg:gap-8 md:gap-5 ">
          <Link href="#" className="hover:underline underline-offset-8">
            Home
          </Link>
          <Link
            href="/services"
            className="hover:underline underline-offset-8 "
          >
            Services
          </Link>
          <Link href="/projects" className="hover:underline underline-offset-8">
            Projects
          </Link>
          <Link href="/gallery" className="hover:underline underline-offset-8">
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-violet-200 hover:underline underline-offset-8"
          >
            Contact
          </Link>
        </ul>

        {/* MOBILE NAVIGATION COMPONENT */}

        <ul className="flex md:hidden flex-col relative">
          {isOpen ? (
            <X className="h-8 w-8" onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <Menu className="h-8 w-8" onClick={() => setIsOpen(!isOpen)} />
          )}
          {isOpen && (
            <div className="flex flex-col gap-3 p-4 fixed mt-10   shadow-purple-300 right-0 bg-[#161517] w-36 items-end shadow-[_10px_5px_4px_0px] ">
              <Link href="#" className="hover:underline underline-offset-8">
                Home
              </Link>
              <Link
                href="/services"
                className="hover:underline underline-offset-8 "
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="hover:underline underline-offset-8"
              >
                Projects
              </Link>
              <Link
                href="/gallery"
                className="hover:underline underline-offset-8"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-violet-200 hover:underline underline-offset-8"
              >
                Contact
              </Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
