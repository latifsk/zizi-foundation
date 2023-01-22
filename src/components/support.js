import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Copyright from "./copyright";
import HugeTitle from "./hugetitle";
import Subtitle from "./subtitle";

function Support() {
  return (
    <div className="support mt-20 md:w-full">
      <div className="support__container">
        <div className="support__hr">
          <hr />
        </div>
        <Subtitle subtitle={"What now?"} />
        <HugeTitle hugetitle={"Support our mission"} />
        <div className="support__buttons">
          <Link to="/donate" className="support__donate">DONATE</Link>
          <Link to="/join_us" className="support__volunteer">VOLUNTEER</Link>
        </div>

        <Copyright />
      </div>
    </div>
  );
}

export default Support;
