import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Countdown({targetTime, startTime}) {
  // initialize state
  const [status, setStatus] = useState('');
  const [statProg, setStatProg] = useState(0);

  function countDown(target, stringStateSetter, progStateSetter, updateFrequency = 42) {
    let countDownDate = new Date(target).getTime();
    let initialTime = new Date().getTime();
    let x;

    function calcString() {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      const string = `${days >= 1 ? days : ''}${days >= 1 ? ' d ' : ''}${hours > 0 ? hours : ''}${hours > 0 ? ' h ' : ''}${minutes > 0 ? minutes : ''}${minutes > 0 ? ' m ' : ''}${seconds > 0 ? seconds : ''}${seconds > 0 ? ' s' : ''}`;
      if (stringStateSetter && distance > 0) {
        stringStateSetter(string);
        // progStateSetter(1 - ((distance) / (countDownDate - initialTime)));
      } else if (distance > 0) {
        console.log(string);
      }
      if (distance <= 0) {
        // clearInterval(x);
        // stringStateSetter('EXPIRED');
        // progStateSetter(1);
        // countDownDate += 60000;
        // initialTime = new Date().getTime();
      }
    }
    x = setInterval(calcString, updateFrequency);
  }

  useEffect(() => {
    countDown(targetTime, setStatus);
  }, []);

  return (
    <span>
      {status}
    </span>
  );
}

export default Countdown;
