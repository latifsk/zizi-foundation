import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Project = ({
  img,
  img1,
  img2,
  img3,
  img4,
  title,
  date,
  description,
  thePhotos,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="project h-full"
      onClick={() => {
        navigate("/project_details", {
          state: {
            img: img,
            img1: img1,
            img2: img2,
            img3: img3,
            img4: img4,
            title: title,
            date: date,
            description: description,
            thePhoto: thePhotos,
          },
        });
      }}
    >
      <div className="project__container">
        <img src={img} alt="" className="project__img" />

        <div className="project__title">{title}</div>
        <div className="project__date">{date}</div>
        <div className="project__description">{description}</div>
        <img
          src={img1}
          alt=""
          className="project__img"
          style={{ display: "none" }}
        />
        <img
          src={img2}
          alt=""
          className="project__img"
          style={{ display: "none" }}
        />
        <img
          src={img3}
          alt=""
          className="project__img"
          style={{ display: "none" }}
        />
        <img
          src={img4}
          alt=""
          className="project__img"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default Project;
