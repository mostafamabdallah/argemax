import React from "react";
import quality from "../public/Home/Quality-matters.jpg";
type Props = {};

const QualityMatters = (props: Props) => {
  return (
    <div className="container flex flex-row flex-wrap mt-16">
      <div className="w-full lg:w-6/12 flex flex-col justify-center p-5 lg:p-16 bg-myGray">
        <div>
          <h2 className="lg:text-8x text-6xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
            Quality Matters
          </h2>
          <p className="text-2xl font-ITCAVANTGARDESTD text-gray-500 py-5 pl-0 lg:pl-24">
            We believe in treating our customers with respect and faith.
          </p>
          <p className="text-2xl font-ITCAVANTGARDESTD text-gray-500 py-5 pl-0 lg:pl-24">
            We grow through creativity, invention and innovation,
          </p>
          <p className="text-2xl font-ITCAVANTGARDESTD text-gray-500 py-5 pl-0 lg:pl-24">
            We integrate honesty, integrity and business ethics into all aspects
            of our business functioning{" "}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-6/12">
        <img className="w-full" src={quality.src}></img>
      </div>
    </div>
  );
};

export default QualityMatters;
