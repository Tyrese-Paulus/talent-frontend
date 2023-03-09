import React from 'react'
import axios from '../../axios'
import './Body.css'
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Body() {

  const [ models, setModels ] = React.useState([])

  let testAray = ['test01', 'test02']
  let test;


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
      navigation={true}
      autoplay={{
        delay: 250000,
        disableOnInteraction: false
      }}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {models.map((item) => {
        return (
            <SwiperSlide><img className='slider__image' src={item.image} alt="" /></SwiperSlide>
        )
        })}
    </Swiper>
      </div>
  )


}



export default Body

// {models.map((item) => {
//   <>
//     <SwiperSlide>{item.name}</SwiperSlide>
    
//   </>
// })}

