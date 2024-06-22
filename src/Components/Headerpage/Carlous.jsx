import React, { useState } from 'react';

const images = [
    '/src/assets/Kurtis.jpg',
    '/src/assets/Saree.jpg',
    '/src/assets/sarees.webp',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-screen max-w-5xl mx-auto p-10 ">
            <div className="overflow-hidden relative h-64">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-full" />
                    </div>
                ))}
            </div>


            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-DarkOrange bg-opacity-50 hover:bg-opacity-75 text-black font-bold py-2 px-4 rounded-full"
                onClick={prevSlide}
            >
                &#10094;
            </button>

            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-DarkOrange bg-opacity-50 hover:bg-opacity-75 text-black font-bold py-2 px-4 rounded-full"
                onClick={nextSlide}
            >
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
