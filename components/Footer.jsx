import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#161517] ">
      <div className="w-[85%] flex flex-col items-center text-white  mx-auto ">
        <h1 className="text-start mt-16 text-xl">LV Constructions</h1>
        <ul className="flex gap-10 my-8">
          <Link href="/" className="hover:underline underline-offset-4">
            Home
          </Link>
          <div className="border-l border-gray-300 h-6  mx-auto" />
          <Link href="/" className="hover:underline underline-offset-4">
            Services
          </Link>
          <div className="border-l border-gray-300 h-6  mx-auto" />
          <Link href="/" className="hover:underline underline-offset-4">
            Gallery
          </Link>
        </ul>
        <hr className="my-6 border w-full border-[#432e70]" />
        <div className="flex my-8 items-center mx-auto justify-center w-full gap-x-10 text-gray-300">
          <a href="tel:+917273455869" className="hover:text-violet-300">
            +91 7273455869
          </a>
          <a href="tel:+918731042866" className="hover:text-violet-300">
            +91 8731042866
          </a>
          <a
            href="mailto:alexhormozi@gmail.com"
            className="hover:text-violet-300"
          >
            alexhormozi@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
