import React, { useState } from 'react';
import '../NavBar/Navbar.css';
import Logo from '../../assets/furia.png';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <img className="logo" src={Logo} alt="Logo furia" />


      <div
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>


      <div className={`navbar-options ${isOpen ? 'open' : ''}`}>
        <a href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a>
        <a href="#como-usar" onClick={() => setIsOpen(false)}>Como usar</a>
      </div>
    </nav>
  );
}

export default NavBar;