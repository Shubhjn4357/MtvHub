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
  Autoplay,Keyboard,Scrollbar,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Keyboard,Scrollbar,Navigation]);

const VideoSwiper=(props)=>{
  return (
    <>
    <Swiper slidesPerView={1} 
            centeredSlides={true} 
            slidesPerGroupSkip={1} 
            grabCursor={true}
            autoplay={{
              "delay":2500,
              "disableOnInteraction":true,
            }}
            keyboard={{
              "enabled": true
            }} 
            scrollbar={true} 
            navigation={true} 
            
            className="mySwiper rounded my-2">
  {props.item?props.item.map((item,k)=>{
  const VideoLink="https://www.youtube.com/embed/"+item.key+"?autoplay=1";
    return <SwiperSlide key={k}>
    <iframe id="ytplayer" type="text/html" width="auto" height="100%"
                src={VideoLink}
                title={item.name}
                frameBorder="0"></iframe>
    </SwiperSlide>
}):<Err text={"No Video Available"} code={404}/>}
  </Swiper>
    </>
  )
}
export default VideoSwiper;