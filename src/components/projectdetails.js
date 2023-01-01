import React from "react";
import { useLocation } from "react-router-dom";
import { Parallax } from "react-parallax";
import "../index.css";
import Support from "../components/support";

function ProjectDetails() {
  const location = useLocation();
  console.log("location", location);
  return (
    <div>
      <div>
        <Parallax
          bgImage={location.state.img}
          bgImageAlt="the cat"
          strength={100}
          className="projectDetails__image"
        ></Parallax>
      </div>

      <div className="projectDetails__title">{location.state.title}</div>
      <div className="projectDetails__date">{location.state.date}</div>
      <div className="projectDetails__description">
        {location.state.description}
      </div>
      <Support />
    </div>
  );
}

export default ProjectDetails;
