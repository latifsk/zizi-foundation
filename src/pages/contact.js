import React from "react";
import "../index.css";
import HugeTitle from "../components/hugetitle";
import Subtitle from "../components/subtitle";
import ContactItem from "../components/contact_item";
import Support from "../components/support";
import Navibar from "../components/naviBar";
import { FiHeart, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <Navibar />
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

          <ContactItem
            icon={
              <FiMail
                color={"var(--zizi-blue)"}
                size={25}
                className="contactItem__icon"
              />
            }
            title={"Email"}
            description={"12 Pike St New York, NY 10002"}
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
            description={"12 Pike St New York, NY 10002"}
          />
        </div>
        <Support />
      </div>
    </div>
  );
}

export default Contact;
