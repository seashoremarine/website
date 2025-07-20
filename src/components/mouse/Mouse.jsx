import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMouse } from '@fortawesome/free-solid-svg-icons'
import './MouseScrollTop.css'

const MouseScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const section1 = document.getElementById('section1');
      if (section1) {
        const section1Height = section1.getBoundingClientRect().bottom;
        if (section1Height < 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="mouse-scroll-top" onClick={handleClick}>
          <FontAwesomeIcon icon={faMouse} size="2x" />
        </div>
      )}

      {/* WhatsApp button always visible */}
      <a
        href="https://wa.me/919999999999" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="wht-btn"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
};

export default MouseScrollTop;
