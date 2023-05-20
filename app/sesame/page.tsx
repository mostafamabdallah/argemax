"use client";
import React from "react";
import Banner from "../../public/sesame/Banner.jpg";
import Sesame from "../../public/sesame/Sesame-1.jpg";
import Sesame2 from "../../public/sesame/Sesame-2.jpg";
import table1 from "../../public/sesame/Table-1.jpg";
import table2 from "../../public/sesame/Table-2.jpg";
import table3 from "../../public/sesame/Table-3.jpg";
import table4 from "../../public/sesame/Table-4.jpg";
import Prodcuts from "../../components/Prodcuts";
type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div
        style={{ backgroundImage: `url(${Banner.src})` }}
        className={`h-screen w-full  ')] bg-cover flex`}
      >
        <div className="container lg:w-8/12 h-full px-5  xl:px-20  flex flex-col justify-center  ">
          <h1 className="font- lg:text-7xl  text-3xl   text-white">
            <span className="lg:text-6xl text-4xlfont-extrabold "> Sesame:</span>
          </h1>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            We are fully aware that our business partners expect more than
            merely the best quality products.
          </p>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            Consequently, to meet their expectations we follow the rule: Always
            best quality, always good prices, always on time.
          </p>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            We understand that the best quality is equivalent to the combination
            of best product with the perfect service.
          </p>
        </div>

        <div className="w-7/12 hidden lg:flex"></div>
      </div>
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-col">
          <h2 className="lg:text-6xl text-4xlfont-ITCAVANTGARDESTDBold font-extrabold text-primary">
            Introduction To White Sesame:
          </h2>{" "}
          <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-8">
            This tiny seed, one of the oldest in the history of spices, is full
            of flavour, crunch, and even health benefits. Sesamum indicum is the
            scientific name for sesame seed. The term sesame seed is derived
            from the Greek word sesamon. It is commonly used in Middle Eastern,
            Asian, Mediterranean, and Northern African cuisines.
          </p>
        </div>
      </div>
      {/* type1 */}
      <div className="flex flex-row flex-wrap bg-gray-100 w-full">
        <div className="w-full lg:w-7/12">
          <img className="w-full" src={Sesame.src}></img>
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center p-5 lg:p-16 ">
          <div>
            <h2 className="lg:text-6xl text-4xlfont-ITCAVANTGARDESTDBold font-extrabold text-primary">
              Characteristics of
            </h2>{" "}
            <span className="text-2xl font-ITCAVANTGARDESTD  text-primary">
              Whitish Sesame Seeds:
            </span>
            <div className="flex flex-row flex-wrap gap-8 justify-between items-center py-10">
              <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-8">
                This tiny seed, one of the oldest in the history of spices, is
                full of flavour, crunch, and even health benefits. Sesamum
                indicum is the scientific name for sesame seed. The term sesame
                seed is derived from the Greek word sesamon. It is commonly used
                in Middle Eastern, Asian, Mediterranean, and Northern African
                cuisines.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-row gap-16 flex-wrap">
          <div className="w-full lg:flex-[2]">
            <img className="w-full" src={table1.src}></img>
          </div>
          <div className="w-full lg:flex-1">
            <img className="w-full" src={table2.src}></img>
          </div>
        </div>
      </div>

      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-col">
          <h2 className="lg:text-6xl text-4xlfont-ITCAVANTGARDESTDBold font-extrabold text-primary">
            Introduction To Reddish Sesame:
          </h2>{" "}
          <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-8">
            The genus Sesamum contains the flowering plant sesame (Sesamum
            indicum). There are numerous wild relatives in Africa, and it is
            widely naturalised in tropical regions around the world, where it is
            cultivated for its edible seeds that grow in pods.
          </p>
        </div>
      </div>
      {/* type1 */}
      <div className="flex flex-row flex-wrap bg-gray-100 w-full">
        <div className="w-full lg:w-7/12">
          <img className="w-full" src={Sesame2.src}></img>
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center p-5 lg:p-16 ">
          <div>
            <h2 className="lg:text-6xl text-4xlfont-ITCAVANTGARDESTDBold font-extrabold text-primary">
              Characteristics
            </h2>{" "}
            <span className="text-2xl font-ITCAVANTGARDESTD  text-primary">
              of reddish Sesame Seeds:
            </span>
            <div className="flex flex-row flex-wrap gap-8 justify-between items-center py-10">
              <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-8">
                Sesame seeds are tiny, oil-rich seeds that grow in pods on the
                Sesamum indicum plant.
              </p>
              <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-8">
                Reddish Type applications include crushing for oil extraction in
                the production of sesame seed oil.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-row gap-16 flex-wrap">
          <div className="w-full lg:flex-[2]">
            <img className="w-full" src={table3.src}></img>
          </div>
          <div className="w-full lg:flex-1">
            <img className="w-full" src={table4.src}></img>
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
