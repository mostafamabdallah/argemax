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
          <h2 className="text-7xl text-start w-full font-ITCAVANTGARDESTDBold font-extrabold text-primary">
            Mining:
          </h2>
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
