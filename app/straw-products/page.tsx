"use client";
import Prodcuts from "@/components/Prodcuts";
import React from "react";
import Fescue from "../../public/straw-products/Fescue.jpg";
import Fescue2 from "../../public/straw-products/Oat-hay.jpg";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div className={` bg-cover flex mt-20`}>
        <div className="container  h-full px-5  xl:px-20  flex flex-col justify-center  ">
          <h2 className="lg:text-7xl  text-3xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
            Fescue:
          </h2>
          <p className="text-2xl font-ITCAVANTGARDESTDThin text-gray-800 mt-8">
            Fescue (festuca pratensis) is a perennial gross is grown for seed.
            Fesoue strow is o by-produc of the harvest. Fescue straw provides a
            good source of roughope and is used in both beef and dairy
            production.
          </p>

          <p className="text-2xl font-ITCAVANTGARDESTDThin text-gray-800">
            Agremax can supply P2O5 from 24% up to 31.5%.
          </p>
          <img className="w-full py-16" src={Fescue.src}></img>

          <div className="flex flex-row flex-wrap  py-10">
            <div className="w-full md:w-8/12 flex flex-col">
              <h2 className="text-5xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
                Oat Hay:
              </h2>
              <p className="text-2xl font-ITCAVANTGARDESTDThin text-gray-800 mt-8 md:pr-10">
                Oot (Avena sativa) hay is achieved by cutting the crop when the
                grain is milk to soft dough stage. The crop is then sun-cured
                until moisture is at a suitable level for the material to be
                baled. Oat hay is nutritious and high in both protein and energy
                content. It can be fed to horses and cattle. In addition to
                straight Oat hay, alfalfa is offen planted with oats to allow
                for better alfalfa stand establishment. This results in a
                high-quality feed.
              </p>
            </div>
            <div className="w-full md:w-4/12">
              <img className="w-full" src={Fescue2.src}></img>
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
