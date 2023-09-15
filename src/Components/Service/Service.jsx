import {React,useContext} from 'react'
import '../Service/Service.css'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import resume from '../../fonts/Resume.pdf'
import {motion} from 'framer-motion';
import { ThemeProvider,themeContext } from '../../Context'

import Card from '../Cards/Card'
export default function Service() {
  const them=useContext(themeContext);
  const darkMode=them.state.darkMode;
  const transition={duration:1,type:'spring'};


  return (
    <div className='service' id='Service'>
      <div className="s-left">
        <span
        style={{color:darkMode?'white':''}}
        >My Awesome</span>
        <span>services</span>
        <span>I m here to implement the skill i have developed to enhance our Growths</span>
        <a href={resume} download> <button className='s-button button'>Download cv</button></a>
        <div  className="blur s-blur1 " style={{background:'#C1F5FF',top:'63rem',width:'21rem',height:'11rem',left:'-7rem'}}></div>
        {/* <div  className="blur s-blur2" style={{background:'var(--purple)',top:'54rem',left:'40rem',filter:'blur(70px)'}}></div> */}

      </div>

      <div className="s-right">
        <div  className='Cards'>

        <motion.div   
       initial={{left:'23rem'}}
       whileInView={{left:'18rem'}}
       transition={transition}
        style={{left:'17rem'}}>
        <Card image={heartemoji} text={"Design"} text1={"Figma,Photoshop"}/>
        </motion.div>

        <motion.div 
        initial={{top:'-4rem'}}
        whileInView={{top:'8rem',left:'1rem'}}
        transition={transition}
        style={{top:'13rem'}}>
        <Card image={glasses} text={"Developer"} text1={"Html,Css,Javascript"} text2={"Reactjs,Springboot"}/>
        </motion.div>

        <motion.div 
        initial={{left:'23rem'}}
        whileInView={{left:'16rem'}}
        transition={transition}
        style={{top:'19rem',left:'16rem'}}>
        <Card image={humble} text={"UI/UX"} text1={"Mother of Language"}/>
        </motion.div>
        </div>


      </div>
    </div>
  )
}
