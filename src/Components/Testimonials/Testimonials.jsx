import React, { useContext } from 'react'
import '../Testimonials/Testimonials.css'
// import {Swiper, SwiperSlide} from 'swiper/react/swiper-react'
import  {Swiper}  from 'swiper/react';
import  {SwiperSlide} from 'swiper/react'
import 'swiper/css';
import  profile1 from '../../img/profile1.jpg';
import  profile2 from '../../img/profile2.jpg';
import  profile3 from '../../img/profile3.jpg';
import  profile4 from '../../img/profile4.jpg';
import  profile5 from '../../img/profile5.jpg';
import  profile6 from '../../img/profile6.jpg';
import { ThemeProvider,themeContext } from '../../Context'


export default function Testimonials() {
  const them=useContext(themeContext);
  const darkMode=them.state.darkMode;
        const clients=[
{ img :profile1 ,review:"Loremfknjfnanednnnfnsjdkaa" },
{ img : profile2,review:"Loremfknjfnanednnnfnsjdkaa" },
{ img : profile3,review:"Loremfknjfnanednnnfnsjdkaa" },
{ img : profile4,review:"Loremfknjfnanednnnfnsjdkaa" },
{ img : profile5,review:"Loremfknjfnanednnnfnsjdkaa" },
{ img : profile6,review:"Loremfknjfnanednnnfnsjdkaa" }]
  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className='t-heading'>
                <span>Client always get</span>
                <span> Exceptional work </span>
                <span>from me..</span>


        </div>
        <div  className="blur t-blur1" style={{background:'rgb(238 210 255)'}}></div>
        <div  className="blur t-blur2" style={{background:'#C1F5FF'}}></div>
      <Swiper slidesPerView={1}>
        {clients.map((value,index)=>
        {
                return <SwiperSlide key={index}>
                        
                        <div className='testimonials'>
                        <img src={value.img}></img>
                        <span
                        style={{color:darkMode?'black':''}}
                        >{value.review}</span>
                        </div>
                      </SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}
