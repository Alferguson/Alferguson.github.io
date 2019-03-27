import React from 'react'
import PropTypes from 'prop-types';
import pic from "../../assets/PictureOfMeAlex.jpg";
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