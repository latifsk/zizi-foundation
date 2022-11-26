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
                "four words when i think about them is crusty, musty, dusty, rusty; 8 words when i think about you fuck me fuck me fuck me fuck me"
              }
            />

            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "four words when i think about them is crusty, musty, dusty, rusty; 8 words when i think about you fuck me fuck me fuck me fuck me"
              }
            />
          </div>

          <div className="project__group">
            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "four words when i think about them is crusty, musty, dusty, rusty; 8 words when i think about you fuck me fuck me fuck me fuck me"
              }
            />

            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "four words when i think about them is crusty, musty, dusty, rusty; 8 words when i think about you fuck me fuck me fuck me fuck me"
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
                "four words when i think about them is crusty, musty, dusty, rusty; 8 words when i think about you fuck me fuck me fuck me fuck me"
              }
            />

            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "four words when i think about them is crusty, musty, dusty, rusty; 8 words when i think about you fuck me fuck me fuck me fuck me"
              }
            />
          </div>

          <div className="project__group">
            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "four words when i think about them is crusty, musty, dusty, rusty; 8 words when i think about you fuck me fuck me fuck me fuck me"
              }
            />

            <Project
              img={kids}
              title="New wells and clear water project"
              date={"11/23/2022"}
              description={
                "four words when i think about them is crusty, musty, dusty, rusty; 8 words when i think about you fuck me fuck me fuck me fuck me"
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
