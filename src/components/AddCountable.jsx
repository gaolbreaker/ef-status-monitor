import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';

function AddCountable({
  addCountableIsVisible,
  setAddCountableIsVisible,
  countables,
  setCountables,
}) {
  const [countableName, setCountableName] = useState('');
  const [countableGoal, setCountableGoal] = useState(1);
  const [countableComplete, setCountableComplete] = useState(0);

  // useEffect(() => {

  // }, [projects]);

  return (
    <div style={{ marginTop: '25px', display: addCountableIsVisible ? "block" : "none" }}>
      <h4>Add a New Countable</h4>
      <label>Name: </label>
      <input
        type="text"
        value={countableName}
        onChange={(e) => setCountableName(e.target.value)}
      />
      <label>Count Goal: </label>
      <input
        type="number"
        value={countableGoal}
        onChange={(e) => setCountableGoal(e.target.value)}
      />
      <br />
      <Button
        style={{ backgroundColor: 'green' }}
        variant="contained"
        onClick={() => {
          setCountables([
            ...countables,
            {
              countableName,
              countableGoal,
              countableComplete,
            },
          ]);
          setAddCountableIsVisible(false);
          setCountableName('');
          setCountableGoal(1);
        }}
      >Submit</Button>
      <hr />
    </div>
  );
}

const StyledAddCountable = styled(AddCountable)`
`;

export default StyledAddCountable;
