/* eslint-disable no-unused-vars */
import React from "react";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3>Don&apos;t Be Shy!</h3>

          <p className="contact__description">
            Got a project in mind? Let&apos;s transform your vision into
            reality. Reach out now, and let&apos;s create something amazing
            together!
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">oluwatobi23534@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+234 916 283 7696</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://web.facebook.com/profile.php?id=100079655786398"
              className="contact__social-link"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/bigmanvaibz"
              className="contact__social-link"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/bigmanvaibz/"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="How may i address you?"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Enter your email..."
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Enter your subject..."
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Enter your message..."
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
