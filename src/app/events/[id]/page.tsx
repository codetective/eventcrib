import WrapContent from '@/components/common/WrapContent';
import BookEvent from '@/components/events/BookEvent';
import SingleEventViewComponent from '@/components/events/SingleEventViewComponent';
import MainLayout from '@/components/layout/MainLayout';
import db from '@/utils/db';
import React from 'react';

async function SingleEventView({ params }: { params: any }) {
  const event = await db.event.findUnique({ where: { id: params.id } });

  return (
    <MainLayout>
      <WrapContent>
        <div className='py-10 px-2'>
          <SingleEventViewComponent event={event} bookEventSlot={BookEvent} />
        </div>
      </WrapContent>
    </MainLayout>
  );
}

export default SingleEventView;
