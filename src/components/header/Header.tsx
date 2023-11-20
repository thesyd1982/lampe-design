import React from 'react'
import './header.scss'

import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import Hero from '../hero/Hero'
import Navbar from '../navbar/Navbar'

function Header() {
  return (
    <div className='header'>
        <Navbar/>
        <Hero></Hero>
    </div>
  )
}

export default Header