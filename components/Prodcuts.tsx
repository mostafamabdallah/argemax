import ProductCard from "@/components/products/ProductCard";
import Animal from "../public/Home/Animal-Feed-Products.jpg";
import Fertilizers from "../public/Home/Fertilizers.jpg";
import Mining from "../public/Home/Mining.jpg";
import Clinker from "../public/Home/CLinker-&-Cemet.jpg";
import Fruits from "../public/Home/Fruits-and-Vegitables.jpg";
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

type Props = {};

const Prodcuts = (props: Props) => {
  const [subProduct, setSubProduct] = useState<Product[]>();
  const [animate, setAnimate] = useState(0);

  const callback = (level2Product: Product[]) => {
    setSubProduct(level2Product);
    setAnimate(1);
  };

  useEffect(() => {}, [subProduct, animate]);
  return (
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
  );
};

export default Prodcuts;
