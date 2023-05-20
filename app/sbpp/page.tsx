"use client";
import React from "react";
import Banner from "../../public/sbpp/Banner.jpg";
import sbpp from "../../public/sbpp/SBPP-1.jpg";
import sbpp2 from "../../public/sbpp/SBPP-2.jpg";
import sbpp3 from "../../public/sbpp/SBPP-3.jpg";
import Suitable from "../../public/sbpp/Suitable-For.jpg";
import table1 from "../../public/sbpp/Table-1.jpg";
import fifty from "../../public/sbpp/50�.jpg";
import Prodcuts from "../../components/Prodcuts";
type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div
        style={{ backgroundImage: `url(${Banner.src})` }}
        className={`h-screen w-full  ')] bg-cover flex`}
      >
        <div className="container lg:w-8/12 h-full px-5  xl:px-20  flex flex-col justify-center  ">
          <h1 className="font- lg:text-7xl  text-3xl   text-white">
            <span className="lg:text-6xl text-4xlfont-extrabold ">
              {" "}
              Sugar Beet Pulp Pellets
            </span>
          </h1>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            We are fully aware that our business partners expect more than
            merely the best quality products.
          </p>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            Consequently, to meet their expectations we follow the rule: Always
            best quality, always good prices, always on time.
          </p>
          <p className="text-xl ITCAVANTGARDESTDThin text-white mt-5">
            We understand that the best quality is equivalent to the combination
            of best product with the perfect service.
          </p>
        </div>
        <div className="hidden lg:flex w-7/12"></div>
      </div>
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-col">
          <h2 className="lg:text-6xl text-4xlfont-ITCAVANTGARDESTDBold font-extrabold text-primary">
            Introduction To Sugar Beet Pulp Pellets:
          </h2>{" "}
          <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-8">
            Our sugar beet pulp pellets (SBPP) are a co-product of the sugar
            production from sugar beets. The pectin, hemicellulose, and
            cellulose they contain are highly digestible for ruminants. Compared
            to cereal-based feed, the long-chain carbohydrates of our SBPP are
            catabolized slowly and continuously, which can help reduce problems
            with ruminal fermentation and acidosis.
          </p>
        </div>
      </div>
      {/* type1 */}
      <div className="flex flex-row flex-wrap bg-gray-100 w-full">
        <div className="w-full lg:w-7/12">
          <img className="w-full" src={sbpp.src}></img>
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center p-5 lg:p-16 ">
          <div>
            <h2 className="lg:text-6xl text-4xlfont-ITCAVANTGARDESTDBold font-extrabold text-primary">
              Why Sugar Beet Pulp Pellets?{" "}
            </h2>{" "}
            <div className="flex flex-row flex-wrap gap-8 justify-between items-center py-10">
              <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-8">
                Because of their palatability and high energy content, our
                pellets are a popular component in compound feed or direct feed
                for ruminants, pigs, and horses.
              </p>
              <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-3">
                You can also use them to make less palatable mixed-feed ration
                components more agreeable for your animals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-row gap-16 flex-wrap">
          <div className="w-full lg:flex-1">
            <h2 className="lg:text-6xl text-4xlfont-ITCAVANTGARDESTDBold font-extrabold text-primary">
              What is SBPP:
            </h2>{" "}
            <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-8 text-justify">
              Sugar Beet Pulp Pellets (SBPP) are the pelletized beet residue
              remaining after the extraction of the juice from sugar production.
              During the sugar extraction, the beet pulp which contains high
              amount of water is pressed to extract residual sugar and water,
              and then dehydrated and pelletized for better preservation. The
              final product, SBPP, which contains a significant level of fiber,
              has a longer shelf life and is easier to transport and store. It
              is commonly used as a feed component for animal feed, in
              particular feed for ruminants.
            </p>
            <img className="w-full" src={sbpp2.src}></img>
          </div>
          <div className="w-full lg:flex-1">
            <img className="w-full" src={table1.src}></img>
          </div>
        </div>
      </div>

      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-col">
          <h2 className="lg:text-6xl text-4xlfont-ITCAVANTGARDESTDBold font-extrabold text-primary">
            Introduction To Reddish Sesame:
          </h2>{" "}
          <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-8">
            The genus Sesamum contains the flowering plant sesame (Sesamum
            indicum). There are numerous wild relatives in Africa, and it is
            widely naturalised in tropical regions around the world, where it is
            cultivated for its edible seeds that grow in pods.
          </p>
        </div>
      </div>

      <div className="container xl:px-20 flex flex-col py-20 px-5">
        <div className="flex flex-row gap-16 flex-wrap">
          <div className="w-full lg:flex-1">
            <h2 className="lg:text-6xl text-4xlfont-ITCAVANTGARDESTDBold font-extrabold text-primary">
              Sugar Beet Pulp Pellets Market{" "}
            </h2>{" "}
            <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-8 text-justify">
              World wide about 8,6 million metric tons of DRIED Sugar Beet Pulp
              (pellets and shreds) is fed to mainly cattle either as a straight
              feed or as an ingredient in compound feed.
            </p>
            <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-8 text-justify">
              The main producing countries of Sugar Beet Pulp Pellets are USA,
              Egypt, Russia, France, Germany, and Ukraine.
            </p>
            <div className="flex flex-row flex-wrap py-8">
              <div className="flex flex-col flex-[4]">
                <p className="text-primary font-ITCAVANTGARDESTD text-xl tracking-[0.3rem] py-2">
                  50% of the SBPP
                </p>
                <p className="text-primary font-ITCAVANTGARDESTD text-xl tracking-[0.3rem] py-2">
                  Production in Egypt
                </p>
                <p className="text-primary font-ITCAVANTGARDESTD text-xl tracking-[0.3rem] py-2">
                  is Exported by{" "}
                  <span className="font-ITCAVANTGARDESTDBold ">AgreMax</span>
                </p>
              </div>
              <div className="flex flex-1">
                <img className="w-full" src={fifty.src}></img>
              </div>
            </div>
            <img className="w-full" src={sbpp3.src}></img>
          </div>
          <div className="w-full lg:flex-1">
            <img className="w-full" src={Suitable.src}></img>
            <h2 className="lg:text-6xl text-4xlfont-ITCAVANTGARDESTDBold font-extrabold text-primary py-5">
              Future Of SBPP:
            </h2>{" "}
            <p className="text-gray-500 text-xl font-ITCAVANTGARDESTDThin pt-5 text-justify ">
              SBPP has a very good reputation especially in cattle rations and
              there will be new countries importing it in the near future.
              Despite the most recent EU sugar reform (with a significant cut
              back on its beet sugar production during 2006-2012) we would
              expect that the global BPP supply will not be affected that much
              due to an increasing production in other countries such as Egypt.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col ">
        <div className="container py-20 px-5  xl:px-20">
          <p className="text-gray-600  text-center bottom-10 tracking-widest  text-lg font-ITCAVANTGARDESTD ">
            MORE PRODUCTS
          </p>
        </div>
        <Prodcuts></Prodcuts>
      </div>
    </div>
  );
};

export default Page;
