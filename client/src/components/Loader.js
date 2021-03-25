import { useState } from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

const override = css`
  display: flex;
  margin: 0 auto;
  border-color: lightgreen;
  justify-content: center;
  align-items: center;
`;

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#90EE90");

  return (
    <div className="sweet-loading">
      <BarLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
}

export default Loader;
