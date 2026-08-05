import React from 'react';

const Sidebar = () => {
  return (
    <aside style={{ width: '200px', backgroundColor: '#f3f4f6', height: '100vh', padding: '15px' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}>Dashboard</li>
        <li style={{ margin: '10px 0' }}>Students</li>
        <li style={{ margin: '10px 0' }}>Tasks</li>
        <li style={{ margin: '10px 0' }}>Events</li>
        <li style={{ margin: '10px 0' }}>Reports</li>
      </ul>
    </aside>
  );
};

export default Sidebar;