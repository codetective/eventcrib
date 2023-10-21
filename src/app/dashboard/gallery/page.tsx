import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import EmptyErrorAlert from '@/components/Alerts/EmptyErrorAlert';
import CustomBox from '@/components/dashboard/CustomBox';
import db from '@/utils/db';
import { getServerSession } from 'next-auth';
import React from 'react';
import GalleryGridView from '@/components/dashboard/gallery/GalleryGridView';
import { redirect } from 'next/navigation';

async function Gallery() {
  const session: any = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }
  const events = await db.event.findMany({
    where: {
      user_address: {
        equals: session.user.address,
      },
    },
    select: {
      event_name: true,
      id: true,
      start_date: true,
    },
  });

  return (
    <div>
      <CustomBox>
        <h1>Event Gallery</h1>
        <small>here you can add or manage pictures from your events</small>
      </CustomBox>
      <CustomBox>
        {events.length === 0 ? (
          <EmptyErrorAlert text='You have no events, create one to upload images!' />
        ) : (
          <GalleryGridView events={events} />
        )}
      </CustomBox>
    </div>
  );
}

export default Gallery;
