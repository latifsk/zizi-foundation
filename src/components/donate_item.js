import React from "react";
import "../index.css";

function DonateItem({ cash, title, description }) {
  return (
    <div className="donateItem">
      <div className="donateItem__container">
        <div className="donateItem__cash">GH₵{cash}</div>
        <div className="donateItem__title">{title}</div>
        <div className="donateItem__description">{description}</div>
      </div>
    </div>
  );
}

export default DonateItem;
