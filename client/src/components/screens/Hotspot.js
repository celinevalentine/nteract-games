import React, { useState } from "react";

const Hotspot = ({ hotspotName, style, onClick }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      onClick();
      console.log(`${hotspotName} clicked`);
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        border: 1,
        zIndex: 10,
        // borderStyle: "solid",
        // borderColor: "red",
        ...style,
      }}
      onClick={handleClick}
      disable={clicked}></div>
  );
};

export default Hotspot;
