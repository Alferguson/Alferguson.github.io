import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from "./Header.module.css";

const Header = props => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles["Header"]}>
      hey
    </div>
  )
}

Header.propTypes = {

}

export default Header
