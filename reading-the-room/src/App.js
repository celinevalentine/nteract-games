// import React from 'react';
// // import { BrowserRouter, Route } from 'react-router-dom';
// // import ReadingRoom from './components/ReadingRoom';
// // import TableOfContents from './components/TableOfContents';
// // import './App.scss';
// // import InPersonSubMenu from './components/InPersonSubMenu';
// import ZoomCallStart from './components/ZoomCallStart';
import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import ZoomCallStart from "./components/ZoomCallStart";
import ReadingTheRoomScreen2 from "./components/ReadingTheRoomScreen2";

function App() {
  return (
    <Switch>
      <Route>
        <ZoomCallStart
          exact
          path="/zoomcall"
          blackBackground="https://anima-uploads.s3.amazonaws.com/projects/6003e04639d5c52e06ea2e80/releases/60053d04bfff9c509e845d01/img/black-background@1x.png"
          event="https://anima-uploads.s3.amazonaws.com/projects/6003e04639d5c52e06ea2e80/releases/60053d04bfff9c509e845d01/img/event@1x.png"
          prompt="https://anima-uploads.s3.amazonaws.com/projects/6003e04639d5c52e06ea2e80/releases/60053d04bfff9c509e845d01/img/prompt@1x.png"
        />
      </Route>
      <Route>
        <ReadingTheRoomScreen2
          exact
          path="/readingtheroom"
          text1={
            <>
              In this game, your goal is to complete <br />5 different tasks
              before the timer
              <br />
              runs out.
            </>
          }
          readingTheRoom="Reading The Room"
          back1Props={ReadingTheRoomScreen2Data.back1Props}
          backgroundObjectChair4Props={
            ReadingTheRoomScreen2Data.backgroundObjectChair4Props
          }
          group36Props={ReadingTheRoomScreen2Data.group36Props}
        />
      </Route>
    </Switch>
  );
}
const back1Data = {
  back1:
    "https://anima-uploads.s3.amazonaws.com/projects/6003e04639d5c52e06ea2e80/releases/6003e9639e5628e11dc9bb9f/img/back-1@2x.png",
};

const chairData = {
  chair: "",
};

const backgroundObjectChair4Data = {
  chairProps: chairData,
};

const group36Data = {
  ellipse1: "",
  ellipse2: "",
};

const ReadingTheRoomScreen2Data = {
  back1Props: back1Data,
  backgroundObjectChair4Props: backgroundObjectChair4Data,
  group36Props: group36Data,
};
export default App;
