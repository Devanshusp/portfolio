import React from "react";
import "./App.scss";
import Taskbar from "./components/Taskbar";
import Content from "./pages/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Redirect from "./components/Redirect";
import RedirectData from "./RedirectData.json";

function App() {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  window.addEventListener("load", setVh);
  window.addEventListener("resize", setVh);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Content />} />
          <Route
            path={RedirectData[0].name}
            element={<Redirect Link={RedirectData[0].link} />}
          />
          {RedirectData.map((data, index) => {
            return (
              <Route
                key={index}
                path={data.name}
                element={<Redirect Link={data.link} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
      <Taskbar />
    </div>
  );
}

export default App;
