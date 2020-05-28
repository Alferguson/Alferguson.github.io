import React from "react";
import Hexagon from "../hexagon";
import styles from "./submit.module.css";

const Submit = ({ text }) => {
  return (
    <Hexagon>
      <button className={styles.submitBtn} type="submit">
        {text}
      </button>
    </Hexagon>
  );
};

export default Submit;
