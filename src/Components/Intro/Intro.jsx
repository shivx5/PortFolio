import React, { useContext } from 'react'
import '../Intro/Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Insta from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import Floadingdiv from '../FloatingDIv/Floadingdiv';
import purpleblur from '../../img/purpleblur.png';
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'
import { ThemeProvider, themeContext } from '../../Context';
export default function Intro() 
{
        const them=useContext(themeContext);
        const darkMode=them.state.darkMode;
  const transition={duration:2,type:'spring'};
  return (
        <div className="intro">
                <div className="i-left">
                        <div className="i-name">
                   <span
                   style={{color:darkMode?'white':''}}
                   >Hy! I AM</span>
                   <span>Shiva Ram</span>
                   <span>Frontend Developer with the high level of experience in webDesigning and development,producing the quality work</span>
                        </div>
                    <Link to='Contact' spy={true} smooth={true}><button className='button i-button'>Hire me</button></Link>
                    
                    <div className="i-icons">
                        <a href='https://github.com/shivx5' target='_blank'><img src={Github}></img></a>                     
                        <a href='https://www.linkedin.com/in/siva-raman-shiva' target='_blank'><img src={Linkedin}></img></a>
                        <a href='https://www.instagram.com/sivh.x/' target='_blank'><img src={Insta}></img></a>
                    </div>
                </div>

                <div className="i-right">
                        <img className='v1' src={Vector1}></img>
                        <img className='v2' src={Vector2}></img>
                        <img className='boy' src={boy}></img>

                        <motion.img
                        initial={{left:'-36%'}}
                        whileInView={{left:'-24%'}}
                        transition={transition}
                        src={glassesimoji} />

                        <motion.div initial={{top:'-4%',left:"74%"}}
                        whileInView={{left:"68%"}}
                        transition={transition}
                        className='floatingdiv'
                         style={{top:'-4%',left:'60%'}}>
                                <Floadingdiv Image={crown} text1={"web"} text2={"Developer"}/>
                        </motion.div>


                        <motion.div 
                        initial={{left:'-5rem',top:'18rem'}}
                        whileInView={{left:'-1rem'}}
                        transition={transition}
                        className='floatingdiv'
                        style={{top:'17rem',left:'1%'}}>
                          
                         <Floadingdiv Image={thumbup} text1={"BestDesign"} text2={"Award"}/>
                         </motion.div>
                         <div  className="blur i-blur" style={{background:'rgb(238 210 255)'}}></div>
                         <div  className="blur i-blur" style={{background:'#C1F5FF',top:'16rem',width:'21rem',height:'11rem',left:'-7rem'}}></div>

                </div>
        </div>
  )
}
