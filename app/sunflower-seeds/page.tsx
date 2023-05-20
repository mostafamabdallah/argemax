"use client";
import Prodcuts from "@/components/Prodcuts";
import React from "react";
import sunflower from "../../public/sunflower seeds/Sunflower-Seeds.jpg";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div className={` bg-cover flex mt-20`}>
        <div className="container h-full px-5  xl:px-20   flex  justify-center  gap-6">
          <div className="w-full lg:flex-[2] lg:pr-10">
            <h2 className="text-7xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
              Sunflower seeds:
            </h2>
            <p className="text-2xl ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              - We harvest the seeds directly from the biggest farms in INNER
              MONGOLIA region which is famous for delivering the highest quality
              seeds compared to other regions.
            </p>
            <p className="text-2xl ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              - As a customer centric company, we promise our customers to have
              the best-in-class services.
            </p>
            <p className="text-2xl ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              - Agremax have the best supply chain in its field which allows it
              to deliver maximum efficiency services to our customers.
            </p>
            <p className="text-2xl ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              - Here in Agremax we assure our customers high quality products
              with no compromises.
            </p>
          </div>
          <div className="w-full lg:flex-1">
            <img src={sunflower.src} alt="" className="w-full" />
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
