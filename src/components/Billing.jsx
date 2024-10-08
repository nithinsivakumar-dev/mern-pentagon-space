import React from "react";

import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        draggable={"false"}
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] ml-10 relative z-[5]"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={`${layout.sectionInfo} sm:ml-10 ml-0`}>
      <h2 className={styles.heading2}>
        All your <br className="sm:block hidden" /> learning Unified in one
        place
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Access everything you need to succeed with our comprehensive LMS. From
        recorded classes and schedules to job applications, tests, and mock
        interviews, our platform has it all. Streamline your learning experience
        and stay organized with our app, available for download on the Play
        Store and App Store.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          draggable={"false"}
          src={apple}
          alt="app_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          draggable={"false"}
          src={google}
          alt="play_store"
          className="w-[144px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
