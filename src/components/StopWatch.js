import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import ControlButtons from './ControlButtons';

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isActive, isPaused]);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const stopTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  const pauseTimer = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div>
      <Timer time={time} />
      <ControlButtons
        isActive={isActive}
        isPaused={isPaused}
        startTimer={startTimer}
        stopTimer={stopTimer}
        pauseTimer={pauseTimer}
      />
    </div>
  );
}

export default StopWatch;