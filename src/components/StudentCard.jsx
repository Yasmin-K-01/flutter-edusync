import React from 'react';
import ProgressBar from './ProgressBar';

const StudentCard = ({ student }) => {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '15px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <h3 style={{ margin: '0 0 5px 0' }}>{student.name}</h3>
      <p style={{ margin: '0 0 10px 0', color: '#6b7280' }}>{student.rollNo} | {student.department}</p>
      <small>Overall Progress: {student.progress}%</small>
      <ProgressBar progress={student.progress} />
    </div>
  );
};

export default StudentCard;