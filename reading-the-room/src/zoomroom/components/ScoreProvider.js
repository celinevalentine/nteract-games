import React, { useState } from "react";
import ScoreContext from "./ScoreContext";

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  let taskNumber, numberOfAnswers;
  return (
    <ScoreContext.Provider
      value={([score, setScore], taskNumber, numberOfAnswers)}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreProvider;
