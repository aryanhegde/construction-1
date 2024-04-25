import { services } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-auto  w-[85%]  mt-24">
        <h1 className="uppercase text-4xl md:text-5xl  font-extralight  text-slate-900 text-center">
          Our <br />
          Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto  mt-8 text-start gap-6">
          {services.map((service) => (
            <div id={service.id} className="flex flex-col items-start ">
              <Image
                src={service.image}
                alt={service.title}
                width={service.imgWidth}
                height={service.imgHeight}
                className="h-60 md:w-full p-2 items-center mx-auto  "
              />
              <h1 className="text-3xl text-center mx-auto md:mx-0 md:text-start font-light text-slate-950 mt-6  ">
                {service.title}
              </h1>
              <p className="md:text-md  text-gray-400 text-center md:text-start font-normal mt-4 mb-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
