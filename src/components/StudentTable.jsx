import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
      <thead>
        <tr style={{ backgroundColor: '#f9fafb', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>
          <th style={{ padding: '10px' }}>Roll No</th>
          <th style={{ padding: '10px' }}>Name</th>
          <th style={{ padding: '10px' }}>Dept</th>
          <th style={{ padding: '10px' }}>Progress</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
            <td style={{ padding: '10px' }}>{student.rollNo}</td>
            <td style={{ padding: '10px' }}>{student.name}</td>
            <td style={{ padding: '10px' }}>{student.department}</td>
            <td style={{ padding: '10px' }}>{student.progress}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;