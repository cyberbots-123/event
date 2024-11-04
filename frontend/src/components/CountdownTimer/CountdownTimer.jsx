import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const Timer = ({ startDate, endDate }) => {
  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const timeLeft = targetDate - now;

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
  };

  const [timeLeftStart, setTimeLeftStart] = useState(calculateTimeLeft(new Date(startDate)));
  const [timeLeftEnd, setTimeLeftEnd] = useState(calculateTimeLeft(new Date(endDate)));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeftStart(calculateTimeLeft(new Date(startDate)));
      setTimeLeftEnd(calculateTimeLeft(new Date(endDate)));
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate, endDate]);

  return (
    <div className="timer-container">
      <div className="timer">
        <div className="timer-section">
          <h3>Registration Starts In</h3>
          <div className="timer-box">
            <div className="timer-value">{timeLeftStart.days} <span>Days</span></div>
            <div className="timer-value">{timeLeftStart.hours} <span>Hours</span></div>
            <div className="timer-value">{timeLeftStart.minutes} <span>Minutes</span></div>
            {/* <div className="timer-value">{timeLeftStart.seconds} <span>Seconds</span></div> */}
          </div>
        </div>
        <div className="timer-section">
          <h3>Registration Ends At</h3>
          <div className="timer-box">
            <div className="timer-value">{timeLeftEnd.days} <span>Days</span></div>
            <div className="timer-value">{timeLeftEnd.hours} <span>Hours</span></div>
            <div className="timer-value">{timeLeftEnd.minutes} <span>Minutes</span></div>
            {/* <div className="timer-value">{timeLeftEnd.seconds} <span>Seconds</span></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
