'use client';

import React from 'react';
import EventCard from './EventCard';
import { useApp } from '@/context/AppProvider';
import EmptyErrorAlert from '../Alerts/EmptyErrorAlert';

function EventsGrid() {
  const { events } = useApp();

  return (
    <div>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
        {events &&
          events.length !== 0 &&
          events.map((event, idx: number) => (
            <div key={idx + 'kk'}>
              <EventCard event={event} />
            </div>
          ))}
      </div>
      {!events ||
        (events && events.length === 0 && (
          <EmptyErrorAlert text={`Wow, Such empty!`} />
        ))}
    </div>
  );
}

export default EventsGrid;
