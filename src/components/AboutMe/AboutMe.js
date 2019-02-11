import React from 'react';
import styles from "./AboutMe.module.css";
import { PictureOfMe, AboutMeText } from "../AboutMe";
import PropTypes from 'prop-types'

const AboutMe = props => {
  return (
    <div className={styles.aboutMe}>
      <PictureOfMe />
      <AboutMeText />
    </div>
  )
}

AboutMe.propTypes = {

}

export default AboutMe
