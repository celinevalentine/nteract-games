import React from "react";

const BgImage = ({ src, name }) => {
  return (
    <div className="backgroundImage">
      <img src={src} alt={name} />
    </div>
  );
};

export default BgImage;
