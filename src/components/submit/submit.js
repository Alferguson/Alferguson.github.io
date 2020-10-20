import React from "react";
import ZuneSquare from "../zuneSquare";
import styles from "./submit.module.css";

const Submit = () => {
  return (
    <button className={styles.submitBtn} type="submit">
      <ZuneSquare>submit</ZuneSquare>
    </button>
  );
};

export default Submit;
