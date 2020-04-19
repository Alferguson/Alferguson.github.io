import React from "react";
import "./TextBody.css";

const TextBody = ({ className, children }) =>
  <div className={className}>
    <p className="textBody left">
      {children}
    </p>
  </div>;
export default TextBody;