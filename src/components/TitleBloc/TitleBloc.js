import React from "react";
import "./TitleBloc.scss";

const TitleBloc = ({ title, text }) => {
  return (
    <div className="title-wrapper">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default TitleBloc;
