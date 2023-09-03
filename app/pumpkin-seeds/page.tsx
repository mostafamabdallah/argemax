"use client";
import Prodcuts from "@/components/Prodcuts";
import React from "react";
import pumpkin from "../../public/pumpkin seeds/Pumpkin-seeds.jpg";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div className={` bg-cover flex mt-20`}>
        <div className="container h-full px-5  xl:px-20  flex flex-wrap  justify-center  gap-6">
          <div className="w-full lg:flex-[2]">
            <h2 className="lg:text-7xl  text-3xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
            Pumpkin Seeds:
            </h2>
            <p className="text-2xl font-ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              - Agremax provides the best quality pumpkin seeds from our
              partners around the world.
            </p>
            <p className="text-2xl font-ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              - We harvest the seeds directly from the biggest farms in INNER
              MONGOLIA region which is famous for delivering the highest quality
              seeds compared to other regions.
            </p>
            <p className="text-2xl font-ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              - As a customer centric company, we promise our customers to have
              the best-in-class services.
            </p>
            <p className="text-2xl font-ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              - Agremax have the best supply chain in its field which allows it
              to deliver maximum efficiency services to our customers.{" "}
            </p>
            <p className="text-2xl font-ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              - Here in Agremax we assure our customers high quality products
              with no compromises.{" "}
            </p>
          </div>
          <div className="w-full lg:flex-1">
            <img src={pumpkin.src} alt="" className="w-full" />
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
