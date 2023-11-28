/* eslint-disable no-unused-vars */
import React from "react";
import Profile from "../../assets/profilepic.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './Home.css'

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I`m Tobi Daniel.</span> Web Developer
          </h1>

          <p className="home__description">
            As a dedicated <span style={{ color: "red" }}>MERN</span> stack
            developer, I specialize in creating high-performance web
            applications that prioritize user experience. My passion for coding,
            combined with my in-depth knowledge of{" "}
            <span style={{ color: "blue" }}>MongoDB</span>,{" "}
            <span style={{ color: "green" }}>Express.js</span>,{" "}
            <span style={{ color: "purple" }}>React</span>, and{" "}
            <span style={{ color: "orange" }}>Node.js</span>, allows me to
            develop robust and scalable solutions. I strive to stay updated with
            the latest industry trends and advancements, ensuring that the
            applications I develop are modern and efficient. My goal is to
            create digital experiences that are not only functional and
            user-friendly, but also aesthetically pleasing.
          </p>

          <Link to='/about' className="button">
            More About Me{' '}
            <span className="button__icon">
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
