"use client";
import React from "react";
import image from "../../public/Home/Animal-Feed-Products.jpg";
// @ts-nocheck
// @use client
import { motion } from "framer-motion";
import { Product } from "@/app/page";

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
      <img className="w-full" src={data.image} alt="" />
      <h3 className="text-lg font-ITCAVANTGARDESTDBold font-extrabold text-primary text-center">
        {data.name}
      </h3>
      <button
        onClick={() => {
          callback(data.products);
        }}
        className="bg-primary text-white px-4 py-2 rounded-full"
      >
        Explore Products
      </button>
    </motion.div>
  );
};

export default ProductCard;
