import React, { useState, useEffect } from 'react';
import slideshow1 from '@/assets/slideshow-1.jpg';
import slideshow2 from '@/assets/slideshow-2.jpg';
import slideshow3 from '@/assets/slideshow-3.jpg';
import slideshow4 from '@/assets/slideshow-4.jpg';

const images = [slideshow1, slideshow2, slideshow3, slideshow4];

interface SlideshowProps {
  side: 'left' | 'right';
  isRevealed: boolean;
}

const Slideshow: React.FC<SlideshowProps> = ({ side, isRevealed }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        // Use different starting indices for left and right to create variety
        const startIndex = side === 'left' ? 0 : 2;
        const availableImages = side === 'left' ? [0, 1] : [2, 3];
        const currentIdx = availableImages.indexOf(prevIndex);
        const nextIdx = (currentIdx + 1) % availableImages.length;
        return availableImages[nextIdx];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [side]);

  return (
    <div
      className={`
        fixed top-0 ${side === 'left' ? 'left-0' : 'right-0'} 
        w-1/2 h-screen 
        slideshow-${side}
        ${isRevealed ? `slideshow-split-${side}` : ''}
        transition-transform duration-1200 ease-out
      `}
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default Slideshow;