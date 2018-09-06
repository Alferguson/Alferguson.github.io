import React from "react";
import "./LineArrow.css";

const LineArrow = ({ className }) =>
  // TODO: fix up small click window
  <div className={className}>
    <span className="lineArrow__leftline"></span>
    <span className="lineArrow__rightline"></span>
  </div>;
export default LineArrow;
