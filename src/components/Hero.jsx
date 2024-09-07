import React from "react";

import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img
          draggable={"false"}
          src={discount}
          alt="Discount"
          className="w-[32px] h-[32px]"
        />

        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">15%</span> Off on{" "}
          <span className="text-white">Offline Courses</span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[44px] text-white ss:leading-[100px] leading-[75px] w-full">
        Of Full Stack Development
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of expert trainers is dedicated to equipping you with the
        skills needed to excel in the dynamic world of web development. Dive
        into the MERN stack, mastering MongoDB, Express.js, React, and Node.js
        with hands-on projects and real-world scenarios. Join us and be at the
        forefront of innovation!
      </p>
    </div>

    {/* Right side */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        draggable={"false"}
        src={robot}
        alt="Robotic arm"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
