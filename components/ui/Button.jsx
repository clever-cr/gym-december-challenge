import React from "react";

const Button = ({ text, style }) => {
  return (
    <div>
      <button
        className={`py-4 px-5 bg-lightblue text-white text-base font-bold ${style}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
