import React from 'react'
import "./MalePage.css"
import { BsChevronLeft } from "react-icons/bs";
import {   useNavigate,useOutletContext } from "react-router-dom";


function MalePage({model}) {
    const navigate = useNavigate()

  return (
    <div className="container">
        <div className="top__bar">

        <button className="back__button" onClick={() => navigate(-1)}>
        <BsChevronLeft className='back__pointer'></BsChevronLeft>
        <span className="back">BACK</span>
        </button>

        </div>


        <div key={model.id} className="swiper__slide">
        <div className="model__summary">
        <div className="model__info">

            <span className="model__name">{model.name}</span>
            
            <span className="model__details">
            <span className="stat__label">Height </span>
            <span className="stat__value"> {model.height} CM</span>
            <br />
            </span>

            <span className="model__details">
            <span className="stat__label">Waist </span>
            <span className="stat__value"> {model.waist} CM</span>
            </span>

            <span className="model__details">
            <span className="stat__label">Chest </span>
            <span className="stat__value"> {model.chest} CM</span>
            </span>

            <span className="model__details">
            <span className="stat__label">Shoe </span>
            <span className="stat__value"> {model.shoe} UK</span>
            </span>

            <span className="model__details">
            <span className="stat__label">Hair </span>
            <span className="stat__value"> {model.hair}</span>
            </span>

            <span className="model__details">
            <span className="stat__label">Eyes </span>
            <span className="stat__value"> {model.eyes}</span>
            </span>

        </div>
        </div>
        <div className="model__cover">
        <img src={model.image} alt="" className="model__image"/>
        </div>
        </div>
    </div>
  )
}

export default MalePage