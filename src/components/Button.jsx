import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles} bg-blue-gradient transition-transform duration-300 ease-in-out hover:scale-105`}
    >
      Get Started
    </button>
  );
};

export default Button;
