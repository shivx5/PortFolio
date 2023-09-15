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
      <a href='https://www.instagram.com/sivh.x/' target='_blank'>
        <Insta size='3rem' color='white'/>
      </a>
        <a href='https://www.facebook.com/profile.php?id=100017045201500' target='_blank'>
          <Facebook size='3rem' color='white'/>
          </a>
        
        
        <a href='https://github.com/shivx5' target='_blank'>
          <Github size='3rem' color='white'/>
        </a>                     

      </div>
      </div>
    </div>
  )
}
