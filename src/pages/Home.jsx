import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Section1 from '../components/homeComponents/section1/Section1'
import video from '../assets/sea.mp4'
import Section2 from '../components/homeComponents/section2/Section2'
import Section3 from '../components/homeComponents/section3/Section3'
import Section4 from '../components/homeComponents/section4/Section4'
import Section5 from '../components/homeComponents/section5/Section5'
import Section7 from '../components/homeComponents/section7/Section7'
import Footer from '../components/homeComponents/footer/Footer'
import Section6 from '../components/homeComponents/section6/Section6'
import MouseScrollTop from '../components/mouse/Mouse'

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <video
          src={video}
          autoPlay
          muted
          loop
          className='background-video'
        ></video>

        <Navbar />
        <Section1 />
         <div id="section1"></div>
      </div>
      <MouseScrollTop/>
      <div className="section2-container">
        <Section2 />
      </div>
      <div className="section3-heading">
        <h1>The Seashore  <span>Marine Solutions</span></h1>
        <h2>The <span>4  Pillars</span>  Powering Modern Ship Management</h2>
      </div>
      <div className="section3-container home-container">
        <img className='background-video' src="https://c1.wallpaperflare.com/preview/153/648/934/lind%C3%B8-yard-shipyard-industrial-city.jpg" alt="" />
        <Section3 />
      </div>
      <div className="section4-heading container">
        <h1>Secure Your Future in the <br /> Maritime Industry,</h1>
        <h6>📞 Get in touch today to start your journey with hands-on training, global certifications, and career-ready skills.

          <br />
          Enroll in our industry-leading Marine Courses Today! </h6>
        <div>
          <button><i class="fa-solid fa-envelope"></i></button>
          <p>info@seashoremarine.in</p>
        </div>
        <button id='connectbtn'>Lets connect</button>
      </div>
      <div className="section-4-container">
        <Section4 />
      </div>
      <div className="section-5-heading-box">
        <div>
          <h1>Board of Directors</h1>
          <h6>The Management of SEASHORE MARINE SOLUTIONS with the Board of Directors. The Board
            is an optimal mix of Whole-time and Independent Directors, who are professionals with
            extensive knowledge & experience and bring valuable multidimensional perspectives to
            the table. The Board provides expert guidance, long-term visions and strategies for the
            growth of the Company.</h6>
        </div>
      </div>

 <div className="section-5-heading-box">
        <div>
          <h1>Managing Director</h1>
          <h6>CAPT. JOHN JOSEPH</h6>
          
        </div>
      </div>

<div className="section-5-heading-box">
  <div>
    <h2>Independent Directors</h2>
    <h6>CAPT. DILIP KUMAR</h6>
    <h6>MR. JOSEPH PHILIP</h6>
    <h6>MR. ABRAHAM MATHEW</h6>
    <h6>MR. ASHOK KUMAR</h6>
  </div>
</div>

      <Section5 />
      <hr />
      <Section6/>
      <hr />
      <Section7 />
      <hr />
      <Footer />
    </>
  )
}

export default Home
