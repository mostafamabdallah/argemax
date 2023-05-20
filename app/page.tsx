"use client";
import MainBanner from "@/components/MainBanner";
import landscape from "../public/Home/Vision-&-Mission.jpg";

import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Prodcuts from "@/components/Prodcuts";
import QualityMatters from "@/components/QualityMatters";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between ">
      {/* Banner */}
      <MainBanner></MainBanner>
      {/* About */}
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <h2 className="lg:text-6xl text-4xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
          About US:
        </h2>
        <div className="lg:p-5">
          <p className="text-xl font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10">
            AgreMax is an Emirates, privately owned international trading
            business founded in 2015.
          </p>
          <p className="text-xl  font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10">
            AgreMax has experienced a rapid and steady growth where our
            principles managed their own business since 1979 in Fertilizers
            business.{" "}
          </p>
          <p className="text-xl font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10">
            AgreMax has an enormous impact throughout diversified commodities
            and trading both in terms of products, markets and business
            partners. The services that we offer as an accessory element to our
            core product offer are as diversified as they are comprehensive.{" "}
          </p>
        </div>
      </div>
      {/* Vision and mission */}
      <div className="container flex flex-row flex-wrap ">
        <div className="w-full lg:w-7/12">
          <img className="w-full" src={landscape.src}></img>
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center p-5 lg:p-16 bg-myGray">
          <div>
            {" "}
            <span className="text-2xl font-ITCAVANTGARDESTD  text-primary">
              Our Company’s
            </span>
            <h2 className="lg:text-6xl text-4xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
              Vision
            </h2>
            <p className="text-xl font-ITCAVANTGARDESTD text-gray-500 py-5 text-justify">
              To be a leader manufacturer in the fertilizers industry and build
              our own brand.
            </p>
          </div>
          <div>
            {" "}
            <span className="text-2xl font-ITCAVANTGARDESTD  text-primary">
              Our Company’s
            </span>
            <h2 className="lg:text-6xl text-4xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
              Mission
            </h2>
            <p className="text-xl font-ITCAVANTGARDESTD text-gray-500 py-5 text-justify">
              To build long term relationships with our customers and clients
              and provide exceptional customer services by pursuing business
              through innovation and advanced technologies
            </p>
          </div>
        </div>
      </div>
      {/* our services */}
      <div className="container xl:px-20 flex flex-col py-10 px-5">
        <h2 className="lg:text-6xl text-4xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
          Our Services:
        </h2>
        <div className="lg:p-5">
          <h3 className="flex items-end gap-1">
            <span className="text-4xl text-myDarkGray font-ITCAVANTGARDESTDBold font-extrabold">
              AgreMax
            </span>{" "}
            <span className="text-lg text-myDarkGray font-ITCAVANTGARDESTD  ">
              {" "}
              GENERAL TRADING LLC
            </span>
          </h3>
          <h4 className="text-xl text-primary font-ITCAVANTGARDESTDBold pt-5">
            How we see our business partners:
          </h4>
          <div className="p-3">
            {" "}
            <p className="text-lg font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10">
              We are fully aware that our business partners expect more than
              merely the best quality products. Consequently, to meet their
              expectations we follow the rule: Always best quality, always good
              prices, always on time.
            </p>
            <p className="text-lg  font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10">
              We understand that the best quality is equivalent to the
              combination of best product with the perfect service.
            </p>
          </div>
          <h4 className="text-xl text-primary font-ITCAVANTGARDESTDBold pt-5">
            We are fully proud of the export & import services we offer to our
            valuable clients which are listed as follows:
          </h4>
          <div className="flex flex-wrap p-3">
            <ul className="flex w-full flex-col lg:flex-1 list-disc">
              <li className="text-lg  font-ITCAVANTGARDESTD text-gray-500   leading-10">
                {" "}
                Purchasing & Sourcing.
              </li>
              <li className="text-lg  font-ITCAVANTGARDESTD text-gray-500   leading-10">
                {" "}
                Ocean freight Chartering.
              </li>
            </ul>
            <ul className="flex w-full flex-col lg:flex-1 list-disc">
              <li className="text-lg  font-ITCAVANTGARDESTD text-gray-500   leading-10">
                {" "}
                Land logistics.
              </li>
              <li className="text-lg  font-ITCAVANTGARDESTD text-gray-500   leading-10">
                {" "}
                Warehousing and distribution.
              </li>
            </ul>
            <ul className="flex w-full flex-col lg:flex-1 list-disc">
              <li className="text-lg  font-ITCAVANTGARDESTD text-gray-500   leading-10">
                {" "}
                Packing the Bulk commodities.
              </li>
              <li className="text-lg  font-ITCAVANTGARDESTD text-gray-500   leading-10">
                {" "}
                Complete door to door services.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* products */}
      <div className="w-full flex flex-col ">
        <div className="container py-10 px-5  xl:px-20">
          <h2 className="text-5xl font-ITCAVANTGARDESTDBold font-extrabold text-primary text-center">
            Our Products{" "}
          </h2>
          <p className="text-gray-600  text-center bottom-10 tracking-widest  text-lg font-ITCAVANTGARDESTD ">
            QUALITY MATTERS
          </p>
        </div>
        <Prodcuts></Prodcuts>
      </div>
      {/* Quality */}
      <QualityMatters></QualityMatters>
    </div>
  );
}
