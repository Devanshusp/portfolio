import React from "react";
import "./Icon.scss";
import ShortcutArrow from "../assets/images/shortcut-arrow.png";

function Icon(props) {
  return (
    <div className="icon">
      <a className="link" href={props.link} target="_blank" rel="noreferrer">
        <img className="icon-img" src={props.img} alt={props.title} />
        {props.shortcut && (
          <img
            className="shortcut-img"
            src={ShortcutArrow}
            alt="shortcut icon"
          />
        )}
      </a>
      <p className="icon-label">{props.title}</p>
    </div>
  );
}

export default Icon;
