"use client"
import React from "react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
type Props = {};
SwiperCore.use([Autoplay]);

const MainBanner = (props: Props) => {
  interface BannerData {
    id: number;
    element: any;
  }
  const swiperParams = {
    loop: true,
    autoplay: {
      delay: 2000,
    },
  };
  return (
    <>
      <div className="w-full">
      <video  autoPlay muted loop style={{ width: '100%' }}>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      </div>
    </>
  );
};

export default MainBanner;
