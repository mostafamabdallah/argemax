"use client";
import React from "react";
import background2 from "../../public/Home/Banner.jpg";
import quality from "../../public/Home/Quality-matters.jpg";
import Prodcuts from "../../components/Prodcuts";
import QualityMatters from "@/components/QualityMatters";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-myGray">
      <div
        style={{ backgroundImage: `url(${background2.src})` }}
        className={`h-screen w-full  ')] bg-cover flex`}
      >
        <div className="container lg:w-7/12 h-full px-5  xl:px-20  flex flex-col justify-center  ">
          <h1 className="font- text-7xl   text-white">
            <span className="text-6xl font-extrabold "> Our Products </span>
          </h1>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            We are fully aware that our business partners expect more than
            merely the best quality products.
          </p>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            Consequently, to meet their expectation swe follow the rule: Always
            best quality,always good prices,alway son time.
          </p>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            {" "}
            Weunder stand that the best quality is equivalent to the combination
            of best product with the perfect service.
          </p>
        </div>
        <div className="w-9/12"></div>
      </div>
      <div className="w-full flex flex-col ">
        <div className="container py-20 px-5  xl:px-20">
          <h2 className="text-5xl font-ITCAVANTGARDESTDBold font-extrabold text-primary text-center">
            Our Products{" "}
          </h2>
          <p className="text-gray-600  text-center bottom-10 tracking-widest  text-lg font-ITCAVANTGARDESTD ">
            QUALITY MATTERS
          </p>
        </div>
        <Prodcuts></Prodcuts>
      </div>
      {/* */}
      <QualityMatters></QualityMatters>
    </div>
  );
};

export default Page;
