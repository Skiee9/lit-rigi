import React from 'react'
import '../styles/Navbar.css'
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
    
    <div className="navbar-logo"> 
    <img src={logo} alt="Logo" className="logo" />
    </div>
   
  </nav>
    </>
  )
}

export default Navbar
