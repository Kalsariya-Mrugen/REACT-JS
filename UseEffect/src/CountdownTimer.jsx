import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time]);

  return (
    <div>
      {time > 0 ? <p>Remaining Time: {time} seconds</p> : <p>Time's up!</p>}
    </div>
  );
};

export default CountdownTimer;
