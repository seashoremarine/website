import React from 'react'
import './Section7.css'

const Section7 = () => {

    
  return (
    <div className='container section-7-container'>
      <h1>Frequently Asked Questions</h1>
      <div className="section-7-accordion-parent">
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed accordion-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       What services do you offer?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We specialize in crew management but also provide complete vessel management and marine services.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed accordion-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
    What types of vessels do you manage?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We manage bulk carriers, container ships, chemical tankers, oil & LPG/LNG tankers, general cargo vessels, and passenger ships.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed accordion-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How many seafarers are in your database?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We have a database of 100,000+ seafarers..</div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Section7
