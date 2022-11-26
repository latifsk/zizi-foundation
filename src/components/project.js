import React from "react";
import "../index.css";

function Project({ img, title, date, description }) {
  return (
    <div className="project">
      <div className="project__container">
        <img src={img} alt="" className="project__img" />

        <div className="project__title">{title}</div>
        <div className="project__date">{date}</div>
        <div className="project__description">{description}</div>
      </div>
    </div>
  );
}

export default Project;
