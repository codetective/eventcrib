import EmptyErrorAlert from '@/components/Alerts/EmptyErrorAlert';
import WrapContent from '@/components/common/WrapContent';
import EventsGrid from '@/components/events/EventsGrid';
import MainLayout from '@/components/layout/MainLayout';
import db from '@/utils/db';
import React from 'react';

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props) {
  return {
    title: params.category + ' events on EventCrib',
    description: `Searching for ${params.category} events on eventcrib`,
  };
}

async function CategoryView({ params }: Props) {
  const events = await db.event.findMany({
    where: {
      category: {
        equals: params.category,
      },
    },
  });
  return (
    <MainLayout>
      <WrapContent>
        <div className='py-5'>
          <h1 className='px-2 py-5 text-xl capitalize'>
            {params.category} Events
          </h1>
          <div>
            {events.length === 0 ? (
              <EmptyErrorAlert text='no events found for this category' />
            ) : (
              <>
                <EventsGrid allEvents={events} />
              </>
            )}
          </div>
        </div>
      </WrapContent>
    </MainLayout>
  );
}

export default CategoryView;
