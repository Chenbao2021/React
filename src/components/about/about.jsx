import React from 'react'
import './about.css'
import ME from '../../assets/bakers.jpg'
import {FaAward , FaUsers} from 'react-icons/fa'


const About = () => {
  return (
    <section id="about"> 
        <h5>Get to know</h5>
        <h2>About us</h2>

        <div className='container about_container'>
            <div className='about_me'>
                <div className='about_me-image'>
                    <img src={ME} alter="About Image" />
                </div>
            </div>

            <div className='about_content'>
                <div className='about_cards'>
                    <article className='about_card'>
                        <FaAward className='about_icon'/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>
                    <article className='about_card'>
                        <FaUsers className='about_icon'/>
                        <h5>Clients</h5>
                        <small>100 Pains/jour</small>
                    </article> 
                    
                </div>
                <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias et commodi eveniet numquam esse expedita, ipsam vitae, modi, illum doloremque voluptas. Et vero dolorem quisquam vitae atque nemo. Aliquam, illum.
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk </a>
            </div>
        </div>
    </section>
  )
}

export default About