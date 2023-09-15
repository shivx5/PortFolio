import React, { useContext } from 'react';
import '../Themes/Theme.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
// import {motion} from 'framer-motion';
import { ThemeProvider, themeContext } from '../../Context';


export default function Theme() 
{

  const them=useContext(themeContext);
  const darkMode=them.state.darkMode;
  
  const handleClick=()=>
  {
    them.dispatch({type:'toggle'});
  }
  
  return (
    <div className='themes'>
      <Moon/>
      <Sun/>
      <div 
      onClick={handleClick}
      style={darkMode?{left:'2px'}:{right:'2px'}}
      className='t-button'></div>
    </div>
  )
}
