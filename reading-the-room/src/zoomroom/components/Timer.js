import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Timer = () => {
  const [grid11, setGrid11] = useState("");
  const [grid12, setGrid12] = useState("");
  const [grid13, setGrid13] = useState("");
  const [grid21, setGrid21] = useState("");
  const [grid22, setGrid22] = useState("");
  const [grid23, setGrid23] = useState("");

  const [timer, setTimer] = useState(10);
  const [score, setScore] = useState(0);
  const history = useHistory();
  useEffect(() => {
    let interval = setInterval(() => {
      if (timer > 0) {
        setTimer((timer) => timer - 1);
      } else {
        clearInterval(interval);
        history.push("/readingtheroom/zoomroom/tasks/1/page/3");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, history]);
  // const clickHandler11 = () => {
  //   console.log("11clicked");
  // };
  // const clickHandler12 = () => {
  //   console.log("12licked");
  // };
  // const clickHandler13 = () => {
  //   console.log("13licked");
  // };
  // const clickHandler21 = () => {
  //   console.log("21clicked");
  // };
  // const clickHandler22 = () => {
  //   console.log("22licked");
  // };
  // const clickHandler23 = () => {
  //   console.log("23licked");
  // };

  const grid11Clicked = () => {
    setGrid11("clicked");
  };
  const grid12Clicked = () => {
    setGrid12("clicked");
  };
  const grid13Clicked = () => {
    setGrid13("clicked");
  };
  const grid21Clicked = () => {
    setGrid21("clicked");
  };
  const grid22Clicked = () => {
    setGrid22("clicked");
  };
  const grid23Clicked = () => {
    setGrid23("clicked");
  };
  const updateScore = () => {
    if (grid12 || grid21 || grid23 === "clicked") {
      setScore((prevScore) => prevScore + 1);
    }
    console.log(score);
    return `${score}/5`;
  };

  return (
    <>
      <div className="countdown">{timer}</div>
      <div id="score">{updateScore}</div>
      <div
        onClick={grid11Clicked}
        style={{
          position: "absolute",
          border: 1,
          borderColor: "red",
          left: 3,
          height: 170.48,
          width: 290.86,
          top: 37.91,
          zIndex: 10,
          borderStyle: "solid",
        }}></div>
      <div
        onClick={grid12Clicked}
        style={{
          position: "absolute",
          border: 1,
          borderColor: "red",
          left: 293.86,
          height: 170.48,
          width: 290.86,
          top: 37.91,
          zIndex: 10,
          borderStyle: "solid",
        }}></div>
      <div
        onClick={grid13Clicked}
        style={{
          position: "absolute",
          border: 1,
          borderColor: "red",
          right: 2,
          height: 170.48,
          width: 290.86,
          top: 37.91,
          zIndex: 10,
          borderStyle: "solid",
        }}></div>
      <div
        onClick={grid21Clicked}
        style={{
          position: "absolute",
          border: 1,
          borderColor: "red",
          left: 3,
          height: 170.48,
          width: 290.86,
          top: 212.91,
          zIndex: 10,
          borderStyle: "solid",
        }}></div>
      <div
        onClick={grid22Clicked}
        style={{
          position: "absolute",
          border: 1,
          borderColor: "red",
          left: 293.86,
          height: 170.48,
          width: 290.86,
          top: 212.91,
          zIndex: 10,
          borderStyle: "solid",
        }}></div>
      <div
        onClick={grid23Clicked}
        style={{
          position: "absolute",
          border: 1,
          borderColor: "red",
          right: 2,
          height: 170.48,
          width: 290.86,
          top: 212.91,
          zIndex: 10,
          borderStyle: "solid",
        }}></div>
    </>
  );
};

export default Timer;
