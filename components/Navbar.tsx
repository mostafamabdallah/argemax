"use client";
import React, { useState } from "react";
import logo from "../public/Logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
type Props = {};

const Navbar = (props: Props) => {
  const [animate, setAnimate] = useState({
    opacity: 0,
    display: "none",
    x: 1000,
  });

  function callBackAnimate() {
    setAnimate({ opacity: 0, display: "flex", x: 1000 });
  }
  return (
    <>
      <div className="container  bg-white md:flex flex-row hidden xl:px-20 items-center justify-between py-5">
        <div className="logo md:w-[150px]">
          <img alt="argemax" className="w-full" src={logo.src}></img>
        </div>
        <div className="flex w-fit ">
          <ul className="w-full flex gap-2 justify-end items-center">
            <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
              <Link href={"/"}>HOME</Link>
            </li>
            <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
              <Link href={"/our-products"}>PRODUCTS</Link>
            </li>
            <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
              <a href={"/#about"}>ABOUT US</a>
            </li>
            <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
              <a href={"/#services"}>SERVICES</a>
            </li>
            <li className="px-5 py-2 capitalize text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
              <a href={"/#certificates"}>CERTIFICATES</a>
            </li>
            <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
              <Link href={"/contact-us"}>CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>

      <aside className="lg:w-[20%] 2xl:w-[20%] bg-primary  md:hidden flex relative z-[999999] ">
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
              </ul>
            </div>
          </motion.div>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
