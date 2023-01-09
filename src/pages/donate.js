import React from "react";
import Copyright from "../components/copyright";
import HugeTitle from "../components/hugetitle";
import Subtitle from "../components/subtitle";
import Navbar from "../components/navBarResponsive";

// import "../index.css";

function Donate() {
  return (
    <div className="donate">
        <Navbar />

      <div className="donate__container">
        <Subtitle subtitle="Donate now" />
        <HugeTitle hugetitle={"Any help is appreciated"} />

        <div className="donate__body">
          <div className="donate__left">
            <div className="donate__leftTitle">How donations work?</div>

            <div className="donate__leftDescription">
              There are various ways you can donate money to help.
              <br /> The first option is to send money to the bank account
              number below, the bank is Access Bank and the branch of the bank
              is Legon.
              <br /> The second option is through mobile money transactions. The
              transaction is made to an MTN number.
            </div>

            <div className="donate__bankAccount">Bank account</div>
            <div className="donate__accountNumber">1043000002798</div>

            <div className="donate__bankName">Bank name</div>
            <div className="donate__NameOfBank">Access Bank</div>

            <div className="donate__bankName">Branch name</div>
            <div className="donate__NameOfBank">Legon Branch</div>
          </div>

          <div className="donate__right">
            <div className="donate__bankName">
              <div>Using Mobile Money</div>
              <div className="donate__bankName">Momo Number</div>
              <div className="donate__NameOfBank">+233 (0) 247135558</div>

              <div className="donate__bankName">Momo Number Name</div>
              <div className="donate__NameOfBank">Dwumfour Abdullai</div>
            </div>
          </div>
        </div>

        <Copyright />
      </div>
    </div>
  );
}

export default Donate;
