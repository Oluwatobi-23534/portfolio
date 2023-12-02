/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Close from "../assets/icons8-close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt=""
              className="modal__close"
              onClick={toggleModal}
            />

            <h3 className="modal__title">{title}</h3>

            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className="item__icon">{icon}</span>

                    <div>
                      <span className="item__title">{title}</span>
                      <span className="item__details">
                        {title === "Preview : " ? (
                          <a
                            href={desc}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {desc}
                          </a>
                        ) : (
                          desc
                        )}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
};

PortfolioItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default PortfolioItem;
