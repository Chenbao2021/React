import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiWechat} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="/" target="_blank"><BsLinkedin/></a>
        <a href="/" target="_blank"><FaGithub/></a>
        <a href="/" target="_blank"><SiWechat/></a>
    </div>
  )
}

export default HeaderSocials