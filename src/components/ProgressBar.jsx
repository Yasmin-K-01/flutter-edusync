import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
      <div 
        style={{ 
          width: `${progress}%`, 
          backgroundColor: progress > 75 ? '#10b981' : progress > 40 ? '#f59e0b' : '#ef4444', 
          height: '10px',
          transition: 'width 0.3s ease'
        }} 
      />
    </div>
  );
};

export default ProgressBar;