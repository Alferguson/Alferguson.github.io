import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHover } from "../../hooks";
import Title from "../common/Title";
import ColorBar from "../common/ColorBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = props => {
  const [nav, setNav] = useState("");
  const onClick = e => {
    const { id } = e.currentTarget;
    setNav(id);
  }
  const links = new Map([
    ["aboutme", "About Me"], 
    ["skills", "SKills"], 
    ["contact", "Contact"]
  ]);
  const linksToHTML = []; 
  for (const [key, value] of links) {
    const [hoverRef, isHovered] = useHover();
    linksToHTML.push(
      <h3 key={key} id={key} ref={hoverRef} onClick={onClick} className={isHovered || nav === key
        ? styles.hover 
        : styles.link
      }>
        <Link to={`/${key}`}>{value}</Link>
      </h3>
    )
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <Title />
        <div className={styles.links}> 
          {linksToHTML}
        </div>
      </div>
      <ColorBar />
    </div>
  )
}

NavBar.propTypes = {

}

export default NavBar;