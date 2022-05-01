import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../../assets/ME.png";
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello , Welcome to </h5>
            <h1>BAKERS</h1>
            <h5 className='text-light'>Boulangerie parisienne</h5>
            <CTA />
            <HeaderSocials />
            <div className='me'>
                <img src={ME} alt="me"/>
            </div>

            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header