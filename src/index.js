import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="capslocktechnologies-login.us.auth0.com"
    clientId="iBFH3yDop0yU7fJ6sOLr167xfP6VVASy"
    redirectUri={window.location.origin}
    audience="https://capslocktechnologies-login.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);