import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Countdown from './Countdown';

function Project({name, projectPeriod, Progress, xp, setXp, xpValue, Countdown}) {
  // initialize state
  const [initialTime] = useState(new Date().getTime());
  const [deadline] = useState(initialTime + projectPeriod);
  const [isComplete, setIsComplete] = useState(false);
  // console.log((new Date(deadline)).toString());
  return (
    <li style={{ color: isComplete ? "green" : "red" }}>
      {`${name} (by ${new Date(deadline).toString()}): `}
      <br />
      <button
        onClick={() => {
          if (!isComplete) {
            setXp(Number(xp) + xpValue);
            setIsComplete(true);
          }
        }}
      >
        Done!
      </button>
      <Progress value={(deadline - new Date().getTime()) / projectPeriod} />
      <Countdown targetTime={deadline} />
    </li>
  );
}

export default Project;
