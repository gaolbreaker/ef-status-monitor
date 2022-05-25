import React, { useState } from 'react';
import Button from '@mui/material/Button';

function AddProject({addProjectIsVisible, setAddProjectIsVisible, projects, setProjects}) {
  const [projectName, setProjectName] = useState('');
  const [projectDeadline, setProjectDeadline] = useState('');

  // useEffect(() => {

  // }, [projects]);

  return (
    <div style={{ marginTop: '25px', display: addProjectIsVisible ? "block" : "none" }}>
      <h4>Add a New Project</h4>
      <label>Name: </label>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <label>Deadline: </label>
      <input
        type="datetime-local"
        value={projectDeadline}
        onChange={(e) => setProjectDeadline(e.target.value)}
      />
      <br />
      <Button
        variant="contained"
        style={{ backgroundColor: 'green' }}
        onClick={() => {
          setProjects([...projects, { projectName, projectDeadline, projectPeriod: (new Date(projectDeadline).getTime()) - (new Date().getTime()) }]);
          setAddProjectIsVisible(false);
          setProjectName('');
          setProjectDeadline('');
        }}
      >Submit</Button>
      <hr />
    </div>
  );
}

export default AddProject;
