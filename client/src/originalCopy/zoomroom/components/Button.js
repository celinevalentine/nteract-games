import React from "react";

const Button = ({ btnClass, spanId, name }) => {
  return (
    <div>
      <button className={btnClass}>
        <span id={spanId}>{name}</span>
      </button>
    </div>
  );
};

export default Button;
