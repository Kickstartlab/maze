import React, { useEffect, useState, useRef } from 'react';

const Maze = () => {
  const [boxes, setBoxes] = useState([]);
  const [height, setHeight] = useState(0);
  const maxHeight = 133; // Desired maximum height to stop the animation
  const intervalRef = useRef(null); // Create a ref for the interval

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const type = Math.random() > 0.5 ? 'forward' : 'backward';
      const newBox = <div className={`box ${type}`} />;
      setBoxes(prevBoxes => [...prevBoxes, newBox]);

      setHeight(prevHeight => prevHeight + 1);
    }, 170);

    return () => {
      clearInterval(intervalRef.current); // Access the interval using the ref
    };
  }, []);

  useEffect(() => {
    if (height >= maxHeight) {
      clearInterval(intervalRef.current); // Access the interval using the ref
    }
  }, [height, maxHeight]);

  return <div className="container_2">{boxes}</div>;
};

export default Maze;
