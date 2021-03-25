import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthWrapper, Login, PrivateRoute } from "./components";
import {
  Games,
  FailScreen,
  Intro,
  Error,
  TaskPage,
  Home,
} from "./components/screens";
import { GameProvider } from "./components/context/GameContext";

function App() {
  return (
    <AuthWrapper>
      <div className="container">
        <GameProvider>
          <Router>
            <Switch>
              <PrivateRoute path="/reading-the-room/games/:gameId/tasks/:taskNumber/page/:pageNumber">
                <TaskPage />
              </PrivateRoute>

              <PrivateRoute exact path="/reading-the-room/games">
                <Games />
              </PrivateRoute>
              <PrivateRoute path="/reading-the-room/intro">
                <Intro />
              </PrivateRoute>
              <PrivateRoute path="/" exact={true}>
                <Home />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute
                exact
                path="/timesup/games/:gameId/tasks/:taskNumber">
                <FailScreen />
              </PrivateRoute>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </Router>
        </GameProvider>
      </div>
    </AuthWrapper>
  );
}

export default App;
