import React from "react";
import Pic from "../Pic";
import TextBody from "../TextBody";
import SkillBox from "../SkillBox";
import "./AboutMe.css";

export const AboutMe = props =>
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
      <SkillBox />
    </div>
  </div>;
