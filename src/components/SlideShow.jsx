import React, { useState } from "react";
import "../styles/Carousel.css";
import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';

function Carousel({ pictures }) {

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % pictures.length);
  };

  const handlePrevious = () => {
    setCurrentImage((currentImage + pictures.length - 1) % pictures.length);
  };

  const showArrows = pictures.length > 1;

  return (
    <div className="carousel">
      <img className="img-carousel" src={pictures[currentImage]} alt="carousel" />
      {showArrows && (
      <div className="controls">
        <button onClick={handlePrevious}>
            <img  className="img-arrow" src={arrowLeft} alt="" />
        </button>
        <span className="carousel-count">{currentImage + 1}/{pictures.length}</span>
        <button onClick={handleNext}>
            <img className="img-arrow" src={arrowRight} alt="" />
        </button>
      </div>
      )}
    </div>
  );
}

export default Carousel;

