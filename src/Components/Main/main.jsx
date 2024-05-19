import React from 'react';
import './main.css';
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';

import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineClipboardCheck } from "react-icons/hi";


const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Beach',
    location: 'New Zealand',
    grade: 'CUTURAL RELAX',
    fees: '$700',
    desc: 'the epitome of romance, narrow, gently sloping strip of land that lies along the edge of an ocean, lake, or river. Materials such as sand, pebbles, rocks, and seashell fragments cover beaches.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Veligandu Island Beach',
    location: 'Maldives',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    desc: 'Located on a private island, this beach offers a serene and luxurious escape.Overwater bungalows, vibrant coral reefs, and tranquil surroundings. Ideal for honeymooners and those seeking privacy.'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Ruislip Lido Beach',
    location: 'London',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    desc: 'A 60-acre lake with an artificial sandy beach located in the borough of Hillingdon. A large sandy area for sunbathing and picnics, a woodland area, a miniature railway, a café, and a playground. It is a great spot for family outings.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Copacabana Beach',
    location: 'Rio De Janerio',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    desc: 'One of the most famous beaches in the world, known for its vibrant atmosphere, four kilometers of golden sand, a lively promenade, and iconic landmarks. Popular for sunbathing, beach sports, and nightlife.'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Whitehaven Beach',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    desc: 'Known for its brilliant white silica sand and crystal-clear waters. The sand is so fine it doesnt retain heat, making it comfortable to walk on even on hot days. The beach is accessible by boat, helicopter, or seaplane.'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Grand Canal (Canal Grande)',
    location: 'Venice',
    grade: 'CULTURAL RELAX',
    fees: '$400',
    desc: 'Lined with magnificent buildings, the Grand Canal can be explored via gondolas, vaporettos (water buses), and private water taxis. Key sights include the Rialto Bridge and various palazzi (palaces).'
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'The Eiffel Tower ',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    desc: 'A four-story building at the base of the tower with museums, souvenir shops, restaurants, and an aquarium. Houses the Tokyo Tower Wax Museum, Guinness World Records Museum Tokyo, and other attractions.'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: ' Luxor',
    location: 'Egypt',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    desc: 'Famous for hot air balloon spot, home to the Valley of the Kings and the ancient city of Thebes. Balloon rides provide a birds-eye view of the ancient monuments, the Nile River, and the desert landscape.'
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Teatro La Fenice',
    location: 'France',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    desc: 'It is one of the Italy most famous opera houses. Renowned for its opulent interior and historical significance. It hosts a variety of performances, including opera, ballet, and concerts. A great tourist spot!'
  },


]

const Main = () => {
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <div className="Title">
          Most visited destinations
        </div>
      </div>

      <div className="secContent grid ">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, desc })=> {
            return(
              <div key={id} 
              className="singleDestination">
              <div className="imageDiv">
                <img  src={imgSrc} alt={destTitle}/>   
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                 <FaLocationDot className='icon'/>
                 <span className='name'>{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{desc}</p>
                </div>

                <button className='btn flex'>
                  DETAILS <HiOutlineClipboardCheck className='icon' />
                </button>
              </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
