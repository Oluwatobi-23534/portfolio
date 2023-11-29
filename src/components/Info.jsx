/* eslint-disable no-unused-vars */
import React from 'react'
import {  personalInfo } from '../data'

const Info = () => {
  return (
    <>
    {personalInfo.map(({title, description}, index) => {
        return (
            <li className="info__item" key={index}>
                <span className="into__title">{title}</span>
                <span className='info__description'>{description}</span>
            </li>
        )
    })}
    </>
  )
}

export default Info