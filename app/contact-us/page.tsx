import ContactForm from "@/components/ContactForm";
import QualityMatters from "@/components/QualityMatters";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-myGray flex-wrap">
      <div className="container xl:px-20 flex flex-row py-20 px-5 bg-secondary flex-wrap">
        <div className="flex flex-col w-full lg:w-6/12">
          <div className="w-full flex-col lg:w-8/12">
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
          <div className="w-full flex-col lg:w-8/12">
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
          <div className="w-full flex-col lg:w-8/12">
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
        <div className="w-full flex flex-col lg:w-6/12">
          <h1 className="text-4xl text-white font-ITCAVANTGARDESTDBold">
            Conatct Us
          </h1>
          <ContactForm></ContactForm>
        </div>
      </div>
      <QualityMatters></QualityMatters>
    </div>
  );
};

export default page;
