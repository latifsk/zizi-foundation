import React from "react";
import "../index.css";
import HugeTitle from "../components/hugetitle";
import Subtitle from "../components/subtitle";
import Support from "../components/support";
import Navbar from "../components/navBarResponsive";

import { FiMail, FiTwitter, FiPhone, FiInstagram } from "react-icons/fi";

function Contact() {
  return (
    <div className="contact  ">
      <Navbar />

      <Subtitle subtitle="Contact us" />
      <HugeTitle hugetitle="We are looking forward to hearing from you" />


      <div className="px-10">
      <div className="grid grid-cols-3 lg:grid-cols-4 p-10 w-full place-content-center lg:place-items-center gap-10 max-[640px]:grid-cols-1 sm:grid-cols-1 sm:place-items-center md:grid-cols-3 ">
       
        <div className="flex justify-start items-center">
          <FiMail size={30} color={"rgb(231, 162, 50)"} />
          <div className="pl-5 ">zizifoundationgh@gmail.com</div>
        </div>

        <div className="flex justify-start items-center">
          <FiPhone size={30} color={"rgb(231, 162, 50)"} />
          <div className="pl-5 ">024 713 5558</div>
        </div>
        
        <div className="flex  justify-start items-center">
          <FiInstagram size={30} color={"rgb(231, 162, 50)"} />
          <div className="pl-5 ">@Zizifoundationgh</div>
        </div>

        <div className="flex justify-start  items-center">
          <FiTwitter size={30} color={"rgb(231, 162, 50)"} />
          <div className="pl-5 ">zizifoundation</div>
        </div>

        

      </div>

      </div>

      <Support />
    </div>
  );
}

export default Contact;
