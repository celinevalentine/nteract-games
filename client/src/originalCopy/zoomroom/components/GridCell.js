import React, { useState } from "react";

const GridCell = ({ style, onGridClick }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      onGridClick();
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

export default GridCell;
