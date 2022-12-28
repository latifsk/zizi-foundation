import React from "react";
import "../index.css";
import Subtitle from "../components/subtitle";
import HugeTitle from "../components/hugetitle";

import Project from "../components/project";
import less_privileged from "../assets/less_privileged.jpg";
import group from "../assets/group_zizi.jpg";
import gifts from "../assets/gift.jpg";
import kids from "../assets/day_out.jpg";
import helping_street_kids from "../assets/helping_street_kids.jpg";
import edufare from "../assets/edufare.jpg";

import Support from "../components/support";
import Navibar from "../components/naviBar";




function OurProjects() {
  return (
    <div className="ourProjects">
      <div className="outProjects__container">
        <Navibar />
        <Subtitle subtitle="How we help" />
        <HugeTitle hugetitle="Past events" />

        <div id="progrid" className="project__section  place-items-center grid sm:grid-cols-2 lg:grid-cols-4 p-10">

          <Project
              img={less_privileged}
              title="Reaching out to the less privileged"
              date={"11/23/2022"}
              description={
                "This project was embarked on during the birthday of the CEO. On this fateful occasion, the CEO in collaboration with Zizifoundation donated to an orphanage home(Echoing Hill Village) at Madina. This gesture was intended to share the birthday moment with the less privileged."
              }
            />

            <Project
              img={group}
              title="Clothing the orphans"
              date={"11/23/2022"}
              description={

                "This event was slated by the Zizi foundation to reach out and donate clothes and footwears to the orphanage. These clothes were mainly funded by the foundation with some support from members of the foundation."

              }
            />

            <Project
              img={gifts}
              title="RamaFest"
              date={"11/23/2022"}
              description={

            "This event was organized by the Zizifoundation during the holy month of Ramadan. Zizifoundation believes that giving/ sharing a little we have with the society would help to bring a positive change. On this favorable occasion, zizifoundation make a courtesy call on the Madina central mosques to share food stuffs such as Milk, Milo, bread, Sugar, and some fruits with the Muslim community."

              }
            />

            <Project
              img={kids}
              title="Kids day out at the orphanage"
              date={"11/23/2022"}
              description={

              "Zizifoundation believes in putting smiles on the faces of the less privileged. Zizifoundation in collaboration with PiquantByhysher, took this enviable gesture to another level, occasioned by a picnic organized for the kids at the orphanage. The event also included a donation of educational materials and some clothes for the kids."

              }
            /> 
        </div>

        {/**Current Projects row */}
        <div className="support__hr">
          <hr />
        </div>
        <Subtitle subtitle="How we are helping" />
        <HugeTitle hugetitle={"Current Projects"} />
        <div className="project__section">
          <div className="project__group">

            <Project
              img={helping_street_kids}
              title="Feed the street children"
              date={"11/23/2022"}
              description={
                "This was a food fare organized to commemorate the birthday of the founder and CEO of zizifoundation. The event was aimed at reaching out to the street children to share various kinds of food and drinks with them on the street of Madina, a suburb of Accra. The foundation also took the opportunity to interact and inspired young folks, giving them hopes and some encouragements."

              }
            />
          </div>
        </div>

        {/**next row */}
        <div className="support__hr">
          <hr />
        </div>
        <Subtitle subtitle="How we will help change the future" />
        <HugeTitle hugetitle={"Future Projects"} />
        <div className="project__section">
          <div className="project__group">
            <Project

              img={edufare}
              title="EduFare"
              date={"11/23/2022"}
              description={
                "Education is surely the key to every nation’s development. Education is one of the core mandates of Zizifoundation. The foundation seeks to empower the youth in leadership, entrepreneurship, and technology through various educational programs. EduFare is one of the educational programs slated by zizifoundation, which is aimed at identifying and supporting various schools in deprived communities with teaching and learning materials. As an advocate of education, we believe these numerous supports would go a long way to bring positive change in education."

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
