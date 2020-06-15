import React from "react";
import styles from "./orangeLine.module.css";

const OrangeLine = ({ visible }) => {
  return (
    <div className={styles.orangeLine}>
      <svg height="400" width="2">
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="400"
          stroke="#ac5f13"
          stroke-width="100%"
        />
      </svg>
    </div>
  );
};

export default OrangeLine;
