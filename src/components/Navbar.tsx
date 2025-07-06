import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        // Scrolling up and not at the very top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-500 ease-in-out
        ${isVisible ? 'navbar-visible' : 'navbar-hidden'}
        bg-background/80 backdrop-blur-md border-b border-primary/20`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="font-tech text-2xl font-bold neon-text">
          JARVIS
        </div>
        
        <div className="flex items-center space-x-8">
          {[
            { name: 'Works', path: '/works' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' },
            { name: 'Join Us', path: '/join-us' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="font-mono-tech text-sm uppercase tracking-wider hover:text-primary transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;