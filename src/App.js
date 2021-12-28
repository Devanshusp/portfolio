import React from "react";
import "./App.scss";
import Taskbar from "./components/Taskbar";
import Icon from "./components/Icon";
import MediaData from "./MediaData.json";

function App() {
  const getImage = (imgName) => {
    return require(`./assets/images/icons/${imgName}.png`);
  };

  return (
    <div className="App">
      <div className="content">
        {MediaData[1].map((data) => {
          return (
            <Icon
              key={data.title}
              title={data.title}
              link={data.link}
              img={getImage(data.imgTitle)}
              shortcut={data.shortcut}
            />
          );
        })}
      </div>
      <Taskbar />
    </div>
  );
}

export default App;
