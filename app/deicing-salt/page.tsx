"use client";
import Prodcuts from "@/components/Prodcuts";
import React from "react";
import Deicing from '../../public/deicing-salt/Deicing-Salt.jpg'

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div className={` bg-cover flex mt-20`}>
        <div className="container h-full px-5  xl:px-20  flex  justify-center  gap-6">
          <div className="w-full lg:flex-1">
            <h2 className="lg:text-7xl  text-3xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
              De-icing Salt:
            </h2>
            <h2 className="text-5xl font-ITCAVANTGARDESTDBold mt-3 font-extrabold text-gray-300">
              Bulk De-icing Salt
            </h2>
            <p className="text-2xl font-ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              Agremax supplies and transports bulk deicing salt to
              municipalities, government agencies, and private commercial
              businesses across the country as a reliable bulk road salt
              supplier.
            </p>
            <p className="text-2xl font-ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              With our treatment with YPS (yellow prussiate of soda), the
              anti-caking agent helps resist caking and prevent clumping.
            </p>
            <p className="text-2xl font-ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              Agremax’s bulk deicing salt is a standard for winter maintenance
              deicing programs and requires less spring cleanup than sand or
              other abrasives.
            </p>
          </div>
          <div className="w-full lg:flex-1">
            <img src={Deicing.src} alt="" className="w-full" />
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
