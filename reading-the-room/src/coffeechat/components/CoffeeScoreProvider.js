import React, { useState } from "react";
import ScoreContext from "../../zoomroom/components/ScoreContext";

const CoffeeScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={[score, setScore]}>
      {children}
    </ScoreContext.Provider>
  );
};

export default CoffeeScoreProvider;
