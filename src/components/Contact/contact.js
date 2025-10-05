import React, { useRef } from 'react';
import './contact.css';
import LinkedIn from '../../assets/linkedIn.png';
import Github from '../../assets/github.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_re4z5gt', 'template_dbb5auu', form.current, 'Vue6T1n9c-GMVRQzp')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='to_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea name='message' rows='5' placeholder='Your Message' className='msg'></textarea><br/>
                <button className='btn'value='send'>Submit</button>
                <div className='links'>
                  <a 
                    href="https://www.linkedin.com/in/akanksha-ghule-2205622aa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                  <img src={LinkedIn} alt='linkedin' className='link'/>
                  </a>
                  <a 
                    href="https://github.com/akankshaghule" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                  <img src={Github} alt='github' className='link'/>
                  </a>

                    
                </div>

            </form>
        </div>
    </section>
  )
}

export default Contact