import React, { useState, useRef, useEffect } from 'react';
import Hammer from 'hammerjs';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const Carousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const carouselRef = useRef(null);

  // Ensure images is an array
  const imageArray = Array.isArray(images) ? images : [];
  const totalImages = imageArray.length;

  // Update the number of visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        setVisibleCards(1); // 1 card on small screens
      } else if (window.matchMedia('(max-width: 1024px)').matches) {
        setVisibleCards(2); // 2 cards on medium screens
      } else {
        setVisibleCards(3); // 3 cards on large screens
      }
    };

    updateVisibleCards(); // Set initially based on screen size

    // Update on resize
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);

    
  }, []);


  // Handle edge case when there are no images
  if (totalImages === 0) {
    return <div>No images available</div>;
  }

  const imageWidth = 100 / visibleCards; // Percentage width of each image


  // Move to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);

    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${imageWidth}%)`;
      // Move the last element to the front
      carouselRef.current.insertBefore(
        carouselRef.current.children[totalImages - 1],
        carouselRef.current.firstChild
      );

      // Re-enable transition and animate to the left
      setTimeout(() => {
        carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
        carouselRef.current.style.transform = ``;
      }, 10);

      setTimeout(() => {
        carouselRef.current.style.transition = 'none';
      }, 490);
    }
  };

  // Move to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);

    if (carouselRef.current) {
      // Animate to the next slide by moving left
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      carouselRef.current.style.transform = `translateX(-${imageWidth}%)`;

      // Move the first element to the end after the transition completes
      setTimeout(() => {
        carouselRef.current.appendChild(carouselRef.current.children[0]);
        carouselRef.current.style.transition = 'none';
        carouselRef.current.style.transform = `none`;
      }, 500);
    }
  };

  // Set up Hammer.js for swipe detection
useEffect(() => {
  const hammer = new Hammer(carouselRef.current);
  hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
  hammer.on('swipeleft', () => {
    handleNext();
  });
  hammer.on('swiperight', () => {
    handlePrev();
  });
  return () => {
    hammer.destroy();
  };
}, [handleNext, handlePrev]);

  return (
    <section className="container flex justify-center pb-12">

      {/* Prev Arrow */}
      <button
        className="relative text-white text-5xl transition z-10"
        onClick={handlePrev}
      >
       <ChevronLeftIcon className={`w-14 h-14 mr-[-1rem]`}/>
      </button>

      <div className="w-full max-xl:m-[-3rem]">
        <div className="relative overflow-hidden">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex block py-10"
          >
            {/* Render actual images */}
            {imageArray.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3 "
                style={{ width: `${imageWidth}%` }}
              >
                <img className='object-cover h-[250px] w-full' src={image.src} alt={`Slide ${index + 1}`} />
                <div className="xl:text-lg uppercase text-white text-center py-5 bg-blue-950 bg-opacity-70 w-full">
                  {image.title}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* Next Arrow */}
      <button
        className="relative text-white text-5xl transition"
        onClick={handleNext}
      >
   <ChevronRightIcon className={`w-14 h-14 ml-[-1rem]`}/>
      </button>
    </section>
  );
};

export default Carousel;

