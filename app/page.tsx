"use client";
import MainBanner from "@/components/MainBanner";
import landscape from "../public/Home/Vision-&-Mission.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Prodcuts from "@/components/Prodcuts";
import QualityMatters from "@/components/QualityMatters";
import Animation from "@/components/Animation";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between ">
      {/* Banner */}
      <MainBanner></MainBanner>
      {/* About */}
      <Animation>
        <div className="container xl:px-20 flex flex-col py-28 px-5" id="about">
          <h2 className="lg:text-6xl text-4xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
            About US:
          </h2>
          <div className="lg:p-5">
            <p className="text-xl font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10">
            “AgreMax is an Emirates-Egyptian, privately owned international business founded in 2015, member in GAFTA (Grain & Feed Trade Association) with ISO 9001, ISO 14001 & ISO 45001. 
            AgreMax is also an official member of Agriculture Export Council .  
            </p>
            <p className="text-xl  font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10">
            The journey started in 1979 by the principles who managed their own businesses with a long experience history since then in different sectors of Animal Feeds, Human Feeds, Fertilizers, and mining business. 
            </p>
            <p className="text-xl font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10">
            AgreMax supplies variety of Animal Feed range picked from the best Suppliers worldwide, and is considered the Number one Supplier of Sugar Beet Pulp Pellets, as it exports more than 50% of Egypt SBPP worldwide (more than 350000 MT annually) . AgreMax also supplies other Hay Products as Dehydrated ALFALFA & Oat Hay, Grass Products , Straw Products, Human Feeds as Peanuts, Pumpkin Seeds, Sunflower Seeds, Sesame , Fertilizers , Clinker & Cement. 
            </p>
            <p className="text-xl font-ITCAVANTGARDESTD text-gray-500 py-4  leading-10">
            AgreMax exports its products to more than 20 countries worldwide as United Kingdom, Ireland, China, Korea , Japan , Taiwan , Italy , Athens , Cyprus, USA, Poland , Morocco , Kuwait , Oman , UAE , Saudi Arabia , Qatar ,….. dealing with the best multinational shipping lines and keen to execute shipments on time according to high quality international standards 
            </p>
          </div>
        </div>
      </Animation>

      {/* Vision and mission */}
      <Animation>
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
              “To be a leader manufacturer in the Animal Feed Industry, Human Feed Industry and Fertilizers Industry , for building our own Brands. 
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
      </Animation>

      {/* our services */}
      <Animation>
        <div
          className="container xl:px-20 flex flex-col py-24 px-5"
          id="services"
        >
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
                expectations we follow the rule: Always best quality, always
                good prices, always on time.
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
      </Animation>

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
      <Animation>
        <QualityMatters></QualityMatters>
      </Animation>
    </div>
  );
}
