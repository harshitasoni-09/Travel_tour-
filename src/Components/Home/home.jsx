import React, {useEffect} from 'react';
import './home.css';
import video from '../../Assets/img15.mp4';
import { FaLocationDot } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'> </div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContentContainer">
        <div className='textDiv'>
          <span className='smallText'>
            Our Packages
          </span>

          <h1 className='homeTitle'>Search your Holiday</h1>
        </div>

        <div className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor='city'>Search your destination:</label>
              <div className="input flex">
                <input type="text" placeholder='Enter name here....'/>
                <FaLocationDot className="icon" />
              </div>
            </div>
         

            <div className="dateInput">
              <label htmlFor='date'>Select your date:</label>
              <div className="input flex">
                <input type="date" placeholder='dd/mm/yy'/>
              </div>
          </div>

            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor='price'>Max Price:</label>
                <h3 className='total'>$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000"/>
              </div>
            </div>
      </div>
      </div>

 </section>

  )
}

export default Home
