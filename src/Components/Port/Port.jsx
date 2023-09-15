import React, { useContext } from 'react'
import '../Port/Port.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import chat from "../../img/chat.png"
import gifts from "../../img/gifts.png"
import port from "../../img/port.png"
import HOC from "../../img/hoc.png"
import comm from "../../img/e1.png"
import wall from "../../img/wall.png"


import { ThemeProvider,themeContext } from '../../Context'


export default function Port() {
        const them=useContext(themeContext);
        const darkMode=them.state.darkMode;
  return (
    <div className='portfolio' id='Port'>
       <span 
                     style={{color:darkMode?'white':''}}

       >Recent Projects</span>
       <span>PortFolio</span>
       <Swiper spaceBetween={10} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
        <SwiperSlide>
                <img src={gifts}></img>
        </SwiperSlide>
        <SwiperSlide>
                <img src={port}></img>
        </SwiperSlide>
        <SwiperSlide>
                <img src={chat}></img>
        </SwiperSlide>
        <SwiperSlide>
                <img src={comm}></img>
        </SwiperSlide>
        <SwiperSlide>
                <img src={wall}></img>
        </SwiperSlide>
       </Swiper>
    </div>
  )
}
