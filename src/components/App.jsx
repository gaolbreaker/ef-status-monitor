import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/Card';

// Components
import Countable from './Countable';
import Project from './Project';
import AddProject from './AddProject';
import StyledAddCountable from './AddCountable';
import Countdown from './Countdown';

const Progress = styled.progress`
  width: 249px;
  height: 20px;
`;

const Status = styled.div`
  display: block;
  background: rgba(192, 192, 192, 0.7);
  border: 2px;
  margin: 10px auto;
  width: 768px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
`;

const Main = styled.div`
  border: 2px;
  background: rgba(192, 192, 192, 0.8);
  padding: 15px 10px;
  margin: 0 auto;
  width: 768px;
  text-align: center;
  border-radius: 5px;

  & Button {
    margin-right: 10px;
  }
`;

function App() {
  const [xp, setXp] = useState(parseInt(Math.random() * 1000 + 1000 ));
  const [level, setLevel] = useState(parseInt((Math.random() * 20 + 10)));
  const [xpToLevel, setXpToLevel] = useState(100);
  const [status, setStatus] = useState('');
  const [statProg, setStatProg] = useState(0);
  const [statusMinute, setStatusMinute] = useState('');
  const [statProgMin, setStatProgMin] = useState(0);
  const [statusHour, setStatusHour] = useState('');
  const [statProgHr, setStatProgHr] = useState(0);
  const [statusDay, setStatusDay] = useState('');
  const [statProgDay, setStatProgDay] = useState(0);
  const [count, setCount] = useState(0);
  const [max, setMax] = useState(7);
  const [addProjectIsVisible, setAddProjectIsVisible] = useState(false);
  const [projects, setProjects] = useState(localStorage.getItem('projects') !== null ? JSON.parse(localStorage.getItem('projects')) : []);
  const [addCountableIsVisible, setAddCountableIsVisible] = useState(false);
  const [countables, setCountables] = useState(localStorage.getItem('countables') !== null ? JSON.parse(localStorage.getItem('countables')) : []);

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
        progStateSetter(1 - ((distance) / (countDownDate - initialTime)));
      } else if (distance > 0) {
        //console.log(string);
      }
      if (distance <= 0) {
        // clearInterval(x);
        // stringStateSetter('EXPIRED');
        progStateSetter(1);
        countDownDate += 60000;
        initialTime = new Date().getTime();
      }
    }

    x = setInterval(calcString, updateFrequency);
  }

  function createDayBar(stringStateSetter, progStateSetter, updateFrequency = 42) {
    let x;

    function calc() {
      const now = new Date().getTime() - 7 * (1000 * 60 * 60);
      const hours = ((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      stringStateSetter(`${Math.floor(hours)} h`);
      progStateSetter(hours / 24);
    }

    x = setInterval(calc, updateFrequency);
  }

  function createHourBar(stringStateSetter, progStateSetter, updateFrequency = 42) {
    let x;

    function calc() {
      const now = new Date().getTime();
      const minutes = ((now % (1000 * 60 * 60)) / (1000 * 60));
      stringStateSetter(`${Math.floor(minutes)} m`);
      progStateSetter(minutes / 60);
    }

    x = setInterval(calc, updateFrequency);
  }

  function createMinuteBar(stringStateSetter, progStateSetter, updateFrequency = 42) {
    let x;

    function calc() {
      const now = new Date().getTime();
      const seconds = ((now % (1000 * 60)) / 1000);
      stringStateSetter(`${Math.floor(seconds)} s`);
      progStateSetter(seconds / 60);
    }

    x = setInterval(calc, updateFrequency);
  }

  useEffect(() => {
    // countDown((new Date().getTime() + 60000), setStatus, setStatProg);
    createMinuteBar(setStatusMinute, setStatProgMin);
    createHourBar(setStatusHour, setStatProgHr);
    createDayBar(setStatusDay, setStatProgDay);
    // if (localStorage.getItem('projects') !== null) {
    //   setProjects(JSON.parse(localStorage.getItem('projects')));
    // } else if (localStorage.getItem('countables') !== null) {
    //   setCountables(JSON.parse(localStorage.getItem('countables')));
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('countables', JSON.stringify(countables));
  }, [countables]);

  return (
    <>
      <Status id="status">
        <h4>perish2ice</h4>
        {`Level ${level} Dark Mage`}
        <br />
        {`${xp} `}
        Experience Points
        <br />
        {10000 - xp} xp until next level up
        <br />
        <Progress id="xp" value={xp} max="10000" />
        {/* <Progress id="test" value={statProg} />
        {'  '}
        {status} */}
        <hr />
        {new Date().toString().slice(0, 24)}
        <br />
        <Progress id="day" value={statProgDay} />
        {statusDay}
        <Progress id="hour" value={statProgHr} />
        {statusHour}
        <Progress id="minute" value={statProgMin} />
        {statusMinute}
      </Status>
      <div id="temporary-separator">
      </div>
      <Main id="main">
        <Button
          variant="contained"
          onClick={() => setAddCountableIsVisible(!addCountableIsVisible)}
        >
          Add countable task
        </Button>
        <Button
          variant="contained"
          onClick={() => setAddProjectIsVisible(!addProjectIsVisible)}
        >
          Add project
        </Button>
        <StyledAddCountable
          addCountableIsVisible={addCountableIsVisible}
          setAddCountableIsVisible={setAddCountableIsVisible}
          countables={countables}
          setCountables={setCountables}
        />
        <AddProject
          addProjectIsVisible={addProjectIsVisible}
          setAddProjectIsVisible={setAddProjectIsVisible}
          projects={projects}
          setProjects={setProjects}
        />
        <h3 className="first-section">One-off</h3>
        <ul>
          {/* <Countable
            name="Do push-ups"
            goal={5}
            xp={xp}
            xpValue={1000}
            setXp={setXp}
          />
          <Countable
            name="Brush Teeth"
            goal={2}
            xp={xp}
            xpValue={1000}
            setXp={setXp}
          /> */}
          {countables.map((e, i) => (
            <>
              <Countable
                name={e.countableName}
                goal={Number(e.countableGoal)}
                xp={xp}
                xpValue={1000}
                setXp={setXp}
              />
              <Button
                variant="text"
                onClick={() => {
                  const arrayCopy = [...countables];
                  arrayCopy.splice(i, 1);
                  setCountables(arrayCopy);
                }}
              >
                ^ Delete this Task
              </Button>
            </>
          ))}
        </ul>
        <h3>Project</h3>
        <ul>
          {/* <Project
            name="Kiss the Stars of Babylon"
            Progress={Progress}
            projectPeriod={1000000}
            xp={xp}
            xpValue={10000}
            setXp={setXp}
            Countdown={Countdown}
          /> */}
          {projects.map((e, i) => (
            <>
              <Project
                name={e.projectName}
                Progress={Progress}
                projectDeadline={e.projectDeadline}
                projectPeriod={e.projectPeriod}
                xp={xp}
                xpValue={10000}
                setXp={setXp}
                Countdown={Countdown}
              />
              <Button
                onClick={() => {
                  const arrayCopy = [...projects];
                  arrayCopy.splice(i, 1);
                  setProjects(arrayCopy);
                }}
              >
                ^ Delete this Task
              </Button>
            </>
          ))}
        </ul>
        <h3>Daily</h3>
        <p>Daily items</p>
        <h3>Weekly</h3>
        <p>Weekly items</p>
      </Main>
    </>
  );
}

export default App;
