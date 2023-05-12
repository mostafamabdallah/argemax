"use client";
import MainBanner from "@/components/MainBanner";
import landscape from "../public/Home/Vision-&-Mission.jpg";
import ProductCard from "@/components/products/ProductCard";
import Animal from "../public/Home/Animal-Feed-Products.jpg";
import Fertilizers from "../public/Home/Fertilizers.jpg";
import Mining from "../public/Home/Mining.jpg";
import Clinker from "../public/Home/CLinker-&-Cemet.jpg";
import Fruits from "../public/Home/Fruits-and-Vegitables.jpg";

import quality from "../public/Home/Quality-matters.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

export type Product = {
  name: string;
  image: string;
  products?: Product[];
};

const products: Product[] = [
  {
    name: "Animal feed products",
    image: Animal.src,
    products: [{ name: "test1", image: Animal.src }],
  },
  {
    name: "Fertilizers",
    image: Fertilizers.src,
    products: [{ name: "test2", image: "tesssad" }],
  },
  {
    name: "Human feed products",
    image: Fruits.src,
    products: [{ name: "test2", image: "tesssad" }],
  },
  {
    name: "Mining",
    image: Mining.src,
    products: [{ name: "test2", image: "tesssad" }],
  },
  {
    name: "Clinker & Cement",
    image: Clinker.src,
    products: [{ name: "test2", image: "tesssad" }],
  },
];

export default function Home() {
  const [subProduct, setSubProduct] = useState<Product[]>();
  const [animate, setAnimate] = useState(0);

  const callback = (level2Product: Product[]) => {
    setSubProduct(level2Product);
    setAnimate(1);
  };

  useEffect(() => {}, [subProduct, animate]);
  return (
    <div className="flex flex-col items-center justify-between ">
      {/* Banner */}
      <MainBanner></MainBanner>
      {/* About */}
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <h2 className="text-6xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
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
            <h2 className="text-6xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
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
            <h2 className="text-6xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
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
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <h2 className="text-6xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
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
        <div className="container py-20 px-5  xl:px-20">
          <h2 className="text-5xl font-ITCAVANTGARDESTDBold font-extrabold text-primary text-center">
            Our Products{" "}
          </h2>
          <p className="text-gray-600  text-center bottom-10 tracking-widest  text-lg font-ITCAVANTGARDESTD ">
            QUALITY MATTERS
          </p>
        </div>

        <div className="">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },

              1536: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            slidesPerView={2}
            spaceBetween={20}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {products.map((el, i) => {
              return (
                <SwiperSlide key={i} style={{ scale: 0.9 }}>
                  <ProductCard callback={callback} data={el}></ProductCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animate }}
          transition={{ duration: 2 }}
          className="px-20"
        >
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },

              1536: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {subProduct?.map((el, i) => {
              return (
                <SwiperSlide key={i} style={{ scale: 0.9 }}>
                  <ProductCard data={el}></ProductCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div> */}
      </div>
      {/* s */}
      <div className="container flex flex-row flex-wrap mt-16">
        <div className="w-full lg:w-6/12 flex flex-col justify-center p-5 lg:p-16 bg-myGray">
          <div>
            <h2 className="text-8xl font-ITCAVANTGARDESTDBold font-extrabold text-primary">
              Quality Matters
            </h2>
            <p className="text-2xl font-ITCAVANTGARDESTD text-gray-500 py-5 pl-0 lg:pl-24">
              We believe in treating our customers with respect and faith.
            </p>
            <p className="text-2xl font-ITCAVANTGARDESTD text-gray-500 py-5 pl-0 lg:pl-24">
              We grow through creativity, invention and innovation,
            </p>
            <p className="text-2xl font-ITCAVANTGARDESTD text-gray-500 py-5 pl-0 lg:pl-24">
              We integrate honesty, integrity and business ethics into all
              aspects of our business functioning{" "}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-6/12">
          <img className="w-full" src={quality.src}></img>
        </div>
      </div>
    </div>
  );
}
