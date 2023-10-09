"use client";
import Prodcuts from "@/components/Prodcuts";
import React from "react";
import cer1 from "../../public/certifications/2.png";
import cer2 from "../../public/certifications/3.png";
import cer3 from "../../public/certifications/4.png";
import cer4 from "../../public/certifications/5.png";
import Gadta from "../../public/icons/Gadta.png";
import GMP from "../../public/icons/GMP.png";
import ISO from "../../public/icons/ISO.png";
import logo from "../../public/Logo.png";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div className={`bg-cover flex flex-col mt-20`}>
        <div className="container  px-5  xl:px-20  flex  justify-center  flex-wrap">
          <h2 className="lg:text-7xl w-full text-3xl font-ITCAVANTGARDESTDBold font-extrabold text-primary text-center">
            CERTIFICATES
          </h2>
          <div className="flex mt-5 flex-wrap">
            {/* <img className="w-full md:w-3/12 px-2" src={cer4.src} alt="" /> */}
            <img className="w-full md:w-4/12 px-2" src={cer1.src} alt="" />
            <img className="w-full md:w-4/12 px-2" src={cer2.src} alt="" />
            <img className="w-full md:w-4/12 px-2" src={cer3.src} alt="" />
          </div>
        </div>

        <div className=" bg-gray-100 mt-5 md:flex flex-row hidden xl:px-20 items-center justify-between py-5  ">
          <div className="logo md:w-[150px]">
            <img alt="argemax" className="w-full" src={logo.src}></img>
          </div>
          <div className="flex md:w-[250px] z-50 gap-5">
            <ul className="w-full flex gap-2 justify-end items-center">
              <li className=" text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
                <img className="w-full " src={Gadta.src} alt="" />
              </li>
              {/* <li className=" relative text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
                <img className="w-full " src={GMP.src} alt="" />
              </li> */}
              <li className=" text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
                <img className="w-full " src={ISO.src} alt="" />
              </li>
            </ul>
          </div>
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
