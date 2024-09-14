
      import React, { useState, useEffect } from 'react';

    const images = [
      {description: 'set 1 description ', photo: 'https://i.postimg.cc/zX8XmLg1/s1.png/800x400?text=Image+1'},
      {description: 'set 2 description ', photo: 'https://i.postimg.cc/T3PdwZ07/s2.png/800x400?text=Image+2'},
      {description: 'set 3 description ', photo: 'https://i.postimg.cc/yNg7hcw0/s3.png/800x400?text=Image+3'},
    ];
    
    const ImageSlider = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => { 
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // change image every 4 seconds
        return () => clearInterval(interval);
      }, []);
    
      return (
        <div className="relative bg-transparent w-full h-96 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center justify-center ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={image.photo} alt={`Slide ${index}`} className="w-full h-3/4 object-contain" />
              <span className="text-gold text-2xl mt-4">{image.description}</span>
            </div>
          ))}
        </div>
      );
    };
    
    export default ImageSlider;
    