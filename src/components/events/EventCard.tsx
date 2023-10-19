import { EventData } from '@/actions/actions';
import Link from 'next/link';
import React from 'react';

const EventCard = ({
  event,
}: {
  event: (EventData & { id: string }) | any;
}) => {
  return (
    <div
      className='flex h-[240px] flex-col justify-center gap-4 rounded-xl bg-[rgba(0,0,0,0.6)] bg-cover bg-center px-2 py-5  text-center font-bold text-white bg-blend-darken'
      key={event.id}
      style={{
        backgroundImage: `url(${event.banner})`,
      }}
    >
      <h2 className='text-lg uppercase'>{event.event_name}</h2>
      <div style={{ lineHeight: 0.8 }}>
        <small className='text-xs'>{event.event_desc}</small>
      </div>
      <Link
        href={`/events/${event.id}
        `}
      >
        <button className='self-center rounded-full  bg-blue-700 p-2 px-5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'>
          Book Now!
        </button>
      </Link>
    </div>
  );
};

export default EventCard;
