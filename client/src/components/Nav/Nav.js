import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = props =>
  <div className={props.className} onClick={props.onClick} >
    <div className="black-box">
      <Link id={props.className} to={`/${props.link}`} style={{ textDecoration: "none", color: "#00A5CF" }}><h1>{props.label}</h1></Link>
    </div>
  </div>;
export default Nav;
  