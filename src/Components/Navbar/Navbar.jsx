import React from 'react'
import './Navbar.css'
import Theme from '../Themes/Theme'
import {Link} from 'react-scroll'

export  function Navbar() {
  return (
    <div className='n-wrapper' id='Navbar'>

        <div className="n-left">
            
            <div className="n-name">
                  Shiv
            </div>
             <Theme/>
        </div>
        <div className="n-right">

                <div className="n-list">
                        <ul>
                                <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                                <li>Home</li>
                                </Link>
                                <Link spy={true} to='Service' smooth={true} >
                                <li>Services</li>
                                </Link> <Link spy={true} to='Experience' smooth={true} >
                                <li>Experience</li>
                                </Link> <Link spy={true} to='Port' smooth={true} >
                                <li>Portfolio</li>
                                </Link> <Link spy={true} to='Testimonials' smooth={true} >
                                <li>Testimonials</li>
                                </Link>
                        </ul>
                </div>
                <button className="button n-button">
                        contact 
                </button>

        </div>
      
    </div>
  )
}
