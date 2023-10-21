import WrapContent from '@/components/common/WrapContent';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import MainLayout from '@/components/layout/MainLayout';
import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import db from '@/utils/db';
import Image from 'next/image';
import EmptyErrorAlert from '@/components/Alerts/EmptyErrorAlert';

export async function generateMetadata() {
  return {
    title: 'Gallery | EventCrib',
    description: `pictures from all events from different categories`,
  };
}

async function Gallery() {
  const session: any = await getServerSession(authOptions);
  const events = await db.event.findMany({
    where: {
      user_address: session.user.address,
    },
    select: {
      event_name: true,
      id: true,
      start_date: true,
      Gallery: {
        select: {
          image: true,
          id: true,
        },
      },
    },
  });

  return (
    <MainLayout>
      <WrapContent>
        <div className='py-5'>
          <h1 className='px-2 py-5 text-xl capitalize'>EVENTS GALLERY</h1>
        </div>
        <div>
          {events.map((event) => {
            return (
              <div key={event.id} className='border'>
                <div className='bg-gray-50'>
                  <h1 className='pb-3'>from : {event.event_name}</h1>
                  {event.Gallery.length === 0 ? (
                    <EmptyErrorAlert text='no images yet' />
                  ) : (
                    ''
                  )}
                  <div className='grid grid-cols-1 md:grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-2'>
                    {event?.Gallery.map((g) => {
                      return (
                        <div key={g.id}>
                          <div className='flex flex-col rounded-xl bg-white shadow-lg'>
                            <div className='h-[180px] lg:h-[200px]'>
                              <Image
                                unoptimized
                                className='h-full w-full rounded-lg object-cover'
                                src={g.image}
                                alt={event.event_name}
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </WrapContent>
    </MainLayout>
  );
}

export default Gallery;
