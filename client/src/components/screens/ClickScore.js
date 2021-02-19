import React from "react";
import scoreBox from "../../images/scoreBox.png";
import Hotspot from "./Hotspot";

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
      <div>
        <img className="score-box" src={scoreBox} alt="score-box" />
        <p id="score">{`${score}/${numberOfAnswers}`}</p>
      </div>

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
