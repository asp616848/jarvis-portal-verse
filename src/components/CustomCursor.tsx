import React, { useEffect, useRef } from 'react';

interface CustomCursorProps {
  mode: 'hello' | 'dot';
}

const CustomCursor: React.FC<CustomCursorProps> = ({ mode }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', updateCursor);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      {mode === 'hello' ? (
        <div className="cursor-box font-tech">
          HELLO
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
        </div>
      ) : (
        <div className="cursor-dot" />
      )}
    </div>
  );
};

export default CustomCursor;
