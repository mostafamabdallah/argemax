"use client";
import Prodcuts from "@/components/Prodcuts";
import React from "react";
import grass from "../../public/grass/Grass-Products.jpg";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div className={` bg-cover flex mt-20`}>
        <div className="container  h-full px-5  xl:px-20  flex flex-col justify-center  ">
          <h2 className="lg:text-7xl  text-3xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
            Timothy Hay:
          </h2>
          <p className="text-2xl ITCAVANTGARDESTDThin text-gray-800 mt-8">
            Timothy hay is an excellent source of fiber and roughage to include
            in your {"horse's"} diet. As a horse owner, {"you'll"} have to
            decide if you should purchase first or second cutting of Timothy
            hay. You may have heard that the nutritional quality of first
            cutting Timothy hay is inferior to the second cutting. While this
            may be true in some cases, this really depends on farming practices,
            such as if first-cutting hay is harvested from a weed-free field at
            an early stage of growth before the stem becomes larger and coarser.
          </p>
          <img className="w-full py-16" src={grass.src}></img>
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
