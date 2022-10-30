import React from "react";
import Description from "./Description";
import Image from "./Image";
import Title from "./Title";

function SimpleCard() {
  return (
    <div className="main">
      <Image />
      <div className="inner-content">
        <Title />
        <Description />
      </div>
    </div>
  );
}

export default SimpleCard;
