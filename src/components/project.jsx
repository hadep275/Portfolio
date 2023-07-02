import React from "react";
import "./project.css";
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
                <p class="desc">QuantumX</p>
                <img src="" />
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <p class="desc">Indeygo</p>
                <img src="" />
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <p class="desc">EveryChildPlays</p>
                <img src="" />
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
