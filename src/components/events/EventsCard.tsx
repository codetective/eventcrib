import { EventData } from '@/actions/actions';
import { SplitDate, formatTime } from '@/app/dashboard/events/page';
import getShortMonthName from '@/utils/getShortMonthName';
import Link from 'next/link';
import React from 'react';

function EventsCard({ e, href }: { e: EventData; href: string }) {
  return (
    <div
      key={e.id}
      className='flex flex-col w-full bg-white rounded shadow-lg '
    >
      <div
        className='w-full h-64 md:h-52 bg-top bg-cover rounded-t'
        style={{
          backgroundImage: `url('${e.banner}')`,
        }}
      ></div>
      <div className='flex flex-col w-full md:flex-row'>
        <div className='flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4 md:text-center'>
          <div className='md:text-2xl'>
            {getShortMonthName(parseInt(SplitDate(e.start_date).month))}
          </div>
          <div className='md:text-4xl'>{SplitDate(e.start_date).day}</div>
          <div className='md:text-xl'>{formatTime(e.time)}</div>
        </div>
        <div className='p-4 font-normal text-gray-800 md:w-3/4'>
          <div className='flex items-center'>
            <p className='p-1 w-fit font-bold'>
              {SplitDate(e.start_date).year} <></>
            </p>
            <small className='uppercase'>| {e.category}</small>
          </div>
          <Link href={href}>
            <h1
              style={{
                textDecorationThickness: '1px',
                textUnderlineOffset: '2.5px',
              }}
              className='mb-4 text-xl lg:text-3xl  font-bold leading-none tracking-tight underline  text-gray-800'
            >
              {e.event_name}
            </h1>
          </Link>
          <p className='leading-normal md:text-sm'>{e.event_desc}</p>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
