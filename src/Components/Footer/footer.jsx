import React from 'react'
import './footer.css';
import img16 from '../../Assets/img16.mp4';
import {FiChevronRight, FiSend} from 'react-icons/fi';
import { FaPlane } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";

function Footer() {
  return (
    <section className='footer'>
    <div className='videoDiv'>
      <video src={img16} loop autoPlay muted type='video/mp4'></video>
    </div>

    <div className="secContent container">
      <div className="contactDiv flex">
        <div className="text">
          <small>KEEP IN TOUCH!</small>
          <h2>Travel with us</h2>
      </div>

      <div className="inputDiv flex">
        <input type="text" placeholder='Enter Email Address'/>
        <button className='btn flex' type='submit'> SEND
          <FiSend className="icon"/>
          </button>      
          </div>
      </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="#" className='logo flex'>
            <FaPlane className="icon" />
              Harshita's Venture Voyages
            </a>
          </div>
          <div className="footerParagraph">
          We are passionate about creating unforgettable travel experiences. With years of expertise and a commitment to excellence, we tailor each journey to meet your unique preferences and needs. 
          </div>

          <div className="footerSocials">
          <FaTwitter className='icon'/>
           <FaTripadvisor className='icon'/>
          <FaInstagramSquare className='icon'/>
          <FaYoutube className='icon'/>
          </div>
        </div>

        {/* group1 */}
        <div className="footerLinks grid">
          <div className="linkGroup">
            <span className='groupTitle'>
              OUR AGENCY
            </span>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Services
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Insurance
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Agency
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Tourism
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Payment
            </li>
          </div>
       

        {/* group2 */}
        
          <div className="linkGroup">
            <span className='groupTitle'>
             PARTNERS
            </span>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
             Bookings
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              RentCars
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              HostelWorld
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Trivago
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
             TripAdvisor
            </li>
        </div>

        {/* group3 */}
          <div className="linkGroup">
            <span className='groupTitle'>
              LAST MINUTE
            </span>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              New York
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              California
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Indonesia
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Europe
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Maldives
            </li>
        </div>
        </div>

         <div className="footerDiv flex">
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small>Copyrights Reserved - TRAVELTECH 2024</small>
         </div>
      </div>
    </div>
    </section>
  )
}

export default Footer
