import React from 'react'
import logo from '../../../assets/Seashore.png'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='container footer-container'>
                <div>
                    <img src={logo} alt="" />
                    <h4>SEASHORE MARINE SOLUTIONS</h4>


                </div>
                <div>
                    <h6 style={{ width: '115px' }}>Our Services</h6>
                    <ul>
                        <li>  Ship Management</li>
                        <li>Marine Courses</li>
                        <li>Commercial Services</li>
                        <li>Marine Services</li>
                    </ul>
                </div>
                <div>
                    <h6>Helpful Links</h6>
                    <ul>
                        <li>Courses</li>
                        <li>Careers</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>


                    </ul>
                </div>

                <div>
                    <p>NEAR PARADISE CIRCLE, SECUNDERABAD.</p>


                    <p>HYDERABAD PIN-500003, INDIA</p>
                    <p>An ISO 9001:2015 Certified Company</p>

                    <main className='social-media-parent'>
                        <button><i class="fa-brands fa-linkedin"></i></button>
                        <button><i class="fa-brands fa-instagram"></i></button>
                        <button><i class="fa-brands fa-facebook"></i></button>
                        <button><i class="fa-brands fa-instagram"></i></button>
                    </main>
                </div>
            </div>
            <hr />
            <div className='container copy-right'>
                <p>Copyright © 2014 SEASHORE MARINE SOLUTIONS. All rights reserved.</p>
                <p>Placement support for enrolled students.*</p>
                
            </div>
        </>
    )
}

export default Footer







