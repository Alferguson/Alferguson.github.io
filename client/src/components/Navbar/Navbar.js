import React, { Component } from "react";
import Nav from "../Nav";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstnav: false, 
      secondnav: false,
      thirdnav: false,
      fourthnav: false 
    };
  }
  onClickNav = event => {
    const targetId = event.target.id;
    const regexexpand = RegExp("-expand*");
    const reg = regexexpand.test(targetId); 
    if(!reg) {
      Object.keys(this.state).forEach(nav => {
        console.log(nav);
        this.setState({ [nav]: false });
      });
      this.setState(prevState => ({
        [targetId]: !prevState[targetId]
      }));
    };
  };
	render() {
		return (
      <React.Fragment>
        <nav className={this.props.className}>
          <Nav className={this.state.firstnav ? "firstnav-expand" : "firstnav"} label="About Me" link="about-me" onClick={this.onClickNav} />
          <Nav className={this.state.secondnav ? "secondnav-expand" : "secondnav"} label="Cool Projects" link="cool-projects" onClick={this.onClickNav} />
          <Nav className={this.state.thirdnav ? "thirdnav-expand" : "thirdnav"} label="Contact Me" link="contact-me" onClick={this.onClickNav} />
          <Nav className={this.state.fourthnav ? "fourthnav-expand" : "fourthnav"} label="I dunno" link="i-dunno" onClick={this.onClickNav} />
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
  