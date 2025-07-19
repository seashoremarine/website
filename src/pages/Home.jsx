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
    </div>
    <div className="section2-container">
          <Section2/>
    </div>
    <div className="section3-heading">
        <h1>The Seashore  <span>Marine Solutions</span></h1>
        <h2>Powering Ship Management with the <span>4Ps</span></h2>
    </div>
    <div className="section3-container home-container">
        <img className='background-video' src="https://c1.wallpaperflare.com/preview/153/648/934/lind%C3%B8-yard-shipyard-industrial-city.jpg" alt="" />
        <Section3/>
    </div>
    <div className="section4-heading container">
        <h1>Safeguard Your Investment,<br />
Maximize Your Returns</h1>
<h6>Contact us for Ship Management, Crew Management, Ship Agency & Logistics,<br />
Inspection and Commercial Ship Services.</h6>
<div>
   <button><i class="fa-solid fa-envelope"></i></button>
    <p>hello@nautilusshipping.com</p>
</div>
<button id='connectbtn'>Lets connect</button>
    </div>
    <div className="section-4-container">
        <Section4/>
    </div>
    <div className="section-5-heading-box">
      <div>
        <h1>Hidden Costs <br />
– Can You Find Them?</h1>
<h6>There’s more to a ship’s budget than what meets the eye. Can you uncover the hidden expenses <br /> before they take you by surprise?</h6>
<button>Play the Game Now</button>
      </div>
    </div>
    <Section5/>
    <hr />
    <Section7/>
    <hr />
    <Footer/>
    </>
  )
}

export default Home
