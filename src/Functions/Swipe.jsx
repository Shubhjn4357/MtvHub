
import React from "react";
import Err from "../Functions/Err";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Keyboard,Scrollbar,Navigation,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Keyboard,Scrollbar,Navigation,Pagination]);


const Swipe=(props)=>{
  
  const protocol="https://"
  const url="image.tmdb.org/t/p/original/"
  
  return (
    <>
   {props.item?
    <Swiper slidesPerView={1}
            centeredSlides={false} 
            slidesPerGroupSkip={1} 
            grabCursor={true}
            autoplay={{
              "delay":2500,
              "disableOnInteraction":true,
            }}
            keyboard={{
              "enabled": true
            }} 
            breakpoints={{
                  "769": {
                    "slidesPerView": 2,
                    "slidesPerGroup": 2
                  }
            }} 
            scrollbar={true} 
            navigation={true} 
            
            className="mySwiper">
  {props.item.map((e,k)=>{
  const path=protocol+url+e.backdrop_path
    return(
    <SwiperSlide key={k}>
    <img  onClick={()=>{props.select(e)}} className="slide-img" alt="poster" src={path} />
    </SwiperSlide>)
})}
  </Swiper>:<div><Err text={"Data Not Found"} code={404}/></div>}
    </>
  )
}
export default Swipe;