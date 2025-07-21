import { useEffect, useState } from "react";
import "./Section6.css";
import image1 from '../../../assets/certificates/ADMISSION.jpg'
// import image2 from '../../../assets/certificates/ADMISSION.jpg'
import image3 from '../../../assets/certificates/certificate.jpg'
import image4 from '../../../assets/certificates/CRUISE HOSPITALITY.png'
import image5 from '../../../assets/certificates/HOSPITALITY.jpg'
import image6 from '../../../assets/certificates/INVEST IN A CAREER.jpg'
import image7 from '../../../assets/certificates/LIFE LONG EARNING.jpg'
import image8 from '../../../assets/certificates/SERVICES .jpg'


export default function Section6() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [image1,image3,image4,image5,image6,image7,image8];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Call existing nextSlide function
    }, 2000); // 2 seconds

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [currentIndex]); // dependency

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(galleryItems[(currentIndex + i) % galleryItems.length]);
    }
    return items;
  };

  

  return (
   <div className="news-section">
      <div className="container-fluid">
        <div className="content">
          {/* Left side - Title */}
          <div className="left-section">
            <h1 className="title">Gallery</h1>
          </div>

          {/* Right side - Gallery */}
          <div className="right-section">
            <div className="cards-grid">
              {getVisibleItems().map((item, index) => (
                <div key={`${currentIndex}-${index}`} className="news-card">
                  {item ? (
                    <img src={item} alt="Gallery" className="gallery-image" />
                  ) : (
                    <>
                      <h3 className="card-title">''</h3>
                      <p className="card-description">''</p>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="navigation">
              <button onClick={prevSlide} className="nav-btn" aria-label="Previous slide">
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className="progress-container">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${((currentIndex + 1) / galleryItems.length) * 100}%` }}
                  />
                </div>
              </div>

              <button onClick={nextSlide} className="nav-btn" aria-label="Next slide">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            {/* Indicators */}
            <div className="indicators">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
