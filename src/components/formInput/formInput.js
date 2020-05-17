import React, { useState } from "react";
import styles from "./formInput.module.css";

const FormInput = ({ placeholder, value, setValue, textarea = false }) => {
  const [pushLabelUp, setPushLabelUp] = useState(false);

  return (
    <div className={styles.formInputContainer}>
      {textarea ? (
        <textarea
          className={styles.formInput}
          type="input"
          value={value}
          placeholder={placeholder} // intentionally hidden to allow use of css pseudo classes
          onChange={({ target }) => setValue(target.value)}
          onClick={() => setPushLabelUp(!pushLabelUp)}
        />
      ) : (
        <input
          className={styles.formInput}
          type="input"
          value={value}
          placeholder={placeholder} // intentionally hidden to allow use of css pseudo classes
          onChange={({ target }) => setValue(target.value)}
          onClick={() => setPushLabelUp(!pushLabelUp)}
        />
      )}
      <label className={styles.formLabel}>{placeholder}</label>
    </div>
  );
};

export default FormInput;
