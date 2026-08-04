import React, { useEffect, useState } from 'react';

export default function MentorAnalytics() {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/mentor/analytics', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading analytics data...</div>;
  }

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Mentor Analytics</h1>
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', minWidth: '150px' }}>
          <h3>Total Tasks</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{stats.totalTasks}</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', minWidth: '150px' }}>
          <h3>Completed Tasks</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'green' }}>{stats.completedTasks}</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', minWidth: '150px' }}>
          <h3>Pending Tasks</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'orange' }}>{stats.pendingTasks}</p>
        </div>
      </div>
    </div>
  );
}