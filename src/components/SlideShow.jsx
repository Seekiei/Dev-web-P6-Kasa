import React, { useState } from "react";
import "../styles/Carousel.css";
import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';

function Carousel({ pictures }) {

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % pictures.length); //  l'opérateur modulo % pour s'assurer que la valeur reste dans les limites du tableau pictures
  };

  const handlePrevious = () => {
    setCurrentImage((currentImage + pictures.length - 1) % pictures.length); //  si currentImage est déjà à 0, il sera défini sur la dernière image du tableau
  };

  const showArrows = pictures.length > 1; // vérifie si la longueur du tableau pictures est supérieure à 1, il permet de décider si les flèches de navigation doivent être affichées

  return (
    <div className="carousel">
      <img className="img-carousel" src={pictures[currentImage]} alt="carousel" />
      {showArrows && ( //cette condition permet d'afficher les fleches de navigation seulement si c'est true
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