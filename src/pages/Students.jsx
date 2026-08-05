import React from 'react';
import StudentTable from '../components/StudentTable';
import { studentsData } from '../data/students';

const Students = () => {
  return (
    <div>
      <h2>Students List</h2>
      <StudentTable students={studentsData} />
    </div>
  );
};

export default Students;