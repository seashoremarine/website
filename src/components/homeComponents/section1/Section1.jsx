import React, { useContext } from 'react'
import './Section1.css'
import logo from '../../../assets/Seashore.png'
import { searchContext } from '../../context/SearchContext'

const Section1 = () => {
  const {search,setSearch}=useContext(searchContext)
  return (
    <>
    <div className='container section1'>
      <h1>The Standard for Excellence</h1>
      <h2>in Ship Management and Marine Services</h2>
      <div>
        <button className='btn btn-light'>Contact us</button>
        <button className='btn btn-light'>Careers</button>
      </div>
    </div>
   {search&& <div className="search-parent">
      <div className="search-child">
        <div className="search-heading">
        <input type="text" />
        <button onClick={()=>setSearch(false)}>X</button>
      </div>
      <div className="details">
         <div className='container footer-container'>
                    <div>
                        <img src={logo} alt="" />
                        <p>Stay Updated with Nautilus Highlights</p>
                        <input type="text" placeholder='Email' />
                        <button>Subscribe</button>
                    </div>
                    <div>
                        <h6 style={{width:'115px'}}>Our Services</h6>
                        <ul>
                            <li>  Ship Management</li>
                            <li>Crew Management</li>
                            <li>Inspection</li>
                            <li>Commercial Services</li>
                        </ul>
                    </div>
                     <div>
                        <h6>Helpful Links</h6>
                        <ul>
                            <li>Contact Us</li>
                            <li>Careers</li>
                            <li>News & Insights</li>
                            <li>Events</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>
                    </div>
      </div>
      </div>
    </div>}
    </>

  )
}

export default Section1
