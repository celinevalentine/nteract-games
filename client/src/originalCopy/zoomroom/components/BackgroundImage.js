import React from "react";

const BackgroundImage = ({ src, name }) => {
  return (
    <div className="backgroundImage">
      <img src={src} useMap={`#${name}`} alt={name} />
    </div>
  );
};

export default BackgroundImage;
