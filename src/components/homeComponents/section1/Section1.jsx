import React, { useContext } from 'react'
import './Section1.css'
import logo from '../../../assets/Seashore.png'
import { searchContext } from '../../context/SearchContext'

const Section1 = () => {
  const { search, setSearch } = useContext(searchContext)
  return (
    <>
      <div className='container section1'>
        <h1>Navigating the Future of Marine</h1>
        <h2>in Marine Services & Marine Courses</h2>
        <br/>
        <div>
          <button className='btn btn-light'>GET START</button>
        </div>
      </div>
      {search && <div className="search-parent">
        <div className="search-child">
          <div className="search-heading">
            <input type="text" />
            <button onClick={() => setSearch(false)}>X</button>
          </div>
          <div className="details">
            <div className='container footer-container'>
              <div>
                <img src={logo} alt="" />
                <p>SEASHORE MARINE SOLUTIONS</p>

              </div>
              <div>
                <h6 style={{ width: '115px' }}>Our Services</h6>
                <ul>
                  <li>Ship Management</li>
                  <li>Marine Courses</li>
                  <li>Commercial Services</li>
                  <li>Marine Services</li>
                </ul>
              </div>
              <div>
                <h6>Helpful Links</h6>
                <ul>
                   <li>Courses</li>
                        <li>Careers</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>
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
