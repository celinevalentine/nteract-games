import React from "react";
import BackgroundImage from "./BackgroundImage";

const Mapper = ({
  src,
  name,
  href = "about:blank",
  target = "_self",
  alt = "none",
  title,
  coords,
  shape,
}) => {
  return (
    <div>
      <map name={name}>
        <area
          target={target}
          href={href}
          alt={alt}
          title={title}
          coords={coords}
          shape={shape}
        />
      </map>
      <BackgroundImage src={src} useMap={name} />
    </div>
  );
};

export default Mapper;
