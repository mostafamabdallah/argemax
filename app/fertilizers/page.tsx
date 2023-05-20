"use client";
import Prodcuts from "@/components/Prodcuts";
import React from "react";
import grass from "../../public/fertilizer/Fertilizers-1.jpg";
import grass2 from "../../public/fertilizer/Fertilizers-2.jpg";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div className={` bg-cover flex mt-20`}>
        <div className="container  h-full px-5  xl:px-20  flex flex-col justify-center  ">
          <h2 className="lg:text-7xl  text-3xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
            FERTILIZERS:
          </h2>
          <h2 className="text-5xl font-ITCAVANTGARDESTDBold mt-3 font-extrabold text-gray-300">
            Rock Phosphate
          </h2>

          <p className="text-3xl ITCAVANTGARDESTDThin text-black font-extrabold mt-5">
            {" "}
            Agremax is specialized in exporting Rock Phosphate across the world
          </p>
          <p className="text-2xl ITCAVANTGARDESTDThin text-gray-800 mt-8">
            Agremax has a strong network with the main governmental companies
            for supplying RP. Agremax has warehouses very close to each seaport
            around Egypt to ease the shipping process.
          </p>
          <p className="text-2xl ITCAVANTGARDESTDThin text-gray-800">
            Agremax can supply P2O5 from 24% up to 31.5%.
          </p>
          <img className="w-full py-16" src={grass.src}></img>

          <div className="flex flex-row flex-wrap gap-16">
            <div className="flex-[1]">
              <img className="w-full" src={grass2.src}></img>
            </div>
            <div className="flex-[2] flex flex-col">
              <h2 className="lg:text-7xl  text-3xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
                FERTILIZERS:
              </h2>
              <ul className="text-2xl ITCAVANTGARDESTD text-gray-700  font-semibold mt-7 tracking-[0.3rem] flex flex-col gap-8">
                <li>Granular Single Supper Phosphate 16% W.S</li>
                <li>Single Supper Phosphate (GSSP)</li>
                <li>Triple Supper Phosphate (TSP)</li>
                <li>Diammonium Phosphate (DAP)</li>
                <li>Urea</li>
                <li>Phosphoric Acid 85% H3PO4 (W/V)</li>
                <li>Ammonium Nitrate</li>
                <li>Ammonium Sulfate</li>
                <li>Potassium Sulfate SOP</li>
              </ul>
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
