import React from 'react';
import './Section2.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Section2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3, // 30% visibility triggers animation
  });

  return (
    <div ref={ref} className='container section2' id='about'>
      <h1>About Us</h1>
      <div className="section1-details">
        <p>SEASHORE MARINE SOLUTIONS has stood as a trusted partner in ship management services, driven by our commitment to reliability, performance, and sustainable solutions.</p>
        <p>Using our proven 4Ps approach, we manage vessels and support ship owners with tailored strategies to enhance profitability, crew welfare, and environmental responsibility. Our focus on technical management ensures the highest standards of operational efficiency. With established industry relationships and a commitment to vessel management, we strive to provide a seamless experience for our clients.</p>
        <p>A career in the maritime industry has proven to be a rewarding and enduring choice for centuries. Despite the rapid pace of global change, a career at sea offers unparalleled opportunities for growth, stability, and personal fulfillment. The industry's significant demand for skilled professionals, particularly those with technological expertise, presents a lucrative career path for job seekers.</p>
      </div>

      <div className="section1-services">
        <div className="section1-box">
          <button><i className="fa-solid fa-ship"></i></button>
          <h2>
            {inView && <CountUp end={30} duration={2} />}
            +
          </h2>
          <h6>Courses</h6>
        </div>

        <div className="section1-box">
          <button><i className="fa-solid fa-building-shield"></i></button>
          <h2>
            {inView && <CountUp end={100000} duration={3} separator="," />}
            +
          </h2>
          <h6>Students Enrolled</h6>
        </div>

        <div className="section1-box">
          <button><i className="fa-solid fa-chart-line"></i></button>
          <h2>
            {inView && <CountUp end={50000} duration={3} separator="," />}
            +
          </h2>
          <h6>Placements</h6>
        </div>

        <div className="section1-box">
          <button><i className="fa-solid fa-people-group"></i></button>
          <h2>
            {inView && <CountUp end={700} duration={2} separator="," />}
            +
          </h2>
          <h6>Clients</h6>
        </div>
      </div>
    </div>
  );
}

export default Section2;
