"use client";
import Prodcuts from "@/components/Prodcuts";
import React from "react";
import Clinker from "../../public/clinker-cement/Clinker.jpg";
import Ordinaty from "../../public/clinker-cement/Ordinaty-Cement.jpg";
import White from "../../public/clinker-cement/White-Cement.jpg";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div className={` bg-cover flex mt-20`}>
        <div className="container  h-full px-5  xl:px-20  flex flex-col justify-center  ">
          <h2 className="lg:text-7xl  text-3xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
            Cement & Clinker
          </h2>
          <h2 className="text-5xl font-ITCAVANTGARDESTDBold mt-3 font-extrabold text-gray-300">
            Ordinary & White Cement
          </h2>
          <p className="text-2xl ITCAVANTGARDESTDThin text-gray-800 my-8">
            Agremax is supplying varieties of products range intended for cement
            industry, our products are selected to meet the requirements of the
            industrial players in Egypt & the international market.
          </p>
          <p className="text-3xl ITCAVANTGARDESTDThin text-black font-extrabold mt-5">
            {" "}
            CLINKER IS SUITABLE FOR THE PRODUCTION OF:
          </p>
          <ul className="text-2xl ITCAVANTGARDESTDThin text-gray-800  mt-5 list-disc px-16">
            {" "}
            <li>Ordinary Portland Cement </li>
            <li>(OPC) EN & ASTM. -White Cement. </li>
          </ul>
          <div className="flex flex-row flex-wrap justify-between items-center mt-10">
            <div className="flex flex-col flex-1 items-center justify-center">
              <img alt="" src={Ordinaty.src}></img>
              <p className="text-2xl font-ITCAVANTGARDESTDBold mt-3 font-extrabold text-gray-300">
                Ordinary Cement
              </p>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center">
              <img alt="" src={Clinker.src}></img>
              <p className="text-2xl font-ITCAVANTGARDESTDBold mt-3 font-extrabold text-gray-300">
                Clinker
              </p>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center">
              <img alt="" src={White.src}></img>
              <p className="text-2xl font-ITCAVANTGARDESTDBold mt-3 font-extrabold text-gray-300">
                White Cement
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col py-20">
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
