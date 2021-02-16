import React, { useState } from "react";

const Hotspot = ({ hotspotName, style, onHotspotClick }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      // onHotspotClick();
      console.log(onHotspotClick);
      console.log(`${hotspotName} clicked`);
    }
  };
  return (
    <div
      id={hotspotName}
      style={{
        position: "absolute",
        border: 1,
        zIndex: 10,
        borderStyle: "solid",
        borderColor: "red",
        ...style,
      }}
      onClick={handleClick}
      disable="false"></div>
  );
};

export default Hotspot;
