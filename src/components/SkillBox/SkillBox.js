import React, { Component } from "react";
import Pic from "../Pic";
import LineArrow from "../LineArrow";
import Bullets from "../Bullets";
import "./SkillBox.css";

class SkillBox extends Component {
  state = {
    expand: false
  };
  onLineArrowClick = () => {
    this.setState(prev => ({ expand: !prev.expand }));
  };
  render() {
    const { expand } = this.state;
    const { src, alt, bulletTitle, bulletsArr } = this.props;
    return ( 
      <div className={expand ? "skillBox--expand" : "skillBox"}>
        <Pic className="skillBox__logo" src={src} alt={alt} />
        <div className="skillBox__title">{bulletTitle}</div>
        <div className="skillBox__lineArrow" onClick={this.onLineArrowClick}>
          <LineArrow className={expand ? "lineArrow--fold" : "lineArrow"} />
        </div>
        <div className={expand ? "skillBox__bullet" : "skillBox__bullet--hidden"}>
          <Bullets arr={bulletsArr} />
        </div>
      </div>
    );
  }
}
export default SkillBox;