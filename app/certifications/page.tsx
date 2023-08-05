"use client";
import Prodcuts from "@/components/Prodcuts";
import React from "react";
import cer1 from "../../public/certifications/2.png";
import cer2 from "../../public/certifications/3.png";
import cer3 from "../../public/certifications/4.png";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div className={` bg-cover flex mt-20`}>

        <div className="container  px-5  xl:px-20  flex  justify-center  gap-6 flex-wrap">
        <h2 className="lg:text-7xl w-full  text-3xl font-ITCAVANTGARDESTDBold font-extrabold text-primary text-center">
          CERTIFICATES
        </h2>
          <img src={cer1.src} alt="" />
          <img src={cer2.src} alt="" />
          <img src={cer3.src} alt="" />
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
