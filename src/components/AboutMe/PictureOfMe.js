import React from 'react'
import PropTypes from 'prop-types';
import pic from "./jermany_pic.jpg";
import styles from "./PictureOfMe.module.css";

export const PictureOfMe = props => {
  return (
    <div className={styles.imgShrink}>
      <img src={pic} alt="Me" />
    </div>
  )
}

PictureOfMe.propTypes = {

}