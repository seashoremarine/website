import React from 'react'
import logo from '../../../assets/Seashore.png'
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className='container footer-container'>
            <div>
                <img src={logo} alt="" />
                <p>Stay Updated with Nautilus Highlights</p>
                <input type="text" placeholder='Email' />
                <button>Subscribe</button>
            </div>
            <div>
                <h6 style={{width:'115px'}}>Our Services</h6>
                <ul>
                    <li>  Ship Management</li>
                    <li>Crew Management</li>
                    <li>Inspection</li>
                    <li>Commercial Services</li>
                </ul>
            </div>
             <div>
                <h6>Helpful Links</h6>
                <ul>
                    <li>Contact Us</li>
                    <li>Careers</li>
                    <li>News & Insights</li>
                    <li>Events</li>
                    <li>Newsletter</li>
                </ul>
            </div>
             <div>
                <h6>Information</h6>
                <ul>
                    <li>Company</li>
                    <li>Team</li>
                    <li>Our Approach</li>
                    <li>Fleet</li>
                    <li>Sustainability</li>
                </ul>
            </div>
              <div>
               <p>RPSL No: RPSL/CHN/012</p>
               <p>An ISO 9001:2015 Certified Company</p>
               <p>Follow us</p>
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
            <p>Copyright © 2025 Nautilus Shipping. All rights reserved.</p>
            <p>Privacy Statement | Disclaimer</p>
        </div>
        </>
    )
}

export default Footer







