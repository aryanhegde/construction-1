import { testimonials } from "@/constants";
import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-testimonial bg-opacity-90 text-gray-300">
      <div className="flex w-[85%] mx-auto flex-col items-center ">
        <h1 className="mt-36 uppercase text-4xl  font-extralight text-center text-gray-100">
          Here&apos;s what our customers say
        </h1>
        <div className="flex mt-14 text-center gap-10  flex-col md:flex-row">
          {/* Create a array of testimonials and iterate things through it */}
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col">
              <h5 className="text-slate-200">"{testimonial.comment}"</h5>
              <h6 className="my-6">- {testimonial.author}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
