import EmptyErrorAlert from '@/components/Alerts/EmptyErrorAlert';
import CustomBox from '@/components/dashboard/CustomBox';
import EventsCard from '@/components/events/EventsCard';
import db from '@/utils/db';
import React from 'react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

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
  const session: any = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }
  const events = await db.event.findMany({
    where: {
      user_address: { equals: session?.user?.address },
    },
  });

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
                  <EventsCard
                    key={e.id}
                    e={e}
                    href={`/dashboard/events/${e.id}`}
                  />
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
