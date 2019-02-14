import React from 'react'
import PropTypes from 'prop-types';
import styles from "./Contact.module.css";

const Contact = props => {
  return (
    <p className={styles.contact}>
      Want to contact me? Email me 
      at <a href="mailto:alferguson@berkeley.edu" rel="noopener noreferrer" target="_blank">alferguson@berkeley.edu</a> or hit me up 
      on <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/johnalexanderferguson/">LinkedIn</a>. 
    </p>
  )
}

Contact.propTypes = {

}

export default Contact
