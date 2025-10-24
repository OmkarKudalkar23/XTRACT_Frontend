import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
<div
  className="fixed z-50 pointer-events-none"
  style={{
    top: `${position.y}px`,
    left: `${position.x}px`,
    transform: 'translate(-50%, -50%)',
  }}
>
  <div className="relative w-[25vw] h-[25vh]">
    {/* Round div */}
    <div className="absolute top-1/2 left-1/2 w-[0.5vw] h-[1vh] bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

    {/* Surrounding image */}
    <img
      src="/assets/images/cursor-glow-min.png"
      alt="cursor frame"
      className="absolute top-0 left-0 w-full h-full z-[9999] object-contain"
    />
  </div>
</div>



  );
};

export default Cursor;
