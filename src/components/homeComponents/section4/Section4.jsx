import React from 'react'
import './Section4.css'
import image1 from '../../../assets/persons.webp'
import image2 from '../../../assets/shipmentdock.webp'
import image3 from '../../../assets/woRkers.webp'
// import '../../../assets/'

const Section4 = () => {
  return (
    <div className='container section-4'>
      <h1>Our Marine Courses</h1>
      {/* <div className='hr-div'>
        <hr />
      </div> */}

      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* Flex container to split content and image */}
            <div className="d-flex align-items-center section4-slide">

              {/* Content Left */}
              <div className="section4-content text-light">
                <h2>STCW</h2>
                <h3>ADVANCED MODULAR COURSES</h3>
                <p>These courses are mandatory for every seafarer.Certificates have to be renewed on expiry.</p>
                {/* <div>Read More</div> */}
              </div>

              {/* Image Right */}
              <div className="section4-image">
                <img src={image2} alt="crew ship" className="img-fluid " />
              </div>

            </div>
          </div>

          {/* Repeat similar structure for other slides */}
          <div className="carousel-item">
            <div className="d-flex align-items-center section4-slide">
              <div className="section4-content">
                <h1>GP-RATING</h1>
                <h3>PRE-SEA TRAINING COURSE FOR GENERAL PURPOSE</h3>
                <p>GENERAL PURPOSE (GP)
                  RATINGS
                  (As per Director General of Shipping
                  Training Circular no. 01 of 2018)</p>
                {/* <div>Read More</div> */}
              </div>
              <div className="section4-image">
                <img src={image1} alt="..." className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex align-items-center section4-slide">
              <div className="section4-content">
                <h1>CCMC</h1>
                <h3>SALOON RATING (CERTIFICATE COURSE IN MARITIME CATERING)</h3>
                <p>(As per Merchant shipping (Medical Examination)Amendment Rules,2016 as amended from time to time)</p>
                {/* <div>Read More</div> */}
              </div>
              <div className="section4-image">
                <img src={image3} alt="..." className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex align-items-center section4-slide">
              <div className="section4-content">
                <h5>Third Slide Label</h5>
                <p>Some representative placeholder content for the third slide.</p>
                <div>Read More</div>
              </div>
              <div className="section4-image">
                <img src="https://www.nautilusshipping.com/_next/image?url=%2Fhome-page%2Four-marine-services%2Fimage04.webp&w=1080&q=75" alt="..." className="img-fluid" />
              </div>
            </div>
          </div>

        </div>

        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button> */}
        {/* <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  )
}

export default Section4
