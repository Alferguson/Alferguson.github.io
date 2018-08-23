import React, { Component } from "react";
import Pic from "../Pic";
import "./RoundBox.css";

class RoundBox extends Component {
  state = {
    expand: false
  };
  onRoundBoxClick = () => {
    this.setState(prev => ({ expand: !prev.expand }));
  };
  render() {
    const { expand } = this.state;
    return ( 
      <div className={expand ? "round expand" : "round"}>
        <Pic className="logo" src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png" alt="Node.js Logo" />
        <div className="roundBoxText">Node.JS</div>
        <div className="collapsable">
          <button type="button" onClick={this.onRoundBoxClick}>
            <i className={expand ? "gear gear-rotate fas fa-cog" : "gear fas fa-cog"}></i>
            <svg height="100%" width="100%">
              <circle cx="50%" cy="50%" r="16" stroke="black" strokeWidth="2" fillOpacity="0" />
              <line x1="74.5%" y1="50%" x2="74.5%" y2="100%" stroke="black" strokeWidth="2" />
            </svg> 
          </button>
        </div>
        <div id="bullet" className={expand ? "bullet" : "hidden"}>bullet</div>
        <div id="line" className="lineCollapsable">
          <svg className={expand ? "line line-expand" : "line"} width="100%">
            <line x1="74.5%" y1="0" x2="74.5%" y2="100%" stroke="black" strokeWidth="2" />
          </svg> 
        </div>
      </div>
    );
  }
}
export default RoundBox;