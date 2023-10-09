"use client";
import React, { useState } from "react";
import logo from "../public/Logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

type SubMenu = {
  name: string;
  products?: SubMenu[] | undefined;
  url: string;
  type?: string | undefined;
  hasSub?: boolean | undefined;
};

const subMenu: SubMenu[] = [
  {
    name: "Animal feed products",
    products: [
      {
        name: "Grass Products",
        url: "/grass",
        type: "sub",
      },

      {
        name: "Sugar beet pulp pellets",
        url: "/sbpp",
        type: "sub",
      },
      {
        name: "Hay Products",
        url: "/hey-products",
        type: "sub",
      },
      {
        name: "Straw Products",
        url: "/straw-products",
        type: "sub",
      },
    ],
    url: "/",
    type: "category",
  },
  {
    name: "Human feed products",
    products: [
      {
        name: "Sesame ",
        url: "/sesame",
        type: "sub",
      },
      {
        name: "Peanuts",
        url: "/peanuts-amended",
        type: "sub",
      },
      {
        name: "Sunflower Seeds ",
        url: "/sunflower-seeds",
        type: "sub",
      },
      {
        name: "Pumkin Seeds",
        url: "/pumpkin-seeds",
        type: "sub",
      },
    ],
    url: "/",
    type: "category",
  },

  {
    name: "Fertilizers",
    products: [],
    url: "/fertilizers",
    type: "category",
    hasSub: false,
  },
  {
    name: "Mining",
    products: [],
    url: "/mining",
    type: "category",
    hasSub: false,
  },

  {
    name: "Clinker & Cement",
    products: [],
    url: "/clinker-cement",
    type: "category",
    hasSub: false,
  },
];
const Navbar = () => {
  const [animate, setAnimate] = useState({
    opacity: 0,
    display: "none",
    x: 1000,
  });

  function callBackAnimate() {
    setAnimate({ opacity: 0, display: "flex", x: 1000 });
  }

  const [active, setActive] = useState(false);
  return (
    <>
      <div className=" bg-white lg:flex flex-row hidden xl:px-20 items-center justify-between py-5 fixed z-50 w-full  right-0 left-0 ">
        <div className="logo lg:w-[150px]">
          <img alt="argemax" className="w-full" src={logo.src}></img>
        </div>
        <div className="flex w-fit z-50">
          <ul className="w-full flex gap-2 justify-end items-center">
            <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
              <Link href={"/"}>HOME</Link>
            </li>
            <li className="px-5 py-2 relative text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
              <Link href={"/our-products"}>PRODUCTS</Link>
            </li>
            <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
              <a href={"/#about"}>ABOUT US</a>
            </li>
            <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
              <a href={"/#services"}>SERVICES</a>
            </li>
            <li className="px-5 py-2 capitalize text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
              <Link href={"/certifications"}>CERTIFICATES</Link>
            </li>
            <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
              <Link href={"/contact-us"}>CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>

      <aside className="lg:w-[20%] 2xl:w-[20%] bg-primary  lg:hidden flex relative z-[999999] ">
        <nav className="lg:hidden  w-full flex ">
          <div className=" mx-auto flex flex-row items-center justify-end fixed px-2  w-full p-5 ">
            <button
              className="w-fit"
              onClick={() => {
                setAnimate({ opacity: 1, display: "flex", x: 0 });
              }}
            >
              <FontAwesomeIcon
                className={`text-2xl cursor-pointer text-white bg-secondary p-3 rounded-full ${
                  animate.opacity && "hidden"
                }`}
                icon={faBars}
              ></FontAwesomeIcon>
            </button>
          </div>
          <motion.div
            initial={{ display: "none", x: 1000 }}
            animate={animate}
            transition={{
              duration: 1,
            }}
            className="bg-primary w-screen h-screen flex flex-col justify-center items-center fixed "
          >
            <button
              onClick={() => {
                setAnimate({ opacity: 0, display: "flex", x: 1000 });
              }}
              className="p-5 absolute top-0 right-0 cursor-pointer"
            >
              <FontAwesomeIcon
                className="pl-3 text-5xl text-white"
                icon={faClose}
              ></FontAwesomeIcon>
            </button>
            <div className="container mx-auto">
              <ul className="w-full flex gap-2 justify-end items-center flex-col ">
                <li
                  onClick={(e) => {
                    callBackAnimate();
                  }}
                  className="px-5 py-2 text-white font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-black text-lg"
                >
                  <Link href={"/"}>HOME</Link>
                </li>
                <li
                  onClick={(e) => {
                    callBackAnimate();
                  }}
                  className="px-5 py-2 text-white font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-black text-lg"
                >
                  <Link href={"/our-products"}>PRODUCTS</Link>
                </li>
                <li
                  onClick={(e) => {
                    callBackAnimate();
                  }}
                  className="px-5 py-2 text-white font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-black text-lg"
                >
                  <Link href={"/our-products"}>ABOUT US</Link>
                </li>
                <li
                  onClick={(e) => {
                    callBackAnimate();
                  }}
                  className="px-5 py-2 text-white font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-black text-lg"
                >
                  <Link href={"/contact-us"}>CONTACT US</Link>
                </li>
                <li
                  onClick={(e) => {
                    callBackAnimate();
                  }}
                  className="px-5 py-2 text-white font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-black text-lg"
                >
                  <Link href={"/certifications"}>CERTIFICATES</Link>
                </li>
                <li
                  onClick={(e) => {
                    callBackAnimate();
                  }}
                  className="px-5 py-2 text-white font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-black text-lg"
                >
                  <a href={"/#services"}>SERVICES</a>
                </li>
              </ul>
            </div>
          </motion.div>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
