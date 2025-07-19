import React from 'react'
import './Section2.css'
const Section2 = () => {
  return (
    <div className='container section2'>
      <h1>For 18 Years</h1>
      <div className="section1-details">
        <p>Nautilus Shipping has stood as a trusted partner in ship management services, driven by our commitment to reliability, performance, and sustainable solutions.</p>
        <p>Using our proven 4Ps approach, we manage vessels and support ship owners with tailored strategies to enhance profitability, crew welfare, and environmental responsibility. Our focus on technical management ensures the highest standards of operational efficiency. With established industry relationships and a commitment to vessel management, we strive to provide a seamless experience for our clients.</p>
      </div>
      <div className="section1-services">
        <div className="section1-box">
            <button><i class="fa-solid fa-ship"></i></button>
            <h2>200+</h2>
            <h6>Ships manned</h6>
        </div>
        <div className="section1-box">
            <button><i class="fa-solid fa-building-shield"></i></button>
            <h2>100,000+</h2>
            <h6>Seafarer database+</h6>
        </div>
        <div className="section1-box">
            <button><i class="fa-solid fa-chart-line"></i></button>
            <h2>1,000+</h2>
            <h6>Crew on active rolls</h6>
        </div>
        <div className="section1-box">
            <button><i class="fa-solid fa-people-group"></i></button>
            <h2>50+</h2>
            <h6>Clients</h6>
        </div>
      
       

      </div>
    </div>
  )
}

export default Section2
