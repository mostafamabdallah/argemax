"use client";
import React from "react";
import Banner from "../../public/peanuts-amended/Banner.jpg";
import Peanuts from "../../public/peanuts-amended/Peanuts-1.jpg";
import table1 from "../../public/peanuts-amended/Table-1.jpg";
import table2 from "../../public/peanuts-amended/Table-2.jpg";
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
            <span className="lg:text-6xl text-4xl font-extrabold "> Peanuts:</span>
          </h1>
          <p className="text-xl font-ITCAVANTGARDESTDThin text-white mt-5">
            We are fully aware that our business partners expect more than
            merely the best quality products.
          </p>
          <p className="text-xl font-ITCAVANTGARDESTDThin text-white mt-5">
            Consequently, to meet their expectations we follow the rule: Always
            best quality, always good prices, always on time.
          </p>
          <p className="text-xl font-ITCAVANTGARDESTDThin text-white mt-5">
            {" "}
            We understand that the best quality is equivalent to the combination
            of best product with the perfect service.
          </p>
          <p className="text-xl font-ITCAVANTGARDESTDThin text-white mt-5">
            {" "}
            - Oat Hay
          </p>
        </div>

        <div className="w-7/12 hidden lg:flex"></div>
      </div>
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-col">
          <h2 className="lg:text-6xl text-4xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
            Introduction To Peanuts:
          </h2>{" "}
          <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-8">
            Peanuts are known by many other local names such as earthnuts,
            ground nuts, goober peas, monkey nuts, pygmy nuts and pig nuts.
            Despite its name and appearance, the peanut is not a nut, but rather
            a legume.
          </p>
        </div>
      </div>
      {/* type1 */}
      <div className="flex flex-row flex-wrap bg-gray-100 w-full">
        <div className="w-full lg:w-7/12">
          <img className="w-full" src={Peanuts.src}></img>
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center p-5 lg:p-16 ">
          <div>
            <h2 className="lg:text-6xl text-4xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
              Uses Of
            </h2>{" "}
            <span className="text-2xl font-ITCAVANTGARDESTD  text-primary">
              Peanuts:
            </span>
            <div className="flex flex-row flex-wrap gap-8 justify-between items-center py-10">
              <ul className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin flex flex-col gap-5">
                <li>- Local medicines</li>
                <li>- Cosmetics</li>
                <li>- Oil Productions</li>
                <li>- Food consumption</li>
                <li>- Additives to solvents</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-row gap-16 flex-wrap">
          <div className="w-full lg:flex-1">
            <img className="w-full" src={table1.src}></img>
          </div>
          <div className="w-full lg:flex-1">
            <img className="w-full" src={table2.src}></img>
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
