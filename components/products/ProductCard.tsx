"use client";
import React from "react";
// @ts-nocheck
// @use client
import { motion } from "framer-motion";
import { Product } from "../Prodcuts";
import Link from "next/link";

type Props = {
  data: Product;
  callback?: any;
};

const ProductCard = ({ data, callback }: Props) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col p-2 lg:p-10 border border-myDarkGray gap-5 bg-white "
    >
      {data.url == "/" ? (
        <>
          <img className="w-full" src={data.image} alt="" />
          <h3 className="text-lg font-ITCAVANTGARDESTDBold font-extrabold text-primary text-center">
            {data.name}
          </h3>
          <button
            onClick={() => {
              if (data.hasSub == false) {
              } else {
                callback(data.products);
              }
            }}
            className="bg-primary text-white px-4 py-2 rounded-full"
          >
            Explore Products
          </button>
        </>
      ) : (
        <>
          <Link
            href={data.url}
            className="flex flex-col items-center justify-center gap-5"
          >
            <img className="w-full" src={data.image} alt="" />
            <h3 className="text-lg font-ITCAVANTGARDESTDBold font-extrabold text-primary text-center">
              {data.name}
            </h3>
          </Link>
          {data.hasSub == false || data.type == 'categoty' ? (
            <Link
              href={data.url}
              className="bg-primary text-white px-4 py-2 rounded-full text-center"
            >
              Explore Products
            </Link>
          ) : (
            <button
              onClick={() => {
                callback(data.products);
              }}
              className="bg-primary text-white px-4 py-2 rounded-full"
            >
              Explore Products
            </button>
          )}
        </>
      )}
    </motion.div>
  );
};

export default ProductCard;
