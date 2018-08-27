import React from "react";
import "./Pic.css";

const Pic = ({ className, src, alt }) =>
	<React.Fragment>
    <img className={className} src={src === "./alfergusonPic.jpg" ? require("./alfergusonPic.jpg") : src} alt={alt} />
	</React.Fragment>;
export default Pic;
