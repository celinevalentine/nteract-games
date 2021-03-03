import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { GameProvider } from "./components/context/GameContext";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
//
// dev-pwb5v-aq.us.auth0.com
// FUkZCqf5UcsHYWOZ0Yl3QXFii466O1Mc

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pwb5v-aq.us.auth0.com"
      clientId="FUkZCqf5UcsHYWOZ0Yl3QXFii466O1Mc"
      redirectUri={window.location.origin}>
      <GameProvider>
        <App />
      </GameProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
