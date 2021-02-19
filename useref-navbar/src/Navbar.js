import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaBlogger, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import Links from './Links'
import logo from './logo.svg'
import SocialLinks from './SocialLinks'

const Navbar = () => {
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={ logo } alt="logo" />
        <button className="nav-toggle">
          <FaBars />
        </button>
      </div>

      <Links links={ links } />

      <SocialLinks social={ social } />
    </div>
  </nav>
}

export default Navbar
