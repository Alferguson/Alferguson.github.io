import React from "react";
import styles from "./orangeLine.module.css";

const OrangeLine = ({ visible }) => {
  return (
    <div className={styles.orangeLine}>
      <svg height="200" width="20">
        <defs>
          <linearGradient
            id="orange_gradient"
            x1="0"
            y1="0"
            x2="20"
            y2="0"
            gradientUnits="userSpaceOnUse"
            // gradientTransform="rotate(90)"
          >
            <stop stop-color="#9D5B10" offset="0%" />
            <stop stop-color="#ac5f13" offset="50%" />
            <stop stop-color="#9D5B10" offset="100%" />
          </linearGradient>
        </defs>

        <line
          x1="0"
          y1="0"
          x2="0"
          y2="200"
          stroke="url(#orange_gradient)"
          stroke-width="5"
        />
      </svg>
    </div>
  );
};

export default OrangeLine;
