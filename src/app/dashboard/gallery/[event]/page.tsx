import CustomBox from '@/components/dashboard/CustomBox';
import db from '@/utils/db';
import React from 'react';
import Image from 'next/image';

async function EventGallery({ params }: { params: { event: string } }) {
  const event = await db.event.findFirst({
    where: {
      id: {
        equals: params.event,
      },
    },
    select: {
      event_name: true,
      Gallery: {
        select: {
          image: true,
          id: true,
        },
      },
    },
  });

  return (
    <div>
      <CustomBox>
        <h1>Pictures for : {event?.event_name} </h1>
      </CustomBox>
      <CustomBox>
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
      </CustomBox>
    </div>
  );
}

export default EventGallery;
