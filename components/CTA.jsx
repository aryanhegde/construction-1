import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="bg-[#432e70]">
      <div className="flex flex-col w-[85%] md:ml-10 p-14 lg:p-24 text-center md:text-start mx-auto md:mx-0">
        <h1 className="uppercase font-light text-5xl text-gray-300">
          Let's build your <br />{" "}
          <span className="font-semibold">dream home.</span>
        </h1>
        <div className="mt-10">
          <Link
            href="/contact"
            className="text-slate-800 font-semibold bg-white py-2 px-8"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
