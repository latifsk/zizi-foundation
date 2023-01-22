import React from "react";
import Copyright from "../components/copyright";
import HugeTitle from "../components/hugetitle";
import Subtitle from "../components/subtitle";
import Navbar from "../components/navBarResponsive";
import { Link } from "react-router-dom";

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

            <div className="flex justify-center items-center flex-col">

              <div className="donate__leftTitle">How donations work?</div>

              <div className="donate__leftDescription">
                There are various ways you can donate to help.
                The first option is to donate to the bank account
                number below.
                The second option is through mobile money.
              </div>

            </div>


</div>



        <div className="grid grid-cols-2 max-[640px]:grid-cols-1 place-items-center p-5">

          {/* bank section */}

          <div className="">
            <img className="donate__NameOfBank h-52 w-fit max-[640px]:h-64 object-contain p-5" alt="bank illustration" src={require("../assets/bank.jpg")} />

            <div>
                        {/* <div style={{color: "rgb(231, 162, 50)"}} className=" text-2xl font-bold ">Bank transfer</div> */}

                        <div className="donate__bankAccount mt-10">Bank account</div>
                        <div className="donate__accountNumber">1043000002798</div>

                        <div className="donate__bankName mt-10">Bank name</div>
                        <div className="donate__NameOfBank">Access Bank</div>

                        <div className="donate__bankName mt-10">Branch name</div>
                        <div className="donate__NameOfBank">Legon Branch</div>
            </div>

          </div>

          {/* momo */}
          <div className="h-full max-[640px]:py-10 ">

          <img className="donate__NameOfBank h-52 w-44 p-5 object-contain" alt="bank illustration" src={require("../assets/momo.png")} />


            <div className="donate__bankName h-full">
              {/* <div style={{color: "rgb(231, 162, 50)"}} className=" text-2xl font-bold ">Mobile Money</div> */}
              <div className="donate__bankName mt-10">Momo Number</div>
              <div className="donate__NameOfBank ">024 713 5558</div>

              <div className="donate__bankName mt-10">Momo Number Name</div>
              <div className="donate__NameOfBank">Dwumfour Abdullai</div>
            </div>
          </div>

        </div>




        </div>
  

        <div className="flex justify-center p-5">
          Do you have other things you would like to donate? <Link to="/contact" className="text-blue-600 pl-2 hover:cursor-pointer animate-bounce">Contact us</Link>
        </div>

        <Copyright />
      </div>
    </div>
  );
}

export default Donate;
