import React from 'react'
import PropTypes from 'prop-types';
import { useHover } from "../../hooks";
import Title from "../common/Title";
import ColorBar from "../common/ColorBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = props => {
  const [hoverRef, isHovered] = useHover();


  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <Title />
        <div className={styles.links}> 
          <h3 ref={hoverRef}>{isHovered ? "hi" : "bye"}</h3>
          <h3><Link to="/projects">Projects</Link></h3>
          <h3><Link to="/contactme">Contact Me</Link></h3>
        </div>
      </div>
      <ColorBar />
    </div>
  )
}
{/* <Link to="/aboutme">About Me</Link> */}
NavBar.propTypes = {

}

export default NavBar
