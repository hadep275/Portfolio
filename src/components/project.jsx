import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css"
import ColorSharp from "../assets/img/color-sharp.png"
import Project2 from "../assets/img/project2.png"
import Project3 from "../assets/img/project3.png"
const project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true, // Center the active card
    centerPadding: "10px", // Space between cards
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Display 1 card at a time on smaller screens
          slidesToScroll: 1, // Display 1 card at a time on smaller screens
          infinite: true, 
          dots: true, 
          centerMode: true, // Center the active card
          centerPadding: "40px", // Adjust spacing for smaller screens
        },
      },
    ],

  };
  return (
    <div class="project">
      <div class="container">
        <h1>Projects</h1>
      </div>
      <div class="container">
      <Slider {...settings}>
        {/* <div class="row"> */}
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
        {/* </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default project;
