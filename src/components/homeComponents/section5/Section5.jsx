import React from 'react'
import './Section5.css'
import personcareers from '../../../assets/career.png'

const Section5 = () => {
  return (
    <div className='container section5-container' id='careers'>
      <h1>Careers</h1>
      <div className="section-careers-parent">
        <div className="left-careers">

          <div>
            Career Guidance in the Maritime Industry
          </div>

         

<img src={personcareers} alt="" />


        </div>
        <div className="right-careers">
          <div>
             <p>Are you uncertain about your career path? Our expert professionals at SEASHORE MARINE
            SOLUTIONS can provide personalized guidance to help you navigate your future.
            <br />
            <p> Expert Career Guidance for Aspiring Maritime Professionals.</p>  <br />
            We specialize in supporting students who have completed their higher secondary education (Plus
            Two) and demonstrate an aptitude for the marine sector. Our comprehensive career guidance
            services include: </p>

          <p>
            <br /> - Orientation classes tailored to the shipping industry
            <br />- Expert advice on career opportunities and pathways
            <br /> - Personalized support to help you achieve your goals   </p>

          <br />

          <p>At SEASHORE MARINE SOLUTIONS, we're committed to empowering young aspirants to pursuerewarding careers in the maritime industry. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
