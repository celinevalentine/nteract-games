import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/screens/Home";
import Games from "./components/screens/Games";
import TaskPage from "./components/screens/TaskPage";
import Intro from "./components/screens/Intro";
import Error from "./components/screens/Error";
import Login from "./components/screens/Login";
import PrivateRoute from "./components/screens/PrivateRoute";
import AuthWrapper from "./components/screens/AuthWrapper";
import FailScreen from "./components/screens/FailScreen";
import StartGame from "./components/screens/StartGame";

function App() {
  return (
    <AuthWrapper>
      <div className="container">
        <Router>
          <Switch>
            <Route path="/reading-the-room/games/:gameId/tasks/:taskNumber/page/:pageNumber">
              {/* <TaskPage /> */}
              <StartGame />
            </Route>
            <Route exact path="/reading-the-room/games">
              <Games />
            </Route>
            <Route path="/reading-the-room/intro">
              <Intro />
            </Route>
            <PrivateRoute path="/" exact={true}>
              <Home />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/timesup/:gameId/:taskNumber">
              <FailScreen />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthWrapper>
  );
}

export default App;
