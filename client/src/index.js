import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pwb5v-aq.us.auth0.com"
      clientId="FUkZCqf5UcsHYWOZ0Yl3QXFii466O1Mc"
      redirectUri={window.location.origin}
      audience="https://nteractbackend.com">
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
