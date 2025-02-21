import React from "react";

const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
