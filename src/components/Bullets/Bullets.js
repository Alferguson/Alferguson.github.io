import React from "react";
import "./Bullets.css";

const Bullets = ({ arr }) =>
  <ul>
    {arr.map(bullet => (
      <li key={bullet}>{bullet}</li>
    ))}
  </ul>;
export default Bullets;
