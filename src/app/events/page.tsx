import WrapContent from '@/components/common/WrapContent';
import EventsGrid from '@/components/events/EventsGrid';
import MainLayout from '@/components/layout/MainLayout';
import db from '@/utils/db';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'All events | EvhentCrib - Web3 event management system',
};

async function Events() {
  const allEvents = await db.event.findMany();

  return (
    <MainLayout>
      <WrapContent>
        <div className='py-10 px-2'>
          <h1 className=' text-xl capitalize'>ALL EVENTS</h1>
          <small className='italic text-sm'>
            a total of {allEvents.length} events found
          </small>
        </div>
        <EventsGrid allEvents={allEvents} />
      </WrapContent>
    </MainLayout>
  );
}

export default Events;
