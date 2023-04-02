import React from 'react'
import axios from '../../axios'

import './Body.css'
import 'swiper/css';

import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";


function Body() {

  const [ models, setModels ] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get("talents");
      setModels(request.data);
      }
      fetchData()
  }, [])

  return (

      <section className="slider">
        <Swiper
        style={{marginTop: 30}}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        navigation={{
          nextEl: ".slider__right",
          prevEl: ".slider__left"
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
       }}
        loop={true}
    >
      {models.map((item) => {
        return (
            <SwiperSlide key={item.id}><img src={item.image} alt="" /></SwiperSlide>
        )
        })}
    </Swiper>
    <BsChevronLeft className='slider__left'></BsChevronLeft>
    <BsChevronRight className='slider__right'></BsChevronRight>
    </section>
    
  )


}



export default Body

