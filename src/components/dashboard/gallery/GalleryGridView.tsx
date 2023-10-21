'use client';

import React, { useState } from 'react';
import getShortMonthName from '@/utils/getShortMonthName';
import UploadImageModal from '@/components/dashboard/gallery/UploadImageModal';
import { SplitDate } from '@/app/dashboard/events/page';
import { useRouter } from 'next/navigation';

function GalleryGridView({
  events,
}: {
  events: {
    id: string;
    event_name: string;
    start_date: string;
  }[];
}) {
  const [current, setCurrent] = useState<{
    id: string;
    event_name: string;
    start_date: string;
  } | null>(null);

  const { push } = useRouter();

  return (
    <>
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
                    {getShortMonthName(parseInt(SplitDate(e.start_date).month))}
                  </small>
                  <small>{SplitDate(e.start_date).year}</small>
                </div>
              </div>
              <div className='bg-gray-100 py-2 px-4 text-sm flex justify-between items-center'>
                <div
                  onClick={() => {
                    push('/dashboard/gallery/' + e.id);
                  }}
                  className='cursor-pointer hover:text-orange-500'
                >
                  View All
                </div>
                <div
                  onClick={() => {
                    setCurrent(e);
                  }}
                  className='cursor-pointer hover:text-orange-500'
                >
                  Add Image
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <UploadImageModal
        evt={current}
        close={() => {
          setCurrent(null);
        }}
      />
    </>
  );
}

export default GalleryGridView;
