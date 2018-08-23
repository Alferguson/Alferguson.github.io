import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = props =>
  <div className={props.className} onClick={props.onClick} >
    <div className="blue-box">
      <Link id={props.className} to={`/${props.link}`}>{props.label}</Link>
    </div>
  </div>;
export default Nav;
  