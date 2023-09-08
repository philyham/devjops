import React from 'react'
import './navbar.css'
import logo from "../../images/devjobs.svg"
import menu from "../../images/bars.svg"

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <img src={logo} alt="logo" />
        <img src={menu} alt="hamburger menu" />
      </div>
    </nav>
  )
}

export default Navbar