"use client";
import React from "react";
import background2 from "../../public/hay prodcuts/Banner.jpg";
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
        <div className="container w-full lg:w-7/12 h-full px-5  xl:px-20  flex flex-col justify-center  ">
          <h1 className="font- lg:text-7xl  text-3xl   text-white">
            <span className="lg:text-6xl text-4xl font-extrabold "> Our Products </span>
          </h1>
          <p className="text-xl font-ITCAVANTGARDESTDThin text-white mt-5">
            We are fully aware that our business partners expect more than
            merely the best quality products.
          </p>
          <p className="text-xl font-ITCAVANTGARDESTDThin text-white mt-5">
            Consequently, to meet their expectation swe follow the rule: Always
            best quality,always good prices,alway son time.
          </p>
          <p className="text-xl font-ITCAVANTGARDESTDThin text-white mt-5">
            {" "}
            Weunder stand that the best quality is equivalent to the combination
            of best product with the perfect service.
          </p>
        </div>
        <div className="lg:w-9/12 hidden lg:block"></div>
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
