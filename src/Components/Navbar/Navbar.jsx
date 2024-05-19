import React, { useState } from 'react';
import { FaPlane } from 'react-icons/fa'; 
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import './navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <section className='navbarSection'>
      <header className='navbar grid'>
        <div className='logo'>
          <a href='#' className='logo-link flex'>
            <FaPlane className="icon" />
            <h1>Harshita's Venture Voyages.</h1>
          </a>
        </div>

        <div className='toggleNavbar' onClick={toggleNavbar}>
          <TbGridDots />
        </div>

        <div className={`navBar ${showNavbar ? 'show' : ''}`}>
          <div className="navCard">
            <div className='closeNavbar' onClick={toggleNavbar}>
              <IoMdCloseCircle className="icon"/>
            </div>
            <ul className='navLists grid'>
              <li className='navItem'>
                <a href="#" className='navLink'>Home</a>
              </li>
              <li className='navItem'>
                <a href="#" className='navLink'>Packages</a>
              </li>
              <li className='navItem'>
                <a href="#" className='navLink'>Shop</a>
              </li>
              <li className='navItem'>
                <a href="#" className='navLink'>About</a>
              </li>
              <li className='navItem'>
                <a href="#" className='navLink'>Pages</a>
              </li>
              <li className='navItem'>
                <a href="#" className='navLink'>News</a>
              </li>
              <li className='navItem'>
                <a href="#" className='navLink'>Contact</a>
              </li>
            </ul>
            <button className='btn'>
              <a href="#">BOOK NOW</a>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
