// pages/events.js
import React from 'react';

const EventPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Upcoming Events</h1>
      <iframe src="https://calendar.google.com/calendar/embed?src=selimovic.s11%40gmail.com&ctz=America%2FChicago" 
              style={{ border: '0', width: '100%', height: '600px' }}
              frameBorder="0"
              scrolling="no"
              allowFullScreen></iframe>
    </div>
  );
};

export default EventPage;
