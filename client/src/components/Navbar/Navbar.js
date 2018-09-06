import React, { Component } from "react";
import Nav from "../Nav";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
    <h1>heyo</h1>
    )
  }
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     firstnav: false, 
  //     secondnav: false,
  //     thirdnav: false,
  //     fourthnav: false 
  //   };
  // }
  // onClickNav = event => {
  //   const targetId = event.target.id;
  //   const regexexpand = RegExp("--expand*");
  //   const reg = regexexpand.test(targetId); 
  //   if(!reg) {
  //     Object.keys(this.state).forEach(nav => {
  //       this.setState({ [nav]: false });
  //     });
  //     this.setState(prevState => ({
  //       [targetId]: !prevState[targetId]
  //     }));
  //   }
  // };
  // render() {
  //   return (
  //     <React.Fragment>
  //       <nav className={this.props.className}>
  //         <Nav className={this.state.firstnav ? "navbar__first--expand" : "navbar__first"} label="About Me" link="about-me" onClick={this.onClickNav} />
  //         <Nav className={this.state.secondnav ? "navbar__second--expand" : "navbar__second"} label="Cool Projects" link="cool-projects" onClick={this.onClickNav} />
  //         <Nav className={this.state.thirdnav ? "navbar__third--expand" : "navbar__third"} label="Contact Me" link="contact-me" onClick={this.onClickNav} />
  //         <Nav className={this.state.fourthnav ? "navbar__fourth--expand" : "navbar__fourth"} label="I dunno" link="i-dunno" onClick={this.onClickNav} />
  //       </nav>
  //     </React.Fragment>
  //   );
  // }
}
export default Navbar;