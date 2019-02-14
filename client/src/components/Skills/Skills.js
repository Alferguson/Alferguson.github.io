import React from 'react'
import PropTypes from 'prop-types';
import styles from "./Skills.module.css";
import { skillsText } from "./skillsText";

const Skills = props => {
  return (
    <>
    {Object.entries(skillsText).map( (arr, i) => (
      <div className={styles.skills} key={arr[0]}>
        <div style={{ margin: "20px" }} className="left">
          {i % 2 === 0 ? (
            <ul>
              {arr[1].desc.map( des => (<li><p key={des}>{des}</p></li>))}
            </ul>
          ) : ( 
            <div className={styles.pictureText}>
              <h2>{arr[0]}</h2>
              <img className={styles.pic} src={arr[1].pic} alt="dymanic" />
            </div>          )}
        </div>
        <div style={{ margin: "20px" }} className="right">
          {i % 2 === 0 ? (
            <div className={styles.pictureText}>
              <h2>{arr[0]}</h2>
              <img className={styles.pic} src={arr[1].pic} alt="dymanic" />
            </div>
          ) : (
            <ul>
              {arr[1].desc.map( des => (<li><p key={des}>{des}</p></li>))}
            </ul>
          )}
        </div>
      </div>
    ))}
    </>
  )
}

Skills.propTypes = {

}

export default Skills
