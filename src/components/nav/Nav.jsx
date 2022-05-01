import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri' 
import {AiFillMessage} from 'react-icons/ai'

import { useState } from 'react'

const Nav = () => {
    const [activeNav,setActiveNav]=useState('#');
  return (
    <nav>
        <Link to="/"  onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><FaHome /></Link>
        <Link to="/about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><BiUserCircle /></Link>
        <Link to="/produit"  onClick={()=>setActiveNav('#experience') } className={activeNav==='#experience'?'active':''}><BiBookAlt /></Link>
        <Link to="/testimonials"  onClick={()=>setActiveNav('#testimonials') } className={activeNav==='#testimonials'?'active':''}><RiServiceLine /></Link>
        <Link to="/contact"  onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><AiFillMessage /></Link>

    </nav>
  )
}

export default Nav