import React from "react";
import scoreBox from "../../images/scoreBox.png";
import Hotspot from "./Hotspot";
import { GameContext } from "../context/GameContext";

const ClickScore = ({ taskNumber, numberOfAnswers, hotspots }) => {
  const { score, setScore } = React.useContext(GameContext);
  const hotspotName = hotspots.map((h) => h.hotspot_name);

  const onHotspotClick = (name, taskNum) => {
    if (taskNum === taskNumber && name === hotspotName) {
      setScore((prevScore) => prevScore + 1);
      console.log(score);
    }
    return `${score}/${numberOfAnswers}`;
  };
  return (
    <>
      <div>
        <img className="score-box" src={scoreBox} alt="score-box" />
        <p id="score">{`${score}/${numberOfAnswers}`}</p>
      </div>
      {hotspots.map((h, i) => (
        <Hotspot
          key={i}
          onClick={() => onHotspotClick(hotspotName, taskNumber)}
          style={{
            x: h.x,
            y: h.y,
            width: h.width,
            height: h.height,
          }}
        />
      ))}
    </>
  );
};

export default ClickScore;
