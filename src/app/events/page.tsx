import WrapContent from '@/components/common/WrapContent';
import EventsGrid from '@/components/events/EventsGrid';
import MainLayout from '@/components/layout/MainLayout';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'All events | EvhentCrib - Web3 event management system',
};

function Events() {
  return (
    <MainLayout>
      <WrapContent>
        <div className='py-5'>
          <h1 className='px-2 py-5 text-xl capitalize'>ALL EVENTS</h1>
        </div>
        <EventsGrid />
      </WrapContent>
    </MainLayout>
  );
}

export default Events;
