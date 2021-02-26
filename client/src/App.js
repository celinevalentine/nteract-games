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

function App() {
  return (
    <AuthWrapper>
      <div className="container">
        <Router>
          <Switch>
            <Route path="/reading-the-room/games/:gameId/tasks/:taskNumber/page/:pageNumber">
              <TaskPage />
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
            <Route exact path="/timesup/games/:gameId/tasks/:taskNumber">
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
