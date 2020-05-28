import React from "react";
import styles from "./hexagon.module.css";

const Hexagon = ({ children }) => {
  return (
    <div className={styles.hexagonWrapper}>
      {/* unicode for hexagon */}
      <span className={styles.hexagon}>&#11043;</span>
      <div className={styles.textInHexagon}>{children}</div>
    </div>
  );
};

export default Hexagon;
