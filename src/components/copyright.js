import React from "react";
import "../index.css";
import { FaRegCopyright } from "react-icons/fa";

function Copyright() {
  return (
    <div className="copyright">
      <div className="copyright__container">
        <div className="copyright__statement">
          <FaRegCopyright size={12} style={{ marginRight: "5px" }} /> 2022 Zizi
          Foundation | All rights reserved.
        </div>
        <div className="copyright__poweredBy">
          Powered by <a href="#EskayTorsu">ExT</a>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
