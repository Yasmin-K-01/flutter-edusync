import React from 'react';

const TaskForm = () => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
      <input type="text" placeholder="Task Title" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <input type="date" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <button type="submit" style={{ padding: '10px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;