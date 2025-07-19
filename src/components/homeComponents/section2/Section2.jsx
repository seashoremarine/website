import React from 'react'
import './Section2.css'
const Section2 = () => {
  return (
    <div className='container section2'>
      <h1>About Us</h1>
      <div className="section1-details">
        <p>SEASHORE MARINE SOLUTIONS has stood as a trusted partner in ship management services, driven by our commitment to reliability, performance, and sustainable solutions.</p>
        <p>Using our proven 4Ps approach, we manage vessels and support ship owners with tailored strategies to enhance profitability, crew welfare, and environmental responsibility. Our focus on technical management ensures the highest standards of operational efficiency. With established industry relationships and a commitment to vessel management, we strive to provide a seamless experience for our clients.</p>
        <p>A career in the maritime industry has proven to be a rewarding and enduring choice for centuries. Despite the rapid pace of global change, a career at sea offers unparalleled opportunities for growth, stability, and personal fulfillment. The industry's significant demand for skilled professionals, particularly those with technological expertise, presents a lucrative career path for job seekers.</p>
      </div>
      <div className="section1-services">
        <div className="section1-box">
            <button><i class="fa-solid fa-ship"></i></button>
            <h2>30+</h2>
            <h6>Courses</h6>
        </div>
        <div className="section1-box">
            <button><i class="fa-solid fa-building-shield"></i></button>
            <h2>100,000+</h2>
            <h6>Students Enrolled </h6>
        </div>
        <div className="section1-box">
            <button><i class="fa-solid fa-chart-line"></i></button>
            <h2>50,000+</h2>
            <h6>Placements</h6>
        </div>
        <div className="section1-box">
            <button><i class="fa-solid fa-people-group"></i></button>
            <h2>700+</h2>
            <h6>Clients</h6>
        </div>
      
       

      </div>
    </div>
  )
}

export default Section2
