import React from "react";

const Button = ({ text, style }) => {
  return (
    <div>
      <button className={`py-4 px-5 text-white text-base font-medium ${style}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
