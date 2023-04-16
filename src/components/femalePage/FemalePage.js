import React from 'react'

import "./FemalePage.css"

import { BsChevronLeft } from "react-icons/bs";

import { useNavigate } from "react-router-dom";


function FemalePage({model}) {

    const navigate = useNavigate()
    
  return (

    <section className="container">

        <article>
          <button onClick={() => navigate(-1)}>
          <BsChevronLeft></BsChevronLeft>
          <span>BACK</span>
          </button>
        </article>


        <section key={model.id} className="slide">

        <section>

        <div>

            <h2>{model.name}</h2>

            <p>
            <span>Height </span>
            <span> {model.height} CM</span>
            </p>

            <p>
            <span>Waist </span>
            <span> {model.waist} CM</span>
            </p>

            <p>
            <span>Bust </span>
            <span> {model.bust} CM</span>
            </p>

            <p>
            <span>Hips </span>
            <span> {model.hips} CM</span>
            </p>

            <p>
            <span>Shoe </span>
            <span> {model.shoe} UK</span>
            </p>

            <p>
            <span>Dress </span>
            <span> {model.dress} UK</span>
            </p>

            <p>
            <span>Hair </span>
            <span> {model.hair}</span>
            </p>

            <p>
            <span>Eyes </span>
            <span> {model.eyes}</span>
            </p>

        </div>
        </section>

        <section>
          <img src={model.image} alt=""/>
        </section>

        </section>

    </section>
  )
}

export default FemalePage