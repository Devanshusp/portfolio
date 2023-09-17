import React from "react";
import Icon from "./../components/Icon";
import MediaData from "./../MediaData.json";
import "./Content.scss";

function Content() {
  const getImage = (imgName) => {
    return require(`./../assets/images/icons/${imgName}.png`);
  };

  return (
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
  );
}

export default Content;
