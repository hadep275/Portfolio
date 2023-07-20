import React from "react";
import "./education.css";
import mruLogo from "../assets/img/mruLogo.png";
import inceptionU from "../assets/img/inceptionU.png";
import SATCLogo from "../assets/img/SATCLogo.png";

const Education = () => {
  return (
    <div class="education">
      <div class="education-group">
        <img src={mruLogo} />
        <p class="education-p">Mount Royal University</p>
      </div>
      <div class="education-group">
        {" "}
        <img src={inceptionU} />
        <p class="education-p">InceptionU</p>
      </div>
      <div class="education-group">
        {" "}
        <img src={SATCLogo} />
        <p class="education-p">SPRINGBANK AIR TRAINING COLLEGE</p>
      </div>
    </div>
  );
};

export default Education;
