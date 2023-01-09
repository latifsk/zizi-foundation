import React from "react";
import "../index.css";
import HugeTitle from "../components/hugetitle";
import Subtitle from "../components/subtitle";
import ContactItem from "../components/contact_item";
import Support from "../components/support";
import Navbar from "../components/navBarResponsive";

import { FiHeart, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

function Contact() {
  return (
    <div className="contact ">
      {/* <div className="contact__container"> */}
      <Navbar />

      <Subtitle subtitle="Contact us" />
      <HugeTitle hugetitle="We are looking forward to hearing from you" />

      <div className="contact__contactItemGroup">
        <ContactItem
          icon={
            <FiMapPin
              color={"var(--zizi-blue)"}
              size={25}
              className="contactItem__icon"
            />
          }
          title={"Address"}
          description={"12 Pike St New York, NY 10002"}
        />

        <ContactItem
          icon={
            <FiPhone
              color={"var(--zizi-blue)"}
              size={25}
              className="contactItem__icon"
            />
          }
          title={"Phone"}
          description={"12 Pike St New York, NY 10002"}
        />
      </div>

      <br />
      <br />

      <div className="contact__contactItemGroup">
        <ContactItem
          icon={
            <FiMail
              color={"var(--zizi-blue)"}
              size={25}
              className="contactItem__icon"
            />
          }
          title={"Email"}
          description={`zizifoundation           gh@gmail.com`}
        />

        <ContactItem
          icon={
            <FiHeart
              color={"var(--zizi-blue)"}
              size={25}
              className="contactItem__icon"
            />
          }
          title={"Follow Us"}
          description={
            "Twitter: zizifoundation           Instagram: Zizifoundationgh            Facebook: Zizi foundation"
          }
        />
      </div>
      <Support />
      {/* </div> */}
    </div>
  );
}

export default Contact;
