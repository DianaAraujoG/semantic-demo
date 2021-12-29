/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';

const useMouseMove = () => {
  const [coordX, setCoordX] = useState(null);
  const [coordY, setCoordY] = useState(null);

  useEffect(() => {
    const coords = (e) => {
      setCoordX(e.x);
      setCoordY(e.y);
    };

    window.addEventListener('mousemove', coords);
    window.addEventListener('touchmove', coords);

    return () => {
      window.removeEventListener('mousemove', coords);
      window.removeEventListener('touchmove', coords);
    };
  }, [setCoordX, setCoordY]);

  return { x: coordX, y: coordY };
};

export default useMouseMove;
