import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from "./ColorBar.module.css";

const ColorBar = props => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles["colorBar"]}>
      rug
    </div>
  )
}

ColorBar.propTypes = {

}

export default ColorBar
