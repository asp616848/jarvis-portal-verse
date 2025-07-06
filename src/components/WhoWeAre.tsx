import React, { useState, useEffect, useRef } from 'react';

interface WhoWeAreProps {
  backgrounds: string[];
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ backgrounds }) => {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [textColor, setTextColor] = useState('text-foreground');
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const windowHeight = window.innerHeight;

      // Check if section is in view and text should be fixed
      if (sectionTop <= windowHeight * 0.2 && sectionRect.bottom > windowHeight * 0.2) {
        setIsFixed(true);
        
        // Calculate background progression based on scroll
        const scrollProgress = Math.abs(sectionTop) / sectionRect.height;
        const backgroundIndex = Math.floor(scrollProgress * backgrounds.length);
        const clampedIndex = Math.min(Math.max(backgroundIndex, 0), backgrounds.length - 1);
        
        if (clampedIndex !== currentBackground) {
          setCurrentBackground(clampedIndex);
          // Change text color based on background (simple logic - you can enhance this)
          setTextColor(clampedIndex % 2 === 0 ? 'text-foreground' : 'text-background');
        }
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [backgrounds.length, currentBackground]);

  return (
    <div ref={sectionRef} className="relative min-h-[300vh] bg-background">
      {/* Fixed text */}
      <div
        ref={textRef}
        className={`
          ${isFixed ? 'fixed-text' : 'relative top-20 left-1/2 transform -translate-x-1/2'}
          max-w-4xl px-8 text-center transition-all duration-300 z-10
          ${textColor}
        `}
      >
        <h2 className="font-tech text-6xl font-bold mb-8 neon-text">
          WHO WE ARE
        </h2>
        <p className="font-mono-tech text-xl leading-relaxed">
          JARVIS is the premier technology society at IIT Madras, uniting brilliant minds 
          passionate about Artificial Intelligence, Research, Virtual Networks, IoT, and Electronics. 
          We are the architects of tomorrow, building the future one innovation at a time.
        </p>
      </div>

      {/* Scrolling backgrounds */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: index === currentBackground ? 0.3 : 0,
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export default WhoWeAre;