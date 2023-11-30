/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

const ResumeItem = ({icon, year, title, desc}) => {
  return (
    <div className="resume__item">
        <div className="resume__icon">{icon}</div>

        <span className='resume__date'>{year}</span>
        <h3 className="resume__subtitle">{parse(title)}</h3>
        <p className='resume__description'>{desc}</p>
    </div>
  )
}

ResumeItem.propTypes = {
  icon: PropTypes.element.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

export default ResumeItem
