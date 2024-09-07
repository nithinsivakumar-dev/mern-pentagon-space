import React from "react";

import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Master JavaScript, <br className="sm:block hidden" /> with the MERN
        Stack
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Dive into the world of web development with JavaScript and the MERN
        stack. Learn how to build dynamic, full-stack web applications using
        MongoDB, Express.js, React, and Node.js. Our comprehensive curriculum
        covers everything from fundamentals to advanced MERN stack techniques,
        preparing you to create powerful and scalable web solutions.
      </p>
      <Button styles={"mt-10"} />
    </div>

    <div className={layout.sectionImg}>
      <img
        draggable={"false"}
        src={card}
        alt="card"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
);

export default CardDeal;
