"use client";
import Prodcuts from "@/components/Prodcuts";
import React from "react";
import mining from "../../public/mining/Mining.jpg";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div className={` bg-cover flex mt-20`}>
        <div className="container  h-full px-5  xl:px-20  flex flex-col justify-center  items-center">
          <h2 className="lg:text-7xl  text-3xl text-start w-full font-ITCAVANTGARDESTDBold font-extrabold text-primary relative">
            Mining:
          </h2>
          <p className="text-gray-500 absolute bottom-10 tracking-[1.5rem] text-base font-ITCAVANTGARDESTD rotate-90 hidden lg:block   left-0">
            QUALITY MATTERS
          </p>{" "}
          <p className="text-gray-500 absolute top-10 tracking-[1.5rem] text-base font-ITCAVANTGARDESTD rotate-90 hidden lg:block   right-0">
            QUALITY MATTERS
          </p>{" "}
          <img className="w-full lg:w-8/12 py-16" src={mining.src}></img>
        </div>
      </div>
      <div className="w-full flex flex-col py-10">
        <div className="container py-10 px-5  xl:px-20">
          <p className="text-gray-600  text-center bottom-10 tracking-widest  text-lg font-ITCAVANTGARDESTD ">
            MORE PRODUCTS
          </p>
        </div>
        <Prodcuts></Prodcuts>
      </div>
      {/* */}
    </div>
  );
};

export default page;
