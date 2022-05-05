import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function AddProject({addProjectIsVisible, setAddProjectIsVisible, projects, setProjects}) {
  const [projectName, setProjectName] = useState('');
  const [projectDeadline, setProjectDeadline] = useState('');

  // useEffect(() => {

  // }, [projects]);

  return (
    <div style={{ display: addProjectIsVisible ? "block" : "none" }}>
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
      <input
        type="submit"
        onClick={() => {
          setProjects([...projects, { projectName, projectDeadline }]);
          setAddProjectIsVisible(false);
        }}
      />
      <hr />
    </div>
  );
}

export default AddProject;
