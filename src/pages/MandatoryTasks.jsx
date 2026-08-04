import React from 'react';
import TaskForm from '../components/TaskForm';

const MandatoryTasks = () => {
  return (
    <div>
      <h2>Mandatory Tasks</h2>
      <p style={{ marginBottom: '20px' }}>Assign new tasks to students:</p>
      <TaskForm />
    </div>
  );
};

export default MandatoryTasks;