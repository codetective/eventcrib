import React from 'react';

function DashboardStats({ event_count = 0 }: { event_count: number }) {
  return (
    <div className='bg-white pt-4'>
      <div className='mx-auto px-6 lg:px-8'>
        <dl className='grid grid-cols-3 gap-x-8 text-center'>
          <div className='mx-auto flex max-w-xs flex-col gap-y-1'>
            <dt className='text-base  text-gray-600'>events created</dt>
            <dd className='order-first text-2xl font-semibold tracking-tight text-gray-900'>
              {event_count}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default DashboardStats;
