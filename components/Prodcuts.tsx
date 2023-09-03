import ProductCard from "@/components/products/ProductCard";
import Animal from "../public/Home/Animal-Feed-Products.jpg";
import Fertilizers from "../public/Home/Fertilizers.jpg";
import Mining from "../public/Home/Mining.jpg";
import Clinker from "../public/Home/CLinker-&-Cemet.jpg";
import Fruits from "../public/Home/Fruits-and-Vegitables.jpg";
import HumanFeed from "../public/Home/Human-Feed.png";
import "swiper/swiper-bundle.min.css";

// sub categoreise
import FruitsVegiies from "../public/sub catergories/Fruits-&-Vegiies.jpg";
import GrassProducts from "../public/sub catergories/Grass-Products.jpg";
import HayProducts from "../public/sub catergories/Hay-Products.jpg";
import Peanuts from "../public/sub catergories/Peanuts.jpg";
import Pumkin from "../public/sub catergories/Pumkin-Seeds.jpg";
import Sesame from "../public/sub catergories/Sesame.jpg";
import Sugar from "../public/sub catergories/Sugar-Beet-Pulp.jpg";
import Sunflower from "../public/sub catergories/Sunflower-seeds.jpg";
import straw from "../public/sub catergories/straw-Products.jpg";


//
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import SwiperCore, { Navigation } from "swiper";

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
  url: string;
  type?: string;
  hasSub?: boolean;
};
SwiperCore.use([Navigation]);

const products: Product[] = [
  {
    name: "Animal feed products",
    image: Animal.src,
    products: [


      {
        name: "Sugar beet pulp pellets",
        image: Sugar.src,
        url: "/sbpp",
        type: "sub",
      },
      {
        name: "Hay Products",
        image: HayProducts.src,
        url: "/hey-products",
        type: "sub",
      },
      {
        name: "Straw Products",
        image: straw.src,
        url: "/straw-products",
        type: "sub",
      },
      {
        name: "Grass Products",
        image: GrassProducts.src,
        url: "/grass",
        type: "sub",
      },
    ],
    url: "/",
    type: "category",
  },
  {
    name: "Fertilizers",
    image: Fertilizers.src,
    products: [],
    url: "/fertilizers",
    type: "category",
    hasSub: false,
  },
  {
    name: "Human feed products",
    image: HumanFeed.src,
    products: [
      {
        name: "Peanuts",
        image: Peanuts.src,
        url: "/peanuts-amended",
        type: "sub",
      },
      {
        name: "Sunflower Seeds ",
        image: Sunflower.src,
        url: "/sunflower-seeds",
        type: "sub",
      },

      {
        name: "Pumpkin Seeds",
        image: Pumkin.src,
        url: "/pumpkin-seeds",
        type: "sub",
      },
      {
        name: "Sesame ",
        image: Sesame.src,
        url: "/sesame",
        type: "sub",
      },
    ],
    url: "/",
    type: "category",
  },
  {
    name: "Mining",
    image: Mining.src,
    products: [],
    url: "/mining",
    type: "category",
    hasSub: false,
  },
  {
    name: "Clinker & Cement",
    image: Clinker.src,
    products: [],
    url: "/clinker-cement",
    type: "category",
    hasSub: false,
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
    <>
      <div >
        <Swiper
          navigation={true}
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animate }}
        transition={{ duration: 2 }}
        className="px-5 md:px-20 products_gallary"
      >
        <Swiper
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
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
          slidesPerView={1}
          spaceBetween={5}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {subProduct?.map((el, i) => {
            return (
              <SwiperSlide  key={i} style={{ scale: 0.9, margin: 0 ,justifyContent:"center" }}>
                <ProductCard data={el}></ProductCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </>
  );
};

export default Prodcuts;
