import React, {useState, useEffect} from "react";
import "animate.css";
import "./About.css";

const about = () => {
  const textArr = [
    "I AM HIKMAH",
    "UX/UI Designer",
    "Front-End Developer",
    "Back-End Developer",
    "FullStack Designer",
    "FullStack Developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArr.length);
    }, 500);

    return () => clearInterval(interval);
  }, [textArr.length]);

  return (
    <section className="banner" id="about">
      <div class="about-title">
      <FadeInOutText text={textArr[currentIndex]} />
      </div>
    </section>
  );
};

const FadeInOutText = ({ text, currentIndex, index }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [visible]);


  return (
    <div className={`fade-in-out-text ${visible ? "visible" : "hidden"}`}>
      {text}
      <p class="about-p">Adaptable finance professional transitioning to Full Stack developer. Detail-oriented and thrive under pressure. Utilizing diverse skills, collaborative mindset, and commitment to quality for user-centric software solutions and corporate growth.</p>
    </div>
  );
};

export default about;
