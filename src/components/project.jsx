import React from "react";
import "./project.css"
import ColorSharp from "../assets/img/color-sharp.png"
import Project2 from "../assets/img/project2.png"
import Project3 from "../assets/img/project3.png"
const project = () => {
  return (
    <div class="project">
      <div class="container">
        <h1>Projects</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
              <img src={ColorSharp} />
                <p class="desc">QuantumX</p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <p class="desc">Indeygo</p>
                <img src={Project3} />
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <p class="desc">EveryChildPlays</p>
                <img src={Project2} />
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <p class="desc">InceptionGPT</p>
                <img src="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
