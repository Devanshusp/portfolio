import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import RedirectData from "./RedirectData.json";

const RedirectTo = ({ to }) => {
  window.location.href = to;
  return null;
};

const pathname = window.location.pathname;
const isRedirectPath = RedirectData.some((item) => item.name === pathname);

ReactDOM.render(
  <React.StrictMode>
    {isRedirectPath ? (
      <RedirectTo
        to={RedirectData.find((item) => item.name === pathname).link}
      />
    ) : (
      <App />
    )}
  </React.StrictMode>,
  document.getElementById("root")
);
