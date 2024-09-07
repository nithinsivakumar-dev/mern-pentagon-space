import React, { useState } from "react";

import styes from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${styes.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${
          styes.flexCenter
        } flex-col w-[100%] h-[100%] rounded-full ${
          hovered ? "bg-[#030018]" : "bg-primary"
        }`}
      >
        <div className={`${styes.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            draggable={"false"}
            src={arrowUp}
            className={`w-[23px] h-[23px] object-contain duration-500 ${
              hovered ? "rotate-[360deg]" : ""
            }`}
            alt="Arrow"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
