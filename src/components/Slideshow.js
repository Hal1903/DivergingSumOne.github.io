import React, { useEffect, useState } from 'react';

const imageList = [
  '/images/slides/poster.jpeg',
  '/images/slides/wpi.jpeg',
  '/images/slides/ca.jpeg',
  '/images/slides/egr103.jpeg',
  '/images/slides/syuryo.png',
];

function AboutSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % imageList.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <img
      src={imageList[current]}
      alt={`Slide ${current + 1}`}
      className="slideshow-image"
    />
  );
}
export default function Slideshow() {
  return (
    <div className="slideshow-container">
      <AboutSlideshow />
        <style jsx>{`
          .slideshow-container {
            position: relative;
            width: 100%;
            max-width: 100%;
            height: 300px; /* Set your desired fixed height */
            overflow: hidden;
          }
          .slideshow-image {
            height: 100%;
            width: auto;
            object-fit: contain;
            display: block;
            margin: 0 auto;
          }
        `}</style>

    </div>
  );
}
