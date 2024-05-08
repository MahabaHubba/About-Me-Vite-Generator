import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './portfolio-transition.css';

function PortfolioTransition() {
    const images = [
        { src: "./images/ichooseyou.png", alt: "pokemon" },
        { src: "./images/wagerless.png", alt: "project-2" },
        { src: "./images/Pikachu.jpg", alt: "test" }
        
        // Add more images here as needed
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='project d-flex flex-column align-items-center ms-3'>
            <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} className="mb-3 shadow" />
            <div className='d-flex'>
                <button onClick={previousImage} className='btn btn-link'>
                    <FaArrowLeft className="arrow-left" />
                </button>
                <button onClick={nextImage} className='btn btn-link'>
                    <FaArrowRight className='arrow-right' />
                </button>
            </div>
        </div>
    );
}

export default PortfolioTransition;