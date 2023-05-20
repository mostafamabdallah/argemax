import React from "react";
import background from "../public/Home/Banner.jpg";

type Props = {};

const MainBanner = (props: Props) => {
  return (
    <div
      className={`h-[85vh] w-full  bg-[url('../public/Home/Banner.jpg')] bg-cover`}
    >
      <div className="container h-full px-5  xl:px-20  flex flex-col justify-center ">
        <h1 className="font- lg:text-6xl text-4xl text-white ">
          <span className="lg:text-6xl text-4xl font-extrabold ">We Grow Through </span>
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
  );
};

export default MainBanner;
