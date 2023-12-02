/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_bap63vn";
    const templateId = "template_axerx56";
    const publicKey = "tqSB1OLqpguZ6VIWG";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      to_name: "Tobi Daniel",
      message: message,
    };

    // Send the mail using Emailjs

    if (name && email && subject && message) {
      setAlert({
        show: true,
        message: "Message sent successfully!",
        type: "success",
      });
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
      setTimeout(() => {
        setAlert({ show: false, message: "", type: "" });
      }, 10000);
    } else {
      setAlert({
        show: true,
        message: "Please fill out all fields.",
        type: "error",
      });
      setTimeout(() => {
        setAlert({ show: false, message: "", type: "" });
      }, 10000);
    }
  };

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

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="How may i address you?"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email..."
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                placeholder="Enter your subject..."
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message..."
              className="form__control textarea"
            ></textarea>
          </div>

          <button type="submit" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>

        {alert.show && (
          <div
            style={{
              margin: "10px 0",
              padding: "10px",
              color: alert.type === "success" ? "green" : "red",
              border: `1px solid ${alert.type === "success" ? "green" : "red"}`,
              borderRadius: "5px",
            }}
          >
            {alert.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
