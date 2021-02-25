import React from "react";
import scoreBox from "../../images/scoreBox.png";
import Hotspot from "./Hotspot";
import styled from "styled-components";

const ClickScore = ({
  taskNumber,
  numberOfAnswers,
  hotspots,
  hotspotName,
  score,
  setScore,
}) => {
  console.log("click-t", taskNumber);
  console.log("click-hs", hotspotName);

  console.log("score", score);

  const onHotspotClick = (name, taskNum) => {
    if (taskNum === taskNumber && name === hotspotName) {
      setScore((prevScore) => prevScore + 1);
      console.log(score);
      console.log(name);
      console.log(taskNum);
    }
    return `${score}/${numberOfAnswers}`;
  };
  return (
    <>
      <Wrapper>
        <img className="score-box" src={scoreBox} alt="score-box" />
        <p id="score">{`${score}/${numberOfAnswers}`}</p>
      </Wrapper>

      {hotspots &&
        hotspots.map((h, i) => (
          <Hotspot
            hotspotName={hotspotName}
            key={i}
            onClick={() => onHotspotClick(hotspotName, taskNumber)}
            style={{
              left: `${h.x}px`,
              top: `${h.y}px`,
              width: `${h.width}px`,
              height: `${h.height}px`,
            }}
          />
        ))}
    </>
  );
};

export default ClickScore;
const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 50px;
  width: 50px;

  img {
    z-index: 5;
  }

  p {
    z-index: 9;
  }
`;
