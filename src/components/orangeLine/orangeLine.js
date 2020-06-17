import React from "react";
import styles from "./orangeLine.module.css";

const OrangeLine = ({ visible, x1, y1, x2, y2 }) => {
  return (
    <div className={styles.orangeLine}>
      <svg width="0" height="400">
        <defs>
          <filter
            id="orange-glow"
            filterUnits="userSpaceOnUse"
            x="-1"
            y="-5"
            width="100"
            height="500">
            <feColorMatrix
              type="matrix"
              result="color"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
            />
            <feGaussianBlur in="color" stdDeviation="2" result="blur" />
            <feOffset in="blur" dx="0" dy="0" result="offset" />
            <feMerge>
              <feMergeNode in="bg"></feMergeNode>
              <feMergeNode in="offset"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>

        {/* <rect
          x="0"
          y="0"
          width="3"
          height="100%"
          opacity="80%"
          fill="#AD6014"
          filter="url(#orange-glow)"
        /> */}
      </svg>
    </div>
  );
};

export default OrangeLine;
