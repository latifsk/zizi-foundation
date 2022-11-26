import React from "react";
import "../index.css";
import Copyright from "./copyright";
import HugeTitle from "./hugetitle";
import Subtitle from "./subtitle";

function Support() {
  return (
    <div className="support">
      <div className="support__container">
        <div className="support__hr">
          <hr />
        </div>
        <Subtitle subtitle={"What now?"} />
        <HugeTitle hugetitle={"Support our mission"} />
        <div className="support__buttons">
          <button className="support__donate">DONATE</button>
          <button className="support__volunteer">VOLUNTEER</button>
        </div>

        <Copyright />
      </div>
    </div>
  );
}

export default Support;
