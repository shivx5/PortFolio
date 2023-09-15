import React, { useContext } from 'react'
import '../Works/Work.css'
import upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import Amazon from '../../img/amazon.png'
import {motion} from 'framer-motion';
import { ThemeProvider,themeContext } from '../../Context'
import resume from '../../fonts/Resume.pdf'

export default function Work() {
        const them=useContext(themeContext);
        const darkMode=them.state.darkMode;
  return (
    <div className='work'>
       <div className="s-left">
        <span 
              style={{color:darkMode?'white':''}}

        >Work for all these</span>
        <span>Brands & Clients</span>
        <span>I had an Internship of 6 Months in virtusa ..<br/>
         Though ,I have an knowledge about Working of FullStack Application <br/>with Reach js and SpringBoot<br/>
         I Worked with console applications using Java and C..<br/>
         
        </span>
        <a href={resume} download>
         <button className='s-button button'>Download cv</button>
         </a>
        <div  className="blur w-blur" style={{background:'#C1F5FF',top:'63rem',width:'21rem',height:'11rem',left:'-7rem'}}></div>
        {/* <div  className="blur" style={{background:'var(--purple)',top:'54rem',left:'45rem',filter:'blur(70px)'}}></div> */}

      </div>
       <div className='w-right'>
        <motion.div 
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5,type:'spring'}}
        className="w-main-circle">
                <div className="w-sec-circle">
                        <img src={upwork}></img>
                </div>
                <div className="w-sec-circle">
                        <img src={Fiverr}></img>
                </div>
                <div className="w-sec-circle">
                        <img src={Amazon}></img>
                </div>
                <div className="w-sec-circle">
                        <img src={Facebook}></img>
                </div>
                <div className="w-sec-circle">
                        <img src={Shopify}></img>
                </div>
                
                {/* <div  className="blur" style={{background:'#C1F5FF',top:'15rem',width:'21rem',height:'11rem',left:'-50rem'}}></div> */}


        </motion.div>
        <div className='w-circle yellowcircle'></div>
                <div className='w-circle bluecircle'></div>
       </div>
    </div>
  )
}
