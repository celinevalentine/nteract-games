import React, { useState } from "react";
import scoreBox from "../images/scoreBox.png";
// import ScoreContext from "./ScoreContext";

const ClickScore = ({ taskNumber, numberOfAnswers }) => {
  // const [score, setScore] = useContext(ScoreContext);
  const [score, setScore] = useState(0);

  const onGridClick = (row, col) => {
    if (taskNumber === 1) {
      if (
        (row === 1 && col === 2) ||
        (row === 2 && col === 1) ||
        (row === 2 && col === 3)
      ) {
        setScore((prevScore) => prevScore + 1);
      }
      return `${score}/${numberOfAnswers}`;
    }
    if (taskNumber === 2) {
      if (
        (row === 1 && col === 1) ||
        (row === 2 && col === 2) ||
        (row === 2 && col === 3)
      ) {
        setScore((prevScore) => prevScore + 1);
      }
      return `${score}/${numberOfAnswers}`;
    }
    if (taskNumber === 3) {
      if ((row === 1 && col === 3) || (row === 2 && col === 2)) {
        setScore((prevScore) => prevScore + 1);
      }
      return `${score}/${numberOfAnswers}`;
    }
    if (taskNumber === 4) {
      if (
        (row === 1 && col === 3) ||
        (row === 2 && col === 1) ||
        (row === 2 && col === 3)
      ) {
        setScore((prevScore) => prevScore + 1);
      }
      return `${score}/${numberOfAnswers}`;
    }
    if (taskNumber === 5) {
      if (row === 2 && col === 3) {
        setScore((prevScore) => prevScore + 1);
      }
      return `${score}/${numberOfAnswers}`;
    }
  };

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
          borderStyle: "solid",
          borderColor: "red",
          ...style,
        }}
        onClick={handleClick}
        disable={clicked}></div>
    );
  };
  return (
    <>
      <div>
        <img className="score-box" src={scoreBox} alt="score-box" />
        <p id="score">{`${score}/${numberOfAnswers}`}</p>
      </div>
      <GridCell
        onGridClick={() => onGridClick(1, 1)}
        style={{
          left: 3,
          height: 170.48,
          width: 290.86,
          top: 37.91,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick(1, 2)}
        style={{
          left: 298.86,
          height: 170.48,
          width: 290.86,
          top: 37.91,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick(1, 3)}
        style={{
          left: 600,
          height: 170.48,
          width: 290.86,
          top: 37.91,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick(2, 1)}
        style={{
          left: 3,
          height: 170.48,
          width: 290.86,
          top: 212.91,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick(2, 2)}
        style={{
          left: 298.86,
          height: 170.48,
          width: 290.86,
          top: 212.91,
        }}
      />
      <GridCell
        onGridClick={() => onGridClick(2, 3)}
        style={{
          left: 600,
          height: 170.48,
          width: 290.86,
          top: 212.91,
        }}
      />
    </>
  );
};

export default ClickScore;
