import React from "react";
import Pic from "../Pic";
import TextBody from "../TextBody";
import SkillBox from "../SkillBox";
import "./AboutMe.css";
import { nodeJsBullets, reactBullets, jsBullets, cssBullets, htmlBullets } from "../../helpers/Text";

// let skillsArr = [nodeJsBullets, reactBullets, jsBullets, cssBullets, htmlBullets];
export const AboutMe = () =>
  <div className="aboutMe">
    <div className="aboutMe__left">
      <div className="aboutMe__pic">
        <Pic src="./alfergusonPic.jpg" alt="Me" />
      </div>
      <div className="aboutMe__title">
        <h1>John Alexander Ferguson</h1>
        <div className="aboutMe--redLine"></div>
      </div>
      <div className="aboutMe__paragraph">
        <TextBody>
            adfssssssssssssssssssssssssssssssssssss adas sadasd asdas  dasfasd asdddddddddddddd asddddddddddddddas
            asdddddddddasfffff asdasd asdasd asdasd asdasd asdasd asdasda asdasda dasdsada dad aasdasd asdasd asdad asdada adsadaasd asdad ada da d ad adad ad a da da asdfffffffffffff asdasd asdas asdas da dsada asdas da asdasd a asd
        </TextBody>
      </div>    
    </div>
    <div className="aboutMe__right">
      <h1>Skills</h1>
      <div className="aboutMe--blueLine"></div>
      <SkillBox 
        src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png"
        alt="Node.js Logo"
        bulletTitle="Node.js"
        bulletsArr={nodeJsBullets} 
      />
      <SkillBox 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
        alt="React Logo"
        bulletTitle="React"
        bulletsArr={reactBullets} 
      />
      <SkillBox 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        alt="JavaScript Logo"
        bulletTitle="JavaScript"
        bulletsArr={jsBullets} 
      />
      <SkillBox 
        src="https://cdn.freebiesupply.com/logos/large/2x/css-3-logo-png-transparent.png"
        alt="CSS Logo"
        bulletTitle="CSS3"
        bulletsArr={cssBullets} 
      />
      <SkillBox 
        src="http://www.stickpng.com/assets/images/5847f5bdcef1014c0b5e489c.png"
        alt="HTML Logo"
        bulletTitle="HTML5"
        bulletsArr={htmlBullets} 
      />
    </div>
  </div>;
