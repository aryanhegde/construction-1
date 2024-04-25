import Image from "next/image";
import React from "react";

import home1 from "@/assets/home-1.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#161517] h-full text-white mt-[144px]">
      <div className="flex w-[85%] mx-auto flex-col">
        <div className="flex gap-2 overflow-auto  mx-auto ">
          <Image src={home1} alt="Interior Design" height={800} width={400} />
          <Image
            src="/home-6.jpg"
            alt="Home Construction"
            height={800}
            width={400}
          />
          <Image src="/home-7.jpg" alt="Home Design" height={800} width={400} />
        </div>

        <div className="flex flex-col text-gray-300 mt-36 md:mt-24 items-start  leading-7 text-md md:text-lg max-w-[780px] ">
          <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl font-extralight  text-gray-100">
            Quality <br />
            <span className="font-semibold mt-4">WITHOUT COMPROMISE.</span>
          </h1>
          <p className="mt-10">
            At LV Construction, we understand that quality in construction is
            not just a goal; it's a promise.
          </p>
          <p className="mt-8">
            Our team of skilled professionals is committed to delivering
            exceptional workmanship on every project. With years of experience
            and a passion for excellence, we ensure that every detail is
            meticulously crafted to meet the highest standards of durability,
            functionality, and aesthetics.
          </p>

          <Link
            href="/projects"
            className="my-6 bg-[#432e70] hover:bg-violet-600 text-white px-4 py-2 uppercase"
          >
            Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
