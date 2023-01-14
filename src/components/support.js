import React from "react";
import "../index.css";
import Copyright from "./copyright";
import HugeTitle from "./hugetitle";
import Subtitle from "./subtitle";

function Support() {
  return (
    <div className="support mt-20 md:bottom-0 md:absolute md:w-full">
      <div className="support__container">
        <div className="support__hr">
          <hr />
        </div>
        <Subtitle subtitle={"What now?"} />
        <HugeTitle hugetitle={"Support our mission"} />
        <div className="support__buttons">
          <a href="/donate" className="support__donate">DONATE</a>
          <a href="/join_us" className="support__volunteer">VOLUNTEER</a>
        </div>

        <Copyright />
      </div>
    </div>
  );
}

export default Support;
