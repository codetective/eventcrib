import Link from 'next/link';
import React from 'react';
import { FaExclamation } from 'react-icons/fa';
import WrapContent from '../common/WrapContent';
import { getRecentEvents } from '@/actions/actions';
import EventsGrid from '../events/EventsGrid';

const RecentEvents = async () => {
  const events = await getRecentEvents();

  return (
    <div className='bg-[#1F3578]/50 pb-10'>
      <WrapContent>
        <div className='mx-auto mt-4 w-full px-2'>
          <div className='flex items-center justify-between px-1 py-5'>
            <p className='text-md pt-3 font-bold capitalize text-black md:text-base'>
              RECENT EVENTS
            </p>
            <Link href='/events' passHref>
              <p className='text-sm font-medium capitalize text-gray-900 md:text-sm'>
                View all
              </p>
            </Link>
          </div>
          {events.length !== 0 ? <EventsGrid allEvents={events} /> : ''}
          {events.length === 0 && (
            <div className='flex flex-col items-center justify-center gap-3 p-5'>
              <div className='text-3xl'>
                <FaExclamation />
              </div>
              <p className='lg'>No events yet, check back later</p>
            </div>
          )}
        </div>
      </WrapContent>
    </div>
  );
};

export default RecentEvents;
