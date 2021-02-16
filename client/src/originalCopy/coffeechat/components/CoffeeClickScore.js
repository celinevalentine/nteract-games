import React, { useContext } from "react";
import scoreBox from "../../zoomroom/images/scoreBox.png";
import GridCell from "../../zoomroom/components/GridCell";
import ScoreContext from "../../zoomroom/components/ScoreContext";

const CoffeeClickScore = ({ taskNumber, numberOfAnswers, clickedScore }) => {
  const [score, setScore] = useContext(ScoreContext);

  const onGridClick = (name) => {
    if (taskNumber === 1) {
      if (name === "foregroundMan" || name === "computerWoman") {
        setScore((prevScore) => prevScore + 1);

        console.log(score);
      }
      return `${score}/${numberOfAnswers}`;
    }
    if (taskNumber === 2) {
      if (
        name === "yellowCup" ||
        name === "cake" ||
        name === "greenCup" ||
        name === "purpleCup"
      ) {
        setScore((prevScore) => prevScore + 1);
      }
      return `${score}/${numberOfAnswers}`;
    }
    if (taskNumber === 3) {
      if (name === "hand") {
        setScore((prevScore) => prevScore + 1);
        // score((prevScore) => prevScore + 1);
      }
      return `${score}/${numberOfAnswers}`;
    }
    if (taskNumber === 4) {
      if (name === "fgTable" || name === "bgTable") {
        setScore((prevScore) => prevScore + 1);
        // score((prevScore) => prevScore + 1);
      }
      return `${score}/${numberOfAnswers}`;
    }
    if (taskNumber === 5) {
      if (name === "glasses") {
        setScore((prevScore) => prevScore + 1);
      }
      return `${score}/${numberOfAnswers}`;
    }
  };
  return (
    <>
      <div>
        <img className="score-box" src={scoreBox} alt="score-box" />
        <p id="score">{`${score}/${numberOfAnswers}`}</p>
      </div>
      <GridCell
        onGridClick={() => onGridClick("foregroundWoman")}
        style={{
          left: 68,
          height: 291.23,
          width: 237,
          top: 123,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick("foregroundMan")}
        style={{
          left: 333,
          height: 285,
          width: 188,
          top: 130,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick("computerMan")}
        style={{
          left: 561,
          height: 263.5,
          width: 160,
          top: 151,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick("computerWoman")}
        style={{
          left: 713.1,
          height: 241.94,
          width: 176.16,
          top: 172.56,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick("fgTable")}
        style={{
          left: 125,
          height: 67,
          width: 398,
          top: 360,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick("bgTable")}
        style={{
          left: 633,
          height: 127,
          width: 185,
          top: 250,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick("yellowCup")}
        style={{
          left: 165,
          height: 67,
          width: 71,
          top: 360,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick("cake")}
        style={{
          left: 230,
          height: 67,
          width: 71,
          top: 350,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick("greenCup")}
        style={{
          left: 383,
          height: 67,
          width: 71,
          top: 355,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick("purpleCup")}
        style={{
          left: 661,
          height: 67,
          width: 71,
          top: 241,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick("hand")}
        style={{
          left: 249,
          height: 67,
          width: 71,
          top: 320,
        }}
      />

      <GridCell
        onGridClick={() => onGridClick("glasses")}
        style={{
          left: 170.54,
          height: 123.54,
          width: 68.87,
          top: 160.46,
        }}
      />
    </>
  );
};

export default CoffeeClickScore;
