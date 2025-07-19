import React from 'react'
import './Section5.css'
import logo from '../../../assets/Seashore.png'

const Section5 = () => {
  return (
    <div className='container section5-container'>
      <h1>Careers</h1>
      <div className="section-careers-parent">
        <div className="left-careers">
            
            <div>
                The Heart of Our Success
            </div>
            <h5>Why Join Nautilus?</h5>
            <p>At Nautilus Shipping, we recognize that our seafarers are the value to our growth. Your expertise and commitment drive our excellence. Set sail with Nautilus Shipping and shape a meaningful career in maritime shipping.</p>
            <button>Join out crew</button>
        </div>
        <div className="right-careers">
            <img src="https://www.nautilusshipping.com/_next/image?url=%2Fhome-page%2Fsection-5%2Fimage01.webp&w=1080&q=75" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section5
