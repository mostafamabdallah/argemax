import React from "react";
import background from "../public/Home/Banner.jpg";

type Props = {};

const MainBanner = (props: Props) => {
  return (
    <div
      className={`h-[85vh] w-full  bg-[url('../public/Home/Banner.jpg')] bg-cover`}
    >
      <div className="container h-full px-5  xl:px-20  flex flex-col justify-center relative">
        <h1 className="font- text-6xl  text-white ">
          <span className="text-6xl font-extrabold ">We Grow Through </span>
          <br />
          <span className="ITCAVANTGARDESTDThin text-6xl font-light">
            Creativity, Invention
            <br />
            And Innovation
          </span>
        </h1>
        <p className="text-white absolute bottom-10 tracking-[2rem] text-lg ITCAVANTGARDESTDThin">
          QUALITY MATTERS
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
