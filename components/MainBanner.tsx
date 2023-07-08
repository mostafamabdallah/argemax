import React from "react";
import background from "../public/Home/Banner.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
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
        <Swiper {...swiperParams} slidesPerView={1} className="mySwiper">
          <SwiperSlide>
            <div
              className={`h-[100vh] w-full  bg-[url('../public/Home/Banner.jpg')] bg-cover`}
            >
              <div className="container h-full px-5  xl:px-20  flex flex-col justify-center ">
                <h1 className="font- lg:text-6xl text-4xl text-white ">
                  <span className="lg:text-6xl text-4xl font-extrabold ">
                    We Grow Through{" "}
                  </span>
                  <br />
                  <span className="font-ITCAVANTGARDESTDThin lg:text-6xl text-4xl font-light">
                    Creativity, Invention
                    <br />
                    And Innovation
                  </span>
                </h1>
                <p className="text-white absolute bottom-10 tracking-[2rem] text-lg font-ITCAVANTGARDESTDThin hidden lg:block">
                  QUALITY MATTERS
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`h-[100vh] w-full  bg-[url('../public/sbpp/Banner.jpg')] bg-cover`}
            >
              <div className="container h-full px-5  xl:px-20  flex flex-col justify-center ">
                <h1 className="font- lg:text-6xl text-4xl text-white ">
                  <span className="lg:text-6xl text-4xl font-extrabold ">
                    SBPP{" "}
                  </span>
                  <br />
                  <span className="font-ITCAVANTGARDESTDThin lg:text-6xl text-4xl font-light">
                    Most Important
                    <br />
                    And Innovation
                  </span>
                </h1>
                <p className="text-white absolute bottom-10 tracking-[2rem] text-lg font-ITCAVANTGARDESTDThin hidden lg:block">
                  QUALITY MATTERS
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainBanner;
