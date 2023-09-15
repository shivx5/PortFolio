import React from 'react'
import '../Footer/Footer.css'
import wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import Github from '@iconscout/react-unicons/icons/uil-github';

export default function Footer() {
  return (
    <div className='footer'>
      <img src={wave} style={{width:'100%'}}></img>
      <div className='f-content'>
      <span>shivaramanrajendiran@gmail.com</span>
      <div className='f-icons'>
        <Insta size='3rem' color='white'/>
        <Facebook size='3rem' color='white'/>
        <Github size='3rem' color='white'/>
      </div>
      </div>
    </div>
  )
}
