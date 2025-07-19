import React from 'react'
import './Section7.css'

const Section7 = () => {

    
  return (
    <div className='container section-7-container'>
      <h1>WHY US</h1>
      <div className="section-7-accordion-parent">
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed accordion-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Our Mission
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
We specialize in providing expert guidance, orientation, and training to individuals seeking a
career in the maritime industry. Our goal is to empower aspiring seafarers with the knowledge,
skills, and certifications necessary to succeed in this dynamic field .</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed accordion-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
    Why Choose a Marine Career?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
- Secure and high-income career opportunities <br/>
- Global travel and exploration <br/>
- Transferable skills and unique work experience <br/>
- Opportunities for fast career progression and professional growth <br/>
- Extended breaks and leave periods</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed accordion-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Our Expertise
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">- Personalized career guidance and counseling <br/>
- Specialist training and certification programs <br/>
- Sponsored courses and industry partnerships <br/>
- Expert advice on career development and industry trends <br/> 
<br/>
At SEASHORE MARINE SOLUTIONS, we're committed to helping you navigate a successful and
fulfilling career in the marine industry.</div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Section7
