import React from "react";

import Contact from "./contact";
import Education from "./Education";
import Skill from "./Skills";
import Image from "./Image";
import "./Index.css";
import Name from "./Name";
import Portfolios from "./Portfolio";
export default function Biocontainer() {
  return (
    <div className="Container" >
      <div className="LeftContainer">
        <Image />
        <Contact />
        <Education />
        <Skill />
      </div>
      <div className="RightContainer">
       <Name/>
       <Portfolios/>
      </div>
      
    </div>
  );
}
