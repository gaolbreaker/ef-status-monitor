import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Countdown from './Countdown';

function Project({name, projectPeriod, projectDeadline, Progress, xp, setXp, xpValue, Countdown}) {
  // initialize state
  // const [initialTime] = useState(new Date().getTime());
  const [deadline] = useState(projectDeadline);
  const [isComplete, setIsComplete] = useState(false);
  console.log(projectPeriod);
  // console.log((new Date(deadline)).toString());
  return (
    <li style={{ color: isComplete ? "green" : "red" }}>
      <span style={{ fontWeight: 'bold' }}>{`${name} `}</span><span style={{ fontStyle: 'italic', fontSize: 'x-small'}}>{`(by ${new Date(deadline).toString()}): `}</span>
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
      <Progress value={((new Date(deadline).getTime()) - (new Date().getTime())) / projectPeriod} />
      <Countdown targetTime={deadline} />
    </li>
  );
}

export default Project;
