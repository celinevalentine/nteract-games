import React from "react";

const Button = ({ name, backgroundColor }) => {
  return (
    <button className="btn" style={{ backgroundColor: backgroundColor }}>
      {name}
    </button>
  );
};

export default Button;
