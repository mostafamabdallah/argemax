import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" bg-primary">
      <div className=" container flex flex-col  xl:px-20 py-10">
        <h1 className="text-6xl lg:text-9xl text-center text-[#0a6d34] font-ITCAVANTGARDESTDBold font-extrabold ">
          {" "}
          CONTACT US
        </h1>
        <div className="flex flex-row flex-wrap bg-primary shadow-[0px_0px_25px_0px_rgba(0,0,0,0.2)] px-5 lg:px-10 py-10 mt-10">
          <div className="w-full lg:w-4/12 flex-col">
            <h3 className="text-black text-xl font-ITCAVANTGARDESTDBold opacity-70">
              Dubai Office:
            </h3>
            <ul className="px-8 py-5 text-white font-ITCAVANTGARDESTD  text-lg ">
              <li>Adress: 407 Metropolis Tower Business Bay, Dubai,</li>
              <li>
                UAE Call: <a href="tel:+971043265574">971 04 326 5574</a>{" "}
              </li>
              <li>Fax: +971 04 261 1807</li>
              <li>
                PO Box: <a href="tel:232653">232653</a>{" "}
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 flex-col">
            <h3 className="text-black text-xl font-ITCAVANTGARDESTDBold opacity-70">
              Egypt Office:
            </h3>
            <ul className="px-8 py-5 text-white font-ITCAVANTGARDESTD  text-lg ">
              <li>
                Adress: 4 (a) - Khaled Ibn Al-Walid St. Sheraton Heliopolis,
                Cairo, Egypt{" "}
              </li>
              <li>
                Call: <a href="tel:+20222693522 ">+20 222 693 5 22 </a> /
                <a href="tel:+20222693522 ">+20 222 693 5 22 </a>{" "}
              </li>
              <li>Fax: +20 222 693 5 25</li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 flex-col">
            <h3 className="text-black text-xl font-ITCAVANTGARDESTDBold opacity-70">
              General Info:
            </h3>
            <ul className="px-8 py-5 text-white font-ITCAVANTGARDESTD  text-lg ">
              <li>
                Mail: <a href="mailto:info@agremax.net">info@agremax.net</a>
              </li>
              <li>
                Website: <a href="https://agremax.net">https://agremax.net</a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-myGray"></div>
      </div>
      <div className="bg-white container xl:px-20 py-6">
        <p className="text-base text-gray-400 font-ITCAVANTGARDESTD">AgreMax general trading LLC • Downloads</p>
      </div>
    </div>
  );
};

export default Footer;
