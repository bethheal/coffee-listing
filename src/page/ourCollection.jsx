import React from "react";
import { bgImg, bgImgLg, bgImgsm, handDrawnImg } from "../assets";
import Coffee from "./coffee";
import "../index.css";

const OurCollection = () => {
  return (
    <div className="bg-red-50flex justify-center items-center h-screen">
      <div className="relative w-full   ">
        <div className="relative w-full">
          {/* Mobile Image */}
          <img
            src={bgImgsm}
            alt="coffee mobile"
            className="block sm:hidden w-full h-auto"
          />

          {/* Tablet Image */}
          <img
            src={bgImg}
            alt="coffee tablet"
            className="hidden sm:block lg:hidden w-full h-auto"
          />

          {/* Desktop Image */}
          <img
            src={bgImgLg}
            alt="coffee desktop"
            className="hidden lg:block w-full h-auto"
          />
        </div>

        {/* Card Overlay */}
        <div className="h-full bg-black">
          <div
            className=" absolute lg:w-[80vw] top-[6rem] left-[5%] right-[5%] md:left-[10rem] md:right-[10rem] lg:top-[10rem] lg:left-[10rem] lg:right-[10rem] z-10
          bg-[#1C1D1F] rounded-3xl flex flex-col items-center text-white h-auto py-10 px-4 md:px-0"
          >
            {/* Hand-drawn vector */}
            <div className="absolute top-[2rem] right-[2rem] md:right-[21rem] z-0">
              <img
                src={handDrawnImg}
                alt="handDrawnVector"
                className="w-[10rem] md:w-[15rem] h-auto"
              />
            </div>

            {/* Header and Description */}
            <div className="z-10 flex flex-col items-center text-center space-y-6 mt-[2rem] md:mt-[4rem] px-2">
              <h2 className="text-2xl md:text-3xl font-bold">Our Collection</h2>
              <p className="text-sm md:text-base font-light tracking-wider w-full max-w-md">
                Introducing our Coffe a selecton of unique coffees from
                different roast types and origins, expertly roasted in small
                batches and shipped fresh weekly.
              </p>
              <div className="flex gap-4 justify-center mt-4">
                <button className="bg-white text-black px-4 py-2 rounded-lg">
                  All Products
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                  Available Now
                </button>
              </div>
            </div>

            {/* Coffee Cards */}
            <div className="w-full mt-10 px-4">
              <Coffee />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCollection;
