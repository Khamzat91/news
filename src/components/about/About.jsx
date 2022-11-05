import React from "react";
import pupkin from "../../images/pupkin.png";
import "./index.scss";


const About = () => {
  return (
    <div className="about container">
      <div className="about__inner">
        <div className="about__inner-title">Vasya Pupkin</div>
        <div className="about__inner-subtitle">Блог фронтенд-разработчика</div>
        <div className="about__inner-image">
          <img src={pupkin} alt="pupkin" />
        </div>
        <div className="about__inner-description">
          <div className="about__inner-description__title">Обо мне</div>
          <div className="about__inner-description__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
            fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
            scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis
            quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque,
            nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt
            laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet
            phasellus malesuada non nisi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
