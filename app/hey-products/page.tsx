"use client";
import React from "react";
import background2 from "../../public/hay prodcuts/Banner.jpg";
import DehydratedAlfalfa from "../../public/hay prodcuts/Dehydrated-alfalfa-in-bales.jpg";
import DehydratedAlfalfa2 from "../../public/hay prodcuts/Dehydrated-alfalfa-in-pellets.jpg";
import Goat from "../../public/hay prodcuts/Goat.jpg";
import Cattle from "../../public/hay prodcuts/Cattle.jpg";
import Hourses from "../../public/hay prodcuts/Hourses.jpg";
import Rabits from "../../public/hay prodcuts/Rabits.jpg";
import Sheep from "../../public/hay prodcuts/Sheep.jpg";
import table1 from "../../public/hay prodcuts/Table-1.jpg";
import table2 from "../../public/hay prodcuts/Table-2.jpg";
import Oat from "../../public/hay prodcuts/Oat-Hay.jpg";
import Suncured from "../../public/hay prodcuts/Suncured-Alfalfa.jpg";
import Prodcuts from "../../components/Prodcuts";
type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div
        style={{ backgroundImage: `url(${background2.src})` }}
        className={`h-screen w-full  ')] bg-cover flex`}
      >
        <div className="container lg:w-7/12 h-full px-5  xl:px-20  flex flex-col justify-center  ">
          <h1 className="font- text-7xl   text-white">
            <span className="text-6xl font-extrabold "> Hay Products:</span>
          </h1>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            - Dehydrated Alfalfa in bales
          </p>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            - Dehydrated Alfalfa in pellets
          </p>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            {" "}
            -Sun-cured Alfalfa
          </p>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            {" "}
            - Oat Hay
          </p>
        </div>

        <div className="w-9/12"></div>
      </div>
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <h2 className="text-6xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
          We at AgreMax Supply two types of ALFALFA products:
        </h2>{" "}
        <h3 className="text-4xl font-ITCAVANTGARDESTDBold font-extrabold text-primary py-8">
          1-Dehydrated alfalfa in Bales:
        </h3>
        <div className="lg:p-5">
          <p className="text-xl font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10 lg:pl-16">
            Dehydrated alfalfa with a maximum of 12%, moisture, packed at high
            pressure. dehydration eliminates any contamination and keeps the
            quality of the alfalfa for a longer time, preserving the nutritional
            properties of alfalfa such as proteins, fiber, vitamins, and
            minerals. High-quality vegetable protein improves the quality of
            milk and meat.
          </p>
        </div>
      </div>
      {/* type1 */}
      <div className="flex flex-row flex-wrap bg-gray-100">
        <div className="w-full lg:w-6/12 flex flex-col justify-center p-5 lg:p-16 ">
          <div>
            <h2 className="text-6xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
              Characteristics of
            </h2>{" "}
            <span className="text-2xl font-ITCAVANTGARDESTD  text-primary">
              Dehydrated alfalfa in bales:
            </span>
            <div className="flex flex-row flex-wrap gap-8 justify-between items-center py-10">
              <ul className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin flex flex-col gap-5">
                <li>- 100% Alfalfa</li>
                <li>- Size: 750-800 kg</li>
                <li>- Length: 2,20-2,3 mts</li>
                <li>- Width: 1,00- 1,10 mts</li>
              </ul>
              <ul className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin flex flex-col gap-5">
                <li>- Height: 0,80 Mts</li>
                <li>- Fiber Length:</li>
                <ul className="lg:pl-6">
                  <li> - Short Fiber: 4-6 cm</li>
                  <li> - Short Fiber: 4-6 cm</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12">
          <img className="w-full" src={DehydratedAlfalfa.src}></img>
        </div>
      </div>
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-row items-center justify-center">
          <button
            className="px-10 rounded-full mb-16 py-3 bg-primary text-white font-ITCAVANTGARDESTD"
            disabled
          >
            Suitable for:
          </button>
        </div>
        <div className="flex flex-row justify-center gap-24 items-center flex-wrap">
          <div className="flex flex-col items-center justify-between gap-5 w-full lg:flex-1">
            <img src={Goat.src} className="w-full"></img>
          </div>
          <div className="flex flex-col items-center justify-between gap-5  w-full lg:flex-1">
            <img src={Cattle.src} className="w-full"></img>
          </div>
          <div className="flex flex-col items-center justify-between gap-5  w-full lg:flex-1">
            <img src={Hourses.src} className="w-full"></img>
          </div>
          <div className="flex flex-col items-center justify-between gap-5  w-full lg:flex-1">
            <img src={Rabits.src} className="w-full"></img>
          </div>
          <div className="flex flex-col items-center justify-between gap-5  w-full lg:flex-1">
            <img src={Sheep.src} className="w-full"></img>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <img src={table1.src} className="w-full lg:w-8/12"></img>
        </div>
      </div>
      {/* type 2 */}
      <div className="flex flex-row flex-wrap bg-gray-100">
        <div className="w-full lg:w-6/12 flex flex-col justify-center p-5 lg:p-16 ">
          <div>
            <h2 className="text-4xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
              2-Dehydrated alfalfa in Pellets:
            </h2>{" "}
            <p className="text-lg font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10">
              Dehydrated alfalfa milled and pressed into pellets. The vegetable
              protein of alfalfa is of high quality so this source of protein
              improves the quality of milk, eggs, and meat. They are perfect for
              the preparation of compound feed and pre-mixes, especially focused
              on sheep, goats, rabbits, and horses. The crude protein percentage
              is over 16 % and the diameter of the pellets is from 6 to 9 mm.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-6/12">
          <img className="w-full p-24" src={DehydratedAlfalfa2.src}></img>
        </div>
      </div>
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-row items-center justify-center">
          <button
            className="px-10 rounded-full mb-16 py-3 bg-primary text-white font-ITCAVANTGARDESTD"
            disabled
          >
            Suitable for:
          </button>
        </div>
        <div className="flex flex-row justify-center gap-24 items-center flex-wrap lg:px-36">
          <div className="flex flex-col items-center justify-between gap-5 w-full lg:flex-1">
            <img src={Goat.src} className="w-full"></img>
          </div>
          <div className="flex flex-col items-center justify-between gap-5  w-full lg:flex-1">
            <img src={Hourses.src} className="w-full"></img>
          </div>
          <div className="flex flex-col items-center justify-between gap-5  w-full lg:flex-1">
            <img src={Rabits.src} className="w-full"></img>
          </div>
          <div className="flex flex-col items-center justify-between gap-5  w-full lg:flex-1">
            <img src={Sheep.src} className="w-full"></img>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <img src={table2.src} className="w-full lg:w-8/12"></img>
        </div>
      </div>
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        
        <div className="flex flex-row flex-wrap ">
          <div className="w-full lg:w-7/12 flex flex-col justify-center p-5 lg:p-16 ">
            <div>
              <h2 className="text-6xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
                Sun-cured Alfalfa:
              </h2>{" "}
              <p className="text-lg font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10">
                Sun-cured, baled alfalfa is ground, then steam processed to
                about 100°F before it is pressed into dyes to form the finished
                pellet. Dehydrated alfalfa is partially dried outdoors, then
                chopped and immediately taken to the plant, where it goes
                through rotating drums at high temperatures to drive off
                moisture
              </p>
            </div>
          </div>
          <div className="w-full lg:w-5/12 lg:p-16">
            <img className="w-full" src={Suncured.src}></img>
          </div>
        </div>
      </div>
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-row flex-wrap ">
          <div className="w-full lg:w-7/12 flex flex-col justify-center p-5 lg:p-16 ">
            <div>
              <h2 className="text-6xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
                Oat Hay:
              </h2>{" "}
              <p className="text-lg font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10">
                Oat (Avena sativa) hay is achieved by cutting the crop when the
                grain is milk to the soft dough stage. The crop is then
                sun-cured until moisture is at a suitable level for the material
                to be baled. Oat hay is nutritious and high in both protein and
                energy content. It can be fed to horses and cattle. In addition
                to straight Oat hay. alfalfa is often planted with oats to allow
                for better alfalfa stand establishment. This results in a
                high-quality feed.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-5/12 lg:p-16">
            <img className="w-full" src={Oat.src}></img>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col ">
        <div className="container py-20 px-5  xl:px-20">
          <p className="text-gray-600  text-center bottom-10 tracking-widest  text-lg font-ITCAVANTGARDESTD ">
            MORE PRODUCTS
          </p>
        </div>
        <Prodcuts></Prodcuts>
      </div>
    </div>
  );
};

export default Page;
