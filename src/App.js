import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
// import ReadingTheRoomScreen2 from "./zoomroom/components/ReadingTheRoomScreen2";
// import ReadingTheRoomScreen1 from "./zoomroom/components/ReadingTheRoomScreen1";
import ZoomCallStart from "./zoomroom/components/ZoomCallStart";
import ZoomCall1 from "./zoomroom/components/ZoomCall1";
import TableofContents from "./zoomroom/components/TableofContents";
import ZoomCall1Countdown from "./zoomroom/components/ZoomCall1Countdown";
import Task1CompleteOverlay from "./zoomroom/components/Task1CompleteOverlay";
import ZoomCall2 from "./zoomroom/components/ZoomCall2";
import ZoomCall2Countdown from "./zoomroom/components/ZoomCall2Countdown";
import Task2CompleteOverlay from "./zoomroom/components/Task2CompleteOverlay";
import ZoomCall3 from "./zoomroom/components/ZoomCall3";
import ZoomCall3Countdown from "./zoomroom/components/ZoomCall3Countdown";
import Task3CompleteOverlay from "./zoomroom/components/Task3CompleteOverlay";
import ZoomCall4 from "./zoomroom/components/ZoomCall4";
import ZoomCall4Countdown from "./zoomroom/components/ZoomCall4Countdown";
import Task4CompleteOverlay from "./zoomroom/components/Task4CompleteOverlay";
import ZoomCall5 from "./zoomroom/components/ZoomCall5";
import ZoomCall5Countdown from "./zoomroom/components/ZoomCall5Countdown";
import Task5CompleteOverlay from "./zoomroom/components/Task5CompleteOverlay";
import FailScreen from "./zoomroom/components/FailScreen";
// import zoomroomRoutes from "./routes/zoomroomRoutes";
import CoffeeChatStart from "./coffeechat/components/CoffeeChatStart";
import CoffeeChat1 from "./coffeechat/components/CoffeeChat1";
import CoffeeChat1Countdown from "./coffeechat/components/CoffeeChat1Countdown";
import CoffeeChatTask1Complete from "./coffeechat/components/CoffeeChatTask1Complete";
import CoffeeChat2 from "./coffeechat/components/CoffeeChat2";
import CoffeeChat2Countdown from "./coffeechat/components/CoffeeChat2Countdown";
import CoffeeChatTask2Complete from "./coffeechat/components/CoffeeChatTask2Complete";
import CoffeeChat3 from "./coffeechat/components/CoffeeChat3";
import CoffeeChat3Countdown from "./coffeechat/components/CoffeeChat3Countdown";
import CoffeeChatTask3Complete from "./coffeechat/components/CoffeeChatTask3Complete";
import CoffeeChat4 from "./coffeechat/components/CoffeeChat4";
import CoffeeChat4Countdown from "./coffeechat/components/CoffeeChat4Countdown";
import CoffeeChatTask4Complete from "./coffeechat/components/CoffeeChatTask4Complete";
import CoffeeChat5 from "./coffeechat/components/CoffeeChat5";
import CoffeeChat5Countdown from "./coffeechat/components/CoffeeChat5Countdown";
import CoffeeChatTask5Complete from "./coffeechat/components/CoffeeChatTask5Complete";

function App({ taskNumber = [] }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/readingtheroom">
          <TableofContents />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks">
          <ZoomCallStart />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/1/page/1">
          <ZoomCall1 />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/1/page/2">
          <ZoomCall1Countdown />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/1/page/3">
          <Task1CompleteOverlay />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/2/page/1">
          <ZoomCall2 />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/2/page/2">
          <ZoomCall2Countdown />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/2/page/3">
          <Task2CompleteOverlay />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/3/page/1">
          <ZoomCall3 />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/3/page/2">
          <ZoomCall3Countdown />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/3/page/3">
          <Task3CompleteOverlay />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/4/page/1">
          <ZoomCall4 />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/4/page/2">
          <ZoomCall4Countdown />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/4/page/3">
          <Task4CompleteOverlay />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/5/page/1">
          <ZoomCall5 />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/5/page/2">
          <ZoomCall5Countdown />
        </Route>
        <Route exact path="/readingtheroom/zoomroom/tasks/5/page/3">
          <Task5CompleteOverlay />
        </Route>
        <Route exact path="/timesup/:gameName/:taskNumber">
          <FailScreen taskNumber={taskNumber} prompt={prompt} />
        </Route>
        {/* <Route exact path="/readingtheroom/screen/1">
          <ReadingTheRoomScreen1 />
        </Route>
        <Route exact path="/readingtheroom/screen/2">
          <ReadingTheRoomScreen2 />
        </Route> */}
        <Route exact path="/readingtheroom/coffeechat/tasks">
          <CoffeeChatStart />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/1/page/1">
          <CoffeeChat1 />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/1/page/2">
          <CoffeeChat1Countdown />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/1/page/3">
          <CoffeeChatTask1Complete />
        </Route>

        <Route exact path="/readingtheroom/coffeechat/tasks/2/page/1">
          <CoffeeChat2 />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/2/page/2">
          <CoffeeChat2Countdown />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/2/page/3">
          <CoffeeChatTask2Complete />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/3/page/1">
          <CoffeeChat3 />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/3/page/2">
          <CoffeeChat3Countdown />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/3/page/3">
          <CoffeeChatTask3Complete />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/4/page/1">
          <CoffeeChat4 />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/4/page/2">
          <CoffeeChat4Countdown />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/4/page/3">
          <CoffeeChatTask4Complete />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/5/page/1">
          <CoffeeChat5 />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/5/page/2">
          <CoffeeChat5Countdown />
        </Route>
        <Route exact path="/readingtheroom/coffeechat/tasks/5/page/3">
          <CoffeeChatTask5Complete />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
