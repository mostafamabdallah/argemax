import React from "react";
import logo from "../public/Logo.png";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="container  bg-white md:flex flex-row hidden xl:px-20 items-center justify-between py-5">
      <div className="logo md:w-[150px]">
        <img alt="argemax" className="w-full" src={logo.src}></img>
      </div>
      <div className="flex w-6/12">
        <ul className="w-full flex gap-2 justify-end items-center">
          <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
            <Link href={""}>HOME</Link>
          </li>
          <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
            <Link href={""}>PRODUCTS</Link>
          </li>
          <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
            <Link href={""}>ABOUT xUS</Link>
          </li>
          <li className="px-5 py-2 text-primary font-bold font-ITCAVANTGARDESTD tracking-[0.2rem] hover:text-secondary text-sm">
            <Link href={""}>ABOUT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
