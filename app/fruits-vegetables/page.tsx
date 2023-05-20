"use client";
import Prodcuts from "@/components/Prodcuts";
import React from "react";
import Fruits from "../../public/Fruits & Vegetables/Fruits-&-Vegetables.jpg";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div className={` bg-cover flex mt-20`}>
        <div className="container  px-5  xl:px-20  flex  justify-center  gap-6 flex-wrap">
          <div className="w-full lg:flex-1">
            <h2 className="lg:text-7xl  text-3xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
              Fruits & Vegetables:{" "}
            </h2>
            <p className="text-2xl font-ITCAVANTGARDESTDThin text-gray-800 my-8 text-justify">
              Our vast network makes us able to source and supply a wide range
              of fresh fruits and vegetables from the most reliable farms in
              Egypt.
            </p>
            <p className="text-3xl  inline font-ITCAVANTGARDESTDBold text-white my-8 text-justify bg-primary px-3 py-1 capitalize ">
              we specialize in the export of:
            </p>
            <div className="flex px-5 lg:px-10 gap-10">
              <ul className="text-xl font-ITCAVANTGARDESTDThin text-gray-600 flex flex-col gap-3 flex-1  mt-5 list-disc">
                {" "}
                <li>Potatoes</li>
                <li>Onion</li>
                <li>Garlic</li>
                <li>Artichoke</li>
                <li>Green Beans</li>
                <li>Water Melon</li>
                <li>Strawberry</li>
              </ul>
              <ul className="text-xl font-ITCAVANTGARDESTDThin text-gray-600 flex flex-col gap-3 flex-1  mt-5 list-disc">
                {" "}
                <li>Pomegranate</li>
                <li>Oranges</li>
                <li>Lemon</li>
                <li>Pineapple</li>
                <li>White Beans</li>
                <li>Green Coffee</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:flex-1">
            <img src={Fruits.src} alt="" className="w-full" />
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
