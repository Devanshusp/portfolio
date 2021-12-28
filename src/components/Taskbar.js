import React, { useState, useEffect } from "react";
import "./Taskbar.scss";
import MediaData from "../MediaData.json";

function Taskbar() {
  const [time, setTime] = useState(currentTime());
  const [logo, setLogo] = useState(MediaData[0][0].fullName);

  function currentTime() {
    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    let ampm = hours < 12 ? "AM" : "PM";
    if (parseInt(hours, 10) === 0) {
      hours = "12";
    } else if (parseInt(hours, 10) > 12) {
      hours = (parseInt(hours, 10) - 12).toString();
    }
    if (parseInt(min, 10) < 10) {
      min = "0" + min;
    }
    return hours + ":" + min + " " + ampm;
  }

  setInterval(() => {
    setTime(currentTime());
  }, 1000);

  useEffect(() => {
    if (window.innerWidth < 470) {
      setLogo(MediaData[0][0].name);
    } else {
      setLogo(MediaData[0][0].fullName);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 470) {
      setLogo(MediaData[0][0].name);
    } else {
      setLogo(MediaData[0][0].fullName);
    }
  });

  return (
    <div className="taskbar">
      <button className="logo-button">{logo}</button>
      <div className="time">{time}</div>
    </div>
  );
}

export default Taskbar;
