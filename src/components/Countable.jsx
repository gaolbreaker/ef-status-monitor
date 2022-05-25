import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

function Countable({name, goal, xp, setXp, xpValue}) {
  // initialize state
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  // const [max, setMax] = useState(maximum);
  return (
    <li style={{color: isComplete ? 'green' : 'red'}}>
      {`${name} (${goal}x)`}:
      <Button
        variant="outlined"
        onClick={() => {
          if (count < goal) {
            if (count + 1 === goal) {
              // console.log("complete!");
              setXp(Number(xp) + xpValue);
              setIsComplete(true);
            }
            setCount(count + 1);
          }
        }}
      >
        +
      </Button>{" "}
      {count}/{goal}
    </li>
  );
}

export default Countable;
