import React from "react";
import "../index.css";

function ContactItem({ icon, title, description }) {
  return (
    <div className="contactItem">
      <div className="contactItem__container">
        <div>{icon}</div>

        <div className="contactItem__deets">
          <div className="contactItem__title">{title}</div>
          <div className="contactItem__description">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
