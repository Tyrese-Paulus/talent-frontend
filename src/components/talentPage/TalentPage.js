import React from 'react'
import './TalentPage.css'
import {   useNavigate,useOutletContext } from "react-router-dom";
import axios from '../../axios'
import { useParams } from "react-router-dom";
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

function TalentPage() {

  const [ model, setModel ] = React.useState({})
  const [ talentId, setTalentId ] = useOutletContext();
  const routeParams = useParams();
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`talents/${routeParams.id}`);
      setModel(request.data);
      console.log(model);
      }
      fetchData()
  }, [])

  return (
    <div className="slider__container">

      <div className="top__bar">

        <button className="back__button" onClick={() => navigate(-1)}>
          <BsChevronLeft className='back__pointer'></BsChevronLeft>
          <span className="back">BACK</span>
        </button>
        
        <button className="right__of__bar">PORTFOLIO</button>
      </div>

    <Swiper
        style={{marginTop: 30}}
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        navigation={{
          nextEl: ".next__button",
          prevEl: ".previous__button"
        }}
          loop={true}
      >
      <SwiperSlide key={model.id} className="swiper__slide">
        <div className="model__summary">
          <div className="model__info">

            <span className="model__name">{model.name}</span>
            
            <span className="model__details">
              <span className="stat__label">Height </span>
              <span className="stat__value"> {model.height}</span>
              <br />
            </span>

            <span className="model__details">
              <span className="stat__label">Bust </span>
              <span className="stat__value"> {model.bust}</span>
            </span>

            <span className="model__details">
              <span className="stat__label">Waist </span>
              <span className="stat__value"> {model.waist}</span>
            </span>

            <span className="model__details">
              <span className="stat__label">Hips </span>
              <span className="stat__value"> {model.hips}</span>
            </span>

            <span className="model__details">
              <span className="stat__label">Shoe </span>
              <span className="stat__value"> {model.shoe}</span>
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
      </SwiperSlide>
    </Swiper>
    <BsChevronLeft className='previous__button'></BsChevronLeft>
    <BsChevronRight className='next__button'></BsChevronRight>
  </div>

  )

}

export default TalentPage