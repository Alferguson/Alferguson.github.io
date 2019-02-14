import React from 'react'
import PropTypes from 'prop-types';
import styles from "./Transistion.module.css";

const Transistion = ({ children }) => {
  return (
    <div className={styles.transistion}>
      {children}
    </div>
  )
}

Transistion.propTypes = {

}

export default Transistion;
