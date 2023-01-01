import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Project = ({ img, title, date, description, key }) => {
  const navigate = useNavigate();
  // const handleNavigate = () => {

  // };
  return (
    <div
      className="project"
      onClick={() => {
        navigate("/project_details", {
          state: {
            img: img,
            title: title,
            date: date,
            description: description,
          },
        });
      }}
    >
      <div className="project__container">
        <img src={img} alt="" className="project__img" />
        <div className="project__title">{title}</div>
        <div className="project__date">{date}</div>
        <div className="project__description">{description}</div>
      </div>
    </div>
  );
};

export default Project;
