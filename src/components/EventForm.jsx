import React from 'react';

const EventForm = () => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
      <input type="text" placeholder="Event Name" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <textarea placeholder="Event Description" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <button type="submit" style={{ padding: '10px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Create Event
      </button>
    </form>
  );
};

export default EventForm;