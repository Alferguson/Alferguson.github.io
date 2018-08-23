import React from "react";
import "./Pic.css";

const Pic = ({ className, src, alt }) =>
	<React.Fragment>
		{/* <img src={require("./alfergusonPic.jpg")} alt="Me" /> */}
    <img className={className} src={src} alt={alt} />
	</React.Fragment>;
export default Pic;
// className="circleImg" 