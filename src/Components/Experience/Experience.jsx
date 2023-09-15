import React, { useContext } from 'react';
import '../Experience/Experience.css'
import { ThemeProvider, themeContext } from '../../Context';

export default function Experience() {
  
  const them=useContext(themeContext);
  const darkMode=them.state.darkMode;
  return (
    <div className='experience' id='Experience'>
      <div className='acheivement'>
        <div         style={{color:darkMode?'black':''}}
 className='circle'>6+</div>
        <span>Months</span>
        <span>Experience</span>
      </div>
      <div className='acheivement'>
        <div         style={{color:darkMode?'black':''}}
 className='circle'>5+</div>
        <span>Completed</span>
        <span>Projects</span>
      </div>
      <div className='acheivement'>
        <div         style={{color:darkMode?'black':''}}
 className='circle self'>1+</div>
        <span>Companies</span>
        <span>Work</span>

      </div>
    </div>
  )
}
