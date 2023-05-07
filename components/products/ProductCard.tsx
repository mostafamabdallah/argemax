"use client";
import React from "react";
import image from "../../public/Home/Animal-Feed-Products.jpg";
// @ts-nocheck
// @use client
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col p-10 border border-myDarkGray gap-5 bg-white z-10"
    >
      <img className="w-full" src={image.src} alt="" />
      <h3 className="text-2xl font-ITCAVANTGARDESTDBold font-extrabold text-primary text-center">
        Animal feed products
      </h3>
      <button className="bg-primary text-white px-4 py-2 rounded-full">
        Explore Products
      </button>
    </motion.div>
  );
};

export default ProductCard;
