import React, { useState, useEffect } from 'react';
import Banner_home_1 from '../../Assets/banner_home_1.jpg';
import Banner_home_2 from '../../Assets/banner_home_2.jpg';
import Banner_home_3 from '../../Assets/banner_home_3.jpg';
function Carousel() {
  const images = [Banner_home_1, Banner_home_2, Banner_home_3];
  const [imgIndex, setimgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setimgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${imgIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            className="w-full h-90 object-cover"
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              imgIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
