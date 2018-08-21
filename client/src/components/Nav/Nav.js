import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = props =>
  <div className={props.className} onClick={props.onClick} >
    <div id={props.className} className="blue-box">
      <Link to={`/${props.link}`}>{props.label}</Link>
    </div>
  </div>;
export default Nav;
  