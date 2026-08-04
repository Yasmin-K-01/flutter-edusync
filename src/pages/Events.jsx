import React from 'react';
import EventForm from '../components/EventForm';

const Events = () => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <p style={{ marginBottom: '20px' }}>Schedule a new event:</p>
      <EventForm />
    </div>
  );
};

export default Events;