import React, { useContext } from 'react'
import './Section1.css'
import logo from '../../../assets/Seashore.png'
import { searchContext } from '../../context/SearchContext'
import { Link } from 'react-router-dom'

const Section1 = () => {
  const { search, setSearch } = useContext(searchContext)
  return (
    <>
      <div className='container section1'>
        <h1>Navigating the Future of Marine</h1>
        <h2>in Marine Services & Marine Courses</h2>
        <br/>
        <div>
          <a href='#about'><button className='btn btn-light'>GET START</button></a>
        </div>
      </div>
      {search && <div className="search-parent">
        <div className="search-child">
          <div>
          <button  onClick={() => setSearch(false)} className='close-btn'><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div className="search-heading">
            <input type="text" placeholder='Search here' />
            
          </div>
          <hr style={{marginTop:'110px'}}/>
          <div className="">
            <div className='container search-footers'>
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
