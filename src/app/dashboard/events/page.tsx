import EmptyErrorAlert from '@/components/Alerts/EmptyErrorAlert';
import CustomBox from '@/components/dashboard/CustomBox';
import db from '@/utils/db';
import getShortMonthName from '@/utils/getShortMonthName';
import Link from 'next/link';
import React from 'react';

export function SplitDate(date: string) {
  let d = date.split('-');
  return { year: d[0], month: d[1], day: d[2] };
}

export function formatTime(inputTime: string) {
  const [hours, minutes] = inputTime.split(':');
  const hour = parseInt(hours, 10);
  const period = hour < 12 ? 'AM' : 'PM';

  if (hour === 0) {
    return `12:${minutes} AM`; // Midnight
  } else if (hour === 12) {
    return `12:${minutes} PM`; // Noon
  } else {
    return `${hour % 12}:${minutes} ${period}`;
  }
}

async function Events() {
  const events = await db.event.findMany();

  return (
    <div>
      <CustomBox>
        <h1>Your Events</h1>
        <small>all events you&apos;ve created are listed below</small>
      </CustomBox>
      <CustomBox>
        <div className='grid gap-5 md:grid-cols-2 '>
          {events ? (
            <>
              {events.length === 0 ? (
                <EmptyErrorAlert text='so much empty' />
              ) : (
                ''
              )}
              {events.map((e) => {
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
                          {getShortMonthName(
                            parseInt(SplitDate(e.start_date).month)
                          )}
                        </div>
                        <div className='md:text-4xl'>
                          {SplitDate(e.start_date).day}
                        </div>
                        <div className='md:text-xl'>{formatTime(e.time)}</div>
                      </div>
                      <div className='p-4 font-normal text-gray-800 md:w-3/4'>
                        <p className='p-1 w-fit font-bold'>
                          {SplitDate(e.start_date).year}
                        </p>
                        <Link href={`/dashboard/events/${e.id}`}>
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
                        <p className='leading-normal md:text-sm'>
                          {e.event_info}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            ''
          )}
        </div>
      </CustomBox>
    </div>
  );
}

export default Events;
