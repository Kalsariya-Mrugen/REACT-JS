import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Elapsed Time: {time} seconds</p>
    </div>
  );
};

export default Timer;
