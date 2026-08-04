import React, { useEffect, useState } from 'react';

export default function StudentDashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentTasks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/tasks', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentTasks();
  }, []);

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading your dashboard...</div>;
  }

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Student Dashboard</h1>
      {tasks.length === 0 ? (
        <p>No tasks assigned yet.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task._id || task.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '6px',
                padding: '12px',
                marginBottom: '8px',
              }}
            >
              <h3 style={{ margin: '0 0 8px 0' }}>{task.title}</h3>
              <p style={{ margin: '0 0 4px 0' }}>{task.description}</p>
              <span style={{ fontSize: '12px', color: '#666' }}>
                Status: <strong>{task.status}</strong>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}