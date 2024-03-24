import React, { useState, useEffect } from 'react';
import "../style/Timer.scss";


const Timer = () => {
  const [seconds, setSeconds] = useState(6209325);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          // Дополнительные действия после завершения отсчета
        }
        return prevSeconds > 0 ? prevSeconds - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds) => {
    const days = Math.floor(timeInSeconds / 86400);
    const hours = Math.floor((timeInSeconds % 86400) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(days).padStart(2, '0')} d  ${String(hours).padStart(2, '0')} h  ${String(minutes).padStart(2, '0')} m  ${String(seconds).padStart(2, '0')} s`;
  };
  

  return (
    <div className='timer'>
      {/* <h1>Таймер</h1> */}
      <strong>{formatTime(seconds)}</strong>
    </div>
  );
};

export default Timer;
