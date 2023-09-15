import {React,useRef,useContext } from 'react'
import '../Contact/Contact.css'
import emailjs from '@emailjs/browser';
import { ThemeProvider,themeContext } from '../../Context'

export default function Contact() {
  const them=useContext(themeContext);
  const darkMode=them.state.darkMode;
        const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_37gslpc", "template_42bbmos", form.current, "iwum_kJU-gOV1O1qS")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}

  return (
    <div className='contact'>
      <div className='c-heading'>
        <span 
                      style={{color:darkMode?'white':''}}

        >Get in Touch</span>
        <span>Contact Me</span>
      </div>
      <div>
      <div className='c-form'>

        <form ref={form} onSubmit={sendEmail}>
        <input type='text' placeholder='Name' name='user_name' className='user' ></input>
        <input type='email'  placeholder='Email' name='user_email' className='user'></input>
        <textarea placeholder='Message'  className='user' name='message'></textarea>
        <input type='submit' className='button con-button' value='contact'/>
        </form>
        
      </div>
      </div>
    </div>
  )
}
