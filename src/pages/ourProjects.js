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
import edufare1 from "../assets/project_images/dep1.jpg";
import less1 from "../assets/project_images/less1.jpg";
import less2 from "../assets/project_images/less2.JPG";
import less3 from "../assets/project_images/less3.jpg";
import less4 from "../assets/project_images/less4.jpg";
import clothe1 from "../assets/project_images/clothe1.jpg";
import clothe2 from "../assets/project_images/clothe2.jpg";
import clothe3 from "../assets/project_images/clothe3.jpg";
import clothe4 from "../assets/project_images/clothe4.jpg";
import edufare2 from "../assets/project_images/dep2.jpg";
import edufare3 from "../assets/project_images/dep3.jpg";
import edufare4 from "../assets/project_images/dep1.jpg";
import ramafest1 from "../assets/project_images/ramafest1.jpg";
import ramafest2 from "../assets/project_images/ramafest2.jpg";
import ramafest3 from "../assets/project_images/ramafest3.jpg";
import ramafest4 from "../assets/project_images/ramafest4.jpg";
import kidsdayout1 from "../assets/project_images/kidsdayout1.jpg";
import kidsdayout2 from "../assets/project_images/kidsdayout2.jpg";
import kidsdayout3 from "../assets/project_images/kidsdayout3.jpg";
import kidsdayout4 from "../assets/project_images/kidsdayout4.jpg";
import feed1 from "../assets/project_images/feed1.jpg";
import feed2 from "../assets/project_images/feed2.jpg";
import feed3 from "../assets/project_images/feed3.jpg";
import feed4 from "../assets/project_images/feed4.jpg";

import Support from "../components/support";
import Navbar from "../components/navBarResponsive";


function OurProjects() {
  return (
    <div className="ourProjects">
        
        {/* navbar */}
        <Navbar />


      <div className="outProjects__container">
        


        <Subtitle subtitle="How we help" />
        <HugeTitle hugetitle="Past events" />

        <div
          id="progrid"
          className="project__section  place-items-center grid gap-10 sm:grid-cols-2 lg:grid-cols-4 p-10"
        >
          <Project
            img={less_privileged}
            title="Reaching out to the less privileged"
            date={"November, 2020"}
            description={
              "On this fateful occasion, the CEO in collaboration with Zizifoundation donated to an orphanage home(Echoing Hill Village) at Madina."
            }
            thePhotos={less_privileged}
            img1={less1}
            img2={less2}
            img3={less3}
            img4={less4}
          />

          <Project
            img={group}
            title="Clothing the orphans"
            date={"June, 2021"}
            description={
              "This event was slated by the Zizi foundation to reach out and donate clothes and footwears to the orphanage."
            }
            img1={clothe1}
            img2={clothe2}
            img4={clothe4}
            img3={clothe3}
          />
          <Project
            img={gifts}
            title="RamaFest"
            date={"April, 2022"}
            description={
              "Zizifoundation believes that giving/ sharing a little we have with the society would help to bring a positive change."
            }
            img2={ramafest2}
            img3={ramafest3}
            img4={ramafest4}
            img1={ramafest1}
          />

          <Project
            img={kids}
            title="Kids day out at the orphanage"
            date={"September, 2022"}
            description={
              "Zizifoundation in collaboration with PiquantByhysher, took this enviable gesture to another level, occasioned by a picnic organized for the kids at the orphanage."
            }
            img1={kidsdayout1}
            img4={kidsdayout4}
            img3={kidsdayout3}
            img2={kidsdayout2}
          />
        </div>

        {/**Current Projects row */}
        <div className="support__hr">
          <hr />
        </div>

        {/*future projects */}
        {/* <div id="progrid" className=" grid grid-cols-2 gap-5 sm:grid-cols-1 p-10"> */}

        <div className="ourProjects__currentAndFuture">
          <div>
            <Subtitle subtitle="How we are helping" />
            <HugeTitle hugetitle={"Current Projects"} />
            <div className="project__section">
              <div className="project__group">
                <Project
                  img={helping_street_kids}
                  title="Feed the street children"
                  date={"November, 2022"}
                  description={
                    "This was a food fare organized to commemorate the birthday of the founder and CEO of zizifoundation. The event was aimed at reaching out to the street children to share various kinds of food and drinks with them on the street of Madina, a suburb of Accra. The foundation also took the opportunity to interact and inspired young folks, giving them hopes and some encouragements."
                  }
                  img1={feed1}
                  img2={feed2}
                  img3={feed3}
                  img4={feed4}
                />
              </div>
            </div>
          </div>

          <div>
            <Subtitle subtitle="How we will help change the future" />
            <HugeTitle hugetitle={"Future Projects"} />
            <div className="project__section">
              <div className="project__group">
                <Project
                  img={edufare}
                  title="EduFare"
                  date={"January, 2023"}
                  description={
                    "Education is surely the key to every nation’s development. Education is one of the core mandates of Zizifoundation. The foundation seeks to empower the youth in leadership, entrepreneurship, and technology through various educational programs. EduFare is one of the educational programs slated by zizifoundation, which is aimed at identifying and supporting various schools in deprived communities with teaching and learning materials. As an advocate of education, we believe these numerous supports would go a long way to bring positive change in education."
                  }
                  img1={edufare1}
                  img2={edufare2}
                  img3={edufare3}
                  img4={edufare4}
                />
              </div>
            </div>
          </div>
        </div>

        <Support />
      </div>
    </div>
  );
}

export default OurProjects;
