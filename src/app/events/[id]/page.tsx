import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import WrapContent from '@/components/common/WrapContent';
import BookEvent from '@/components/events/BookEvent';
import SingleEventViewComponent from '@/components/events/SingleEventViewComponent';
import MainLayout from '@/components/layout/MainLayout';
import db from '@/utils/db';
import { getServerSession } from 'next-auth';
import React from 'react';

async function SingleEventView({ params }: { params: any }) {
  const session: any = await getServerSession(authOptions);

  const event = await db.event.findUnique({
    where: { id: params.id },
    include: {
      Booking: {
        where: {
          user_address: {
            equals: session.user.address,
          },
        },
        select: {
          id: true,
          user_address: true,
        },
      },
    },
  });

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
