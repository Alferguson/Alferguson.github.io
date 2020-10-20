import React from "react";
import styles from "./submit.module.css";

const Submit = ({ text }) => {
  return (
    <button className={styles.submitBtn} type="submit">
      <h4>{text}</h4>
    </button>
  );
};

export default Submit;
