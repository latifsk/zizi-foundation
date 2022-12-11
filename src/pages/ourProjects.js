import React from "react";
import "../index.css";
import Subtitle from "../components/subtitle";
import HugeTitle from "../components/hugetitle";
import Project from "../components/project";
import kids from "../assets/bgkids.jpg";
import Support from "../components/support";
import Navibar from "../components/naviBar";

function OurProjects() {
  return (
    <div className="ourProjects">
      <div className="outProjects__container">
        <Navibar />
        <Subtitle subtitle="How we help" />
        <HugeTitle hugetitle="Current projects" />

        <div className="project__section">
          <div className="project__group">
            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et egestas est, vel aliquam enim. Nam bibendum pretium placerat. Vestibulum ante ipsum primis in faucibus orci luctus e"
              }
            />

            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et egestas est, vel aliquam enim. Nam bibendum pretium placerat. Vestibulum ante ipsum primis in faucibus orci luctus e"
              }
            />
          </div>

          <div className="project__group">
            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et egestas est, vel aliquam enim. Nam bibendum pretium placerat. Vestibulum ante ipsum primis in faucibus orci luctus e"
              }
            />

            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et egestas est, vel aliquam enim. Nam bibendum pretium placerat. Vestibulum ante ipsum primis in faucibus orci luctus e"
              }
            />
          </div>
        </div>

        {/**next row */}
        <div className="project__section">
          <div className="project__group">
            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et egestas est, vel aliquam enim. Nam bibendum pretium placerat. Vestibulum ante ipsum primis in faucibus orci luctus e"
              }
            />

            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et egestas est, vel aliquam enim. Nam bibendum pretium placerat. Vestibulum ante ipsum primis in faucibus orci luctus e"
              }
            />
          </div>

          <div className="project__group">
            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et egestas est, vel aliquam enim. Nam bibendum pretium placerat. Vestibulum ante ipsum primis in faucibus orci luctus e"
              }
            />

            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et egestas est, vel aliquam enim. Nam bibendum pretium placerat. Vestibulum ante ipsum primis in faucibus orci luctus e"
              }
            />
          </div>
        </div>

        <Support />
      </div>
    </div>
  );
}

export default OurProjects;
