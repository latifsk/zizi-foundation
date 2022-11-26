import React from "react";
import Copyright from "../components/copyright";
import DonateItem from "../components/donate_item";
import HugeTitle from "../components/hugetitle";
import Subtitle from "../components/subtitle";
import Navibar from "../components/naviBar";
import "../index.css";

function Donate() {
  return (
    <div className="donate">
      <div className="donate__container">
        <Navibar />
        <Subtitle subtitle="Donate now" />
        <HugeTitle hugetitle={"Any help is appreciated"} />

        <div className="donate__body">
          <div className="donate__left">
            <div className="donate__leftTitle">How donations work?</div>

            <div className="donate__leftDescription">
              This is where your text starts. You can click here and start
              typing. Totam rem aperiam eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo
              nemo enim.
            </div>

            <div className="donate__bankAccount">Bank account</div>
            <div className="donate__accountNumber">012 3456789</div>

            <div className="donate__bankName">Bank name</div>
            <div className="donate__NameOfBank">Inter Bank</div>
          </div>

          <div className="donate__right">
            <div>
              <DonateItem
                cash={10}
                title={"DONATE TO 1 PROJECT"}
                description={
                  "Voluptatem accusantium doloremque laudantium totam."
                }
              />

              <DonateItem
                cash={100}
                title={"DONATE TO 10 PROJECT"}
                description={
                  "Voluptatem accusantium doloremque laudantium totam."
                }
              />
            </div>

            <div>
              <DonateItem
                cash={60}
                title={"DONATE TO 6 PROJECT"}
                description={
                  "Voluptatem accusantium doloremque laudantium totam."
                }
              />

              <DonateItem
                cash={600}
                title={"DONATE TO 10 PROJECT"}
                description={
                  "Voluptatem accusantium doloremque laudantium totam."
                }
              />
            </div>
          </div>
        </div>

        <Copyright />
      </div>
    </div>
  );
}

export default Donate;
