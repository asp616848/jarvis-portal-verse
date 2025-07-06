import React, { useState, useEffect } from 'react';

interface CustomCursorProps {
  mode: 'hello' | 'dot';
}

const CustomCursor: React.FC<CustomCursorProps> = ({ mode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: mode === 'hello' ? 'translate(-50%, -50%)' : 'translate(-4px, -4px)',
      }}
    >
      {mode === 'hello' ? (
        <div className="cursor-box font-tech">
          HELLO
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
        </div>
      ) : (
        <div className="cursor-dot"></div>
      )}
    </div>
  );
};

export default CustomCursor;