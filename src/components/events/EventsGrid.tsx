import React from 'react';
import EmptyErrorAlert from '../Alerts/EmptyErrorAlert';
import { EventData } from '@/actions/actions';
import EventsCard from './EventsCard';

function EventsGrid({ allEvents }: { allEvents: EventData[] }) {
  return (
    <div>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
        {allEvents &&
          allEvents.length !== 0 &&
          allEvents.map((event) => (
            <div key={event.id}>
              <EventsCard e={event} href={`/events/${event.id}`} />
            </div>
          ))}
      </div>
      {!allEvents ||
        (allEvents && allEvents.length === 0 && (
          <EmptyErrorAlert text={`Wow, Such empty!`} />
        ))}
    </div>
  );
}

export default EventsGrid;
