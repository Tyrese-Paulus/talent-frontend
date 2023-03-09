import React from 'react'
import axios from '../../axios'
import './Body.css'
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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

      <div className="slider__container">
        <Swiper
        style={{marginTop: 30}}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        navigation={{
          nextEl: ".next__button",
          prevEl: ".previous__button"
        }}
        autoplay={{
          delay: 250000,
          disableOnInteraction: false
       }}
        loop={true}
    >
      {models.map((item) => {
        return (
            <SwiperSlide><img className='slider__image' src={item.image} alt="" /></SwiperSlide>
        )
        })}
    </Swiper>
    <BsChevronLeft className='previous__button'></BsChevronLeft>
    <BsChevronRight className='next__button'></BsChevronRight>
    </div>
    
  )


}



export default Body

