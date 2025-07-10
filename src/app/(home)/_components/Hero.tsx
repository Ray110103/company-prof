import { Button } from "@/components/Button";
import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4  from-white via-sky-50 to-sky-100 py-16 px-3 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-10">
      <div className="text-center lg:text-left max-w-xl">
        <h1 className="text-4xl font-extrabold text-sky-800 leading-tight">
          Sparkling Clean Homes & Offices
        </h1>
        <p className="text-lg text-sky-700 mt-4">
          We provide trusted, professional, and eco-friendly cleaning services
          for homes, offices, and everything in between.
        </p>
        <div className="mt-6 flex justify-center lg:justify-start gap-4">
          <Button className="bg-sky-600 hover:bg-sky-700 text-white">
            Book a Cleaning
          </Button>
        </div>
      </div>

      <div className="w-full max-w-md">
        <img
          src="living.png"
          className="width={500} height={500} rounded-xl shadow-lg "
          alt="Professional cleaner at work"
        />
      </div>
    </section>
  );
};

export default Hero;
