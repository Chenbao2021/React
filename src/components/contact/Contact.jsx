import React from 'react'
import './contact.css'
import {AiOutlineMail ,AiFillFacebook,AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tb8h4yf', 'template_mmsm3wi', form.current, 'ArNPqRv3MDFWi8ABA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.481096379011!2d2.3343272153529773!3d48.86810457928846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3ae42a2f1b%3A0xacde9250508a29e!2s6%20Rue%20Rameau%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1651434171469!5m2!1sfr!2sfr"  
      height="400">
      </iframe>
      <div className='contact_options'>
          <article className='contact_option'>
            <AiFillFacebook className='contact_option-icon' />
            <h4>Messanger</h4>
            <h5>My facebook page</h5>
            <a href="https://m.me/chenbao.yu.90" target="_blank">Send a Message</a>
          </article>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name ' required></input>
            <input type="email" name='email' placeholder='Your Email' required></input>
            <textarea name="message" rows={7} placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact