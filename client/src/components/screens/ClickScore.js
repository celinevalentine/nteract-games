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
        <img src={scoreBox} alt="score-box" />
        <p>{`${score}/${numberOfAnswers}`}</p>
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
  z-index: 9;
  position: absolute;
  width: 100px;
  height: 100px;
  top: -9px;
  left: 28px;

  img {
    z-index: 5;
    position: absolute;
    width: 78px;
    height: 35px;
    left: 810px;
    top: 33px;
  }

  p {
    z-index: 9;
    position: absolute;
    height: 35px;
    width: 47px;
    left: 830px;
    top: 29px;
    font-size: 30px;
    line-height: 35px;
    font-family: var(--ff-primary);
  }
`;
