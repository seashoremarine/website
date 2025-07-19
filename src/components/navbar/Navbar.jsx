import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/Seashore.png'
import SearchContext, { searchContext } from '../context/SearchContext'

const Navbar = () => {
  const {setSearch}=useContext(searchContext)
  return (
    <>
      <div className='container'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
            <button className="navbar-toggler" style={{color:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" style={{color:'white'}}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">               
              </ul>
              <div className="d-flex align-items-center" role="search">
                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavigation" aria-controls="offcanvasNavigation" className='btn fs-2'>
                  <i className="fa-solid fa-bars"></i>
                </button>
                <button className='btn fs-2'>
                  <i className="fa-solid fa-magnifying-glass" onClick={()=>setSearch(true)}></i>
                </button>             
              </div>
            </div>
          </div>
        </nav>
      </div>
      <hr className='text-light'/>

      {/* Offcanvas Navigation Modal */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavigation" aria-labelledby="offcanvasNavigationLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavigationLabel">
            <img src={logo} alt="Logo" style={{height: '40px'}} />
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body container">
          <nav className="nav-menu">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  Service <i className="fa-solid fa-chevron-right"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#approach">Our Approach</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#fleet">Fleet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sustainability">Sustainability</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#careers">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#news">News & Insights</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resources">
                  Resources <i className="fa-solid fa-chevron-right"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us <i className="fa-solid fa-chevron-right"></i>
                </a>
              </li>
            </ul>
            
            {/* Action Buttons */}

            <div>
              <div className="mt-4 sidebar-btn-div ">
              <button >Contact Us</button>
              <button >Careers</button>
            </div>

            {/* Social Media Icons */}
            <div className="social-icons mt-4">
              <a href="#" className="me-3"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="me-3"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
            </div>
            
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar