import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import EmptyErrorAlert from '@/components/Alerts/EmptyErrorAlert';
import CustomBox from '@/components/dashboard/CustomBox';
import GalleryGridView from '@/components/dashboard/gallery/GalleryGridView';
import db from '@/utils/db';
import { getServerSession } from 'next-auth';
import React from 'react';
import { SplitDate } from '../events/page';
import getShortMonthName from '@/utils/getShortMonthName';
import Link from 'next/link';

async function Gallery() {
  const session: any = await getServerSession(authOptions);

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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {events.map((e) => {
              return (
                <div key={e.id} className='rounded-xl border '>
                  <div className=' p-4'>
                    <h3
                      style={{
                        fontVariant: 'small-caps',
                      }}
                      className='font-semibold text-xl mb-2'
                    >
                      {e.event_name}
                    </h3>
                    <div className='flex gap-1'>
                      <small>{SplitDate(e.start_date).day}</small>
                      <small>
                        {getShortMonthName(
                          parseInt(SplitDate(e.start_date).month)
                        )}
                      </small>
                      <small>{SplitDate(e.start_date).year}</small>
                    </div>
                  </div>
                  <div className='bg-gray-100 py-2 px-4 text-sm flex justify-between items-center'>
                    <Link className='cursor-pointer' href=''>
                      View All
                    </Link>
                    <Link className='cursor-pointer' href=''>
                      Add Image
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CustomBox>
    </div>
  );
}

export default Gallery;
