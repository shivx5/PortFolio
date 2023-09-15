import React, { useContext } from 'react'
import '../FloatingDIv/Floatingdiv.css'
import { ThemeProvider,themeContext } from '../../Context'
export default function Floadingdiv(pros) {

  const them=useContext(themeContext);
  const darkMode=them.state.darkMode;
  return (
    <div className='floatingdiv'>
      <img src={pros.Image}></img>
      <span
      style={{color:darkMode?'black':''}}
      >
        {pros.text1} <br/> {pros.text2}
      </span>
    </div>
  )
}
