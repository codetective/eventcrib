import WrapContent from '@/components/common/WrapContent';
import MainLayout from '@/components/layout/MainLayout';
import db from '@/utils/db';
import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import EmptyErrorAlert from '@/components/Alerts/EmptyErrorAlert';
import { FiMapPin } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function MyTickets() {
  const session: any = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }

  const tickets = await db.booking.findMany({
    where: {
      user_address: {
        equals: session.user.address,
      },
    },
    include: {
      event: {
        select: {
          id: true,
          event_name: true,
          start_date: true,
          banner: true,
          price: true,
          location: true,
        },
      },
    },
  });

  return (
    <MainLayout>
      <WrapContent>
        <div className='py-5'>
          <h1 className='px-2 pt-5 text-xl capitalize'>
            MY TICKETS ({tickets.length})
          </h1>
          <small className='pl-3 italic'>
            You can find events you booked here.
          </small>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>
          {tickets.map((ticket) => {
            return (
              <div key={ticket.id}>
                <div className='flex flex-col rounded-xl bg-white shadow-lg'>
                  <div className='h-[180px] lg:h-[200px]'>
                    <Image
                      unoptimized
                      className='h-full w-full rounded-lg object-cover'
                      src={ticket.event.banner}
                      alt={ticket.event.event_name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className='flex items-center gap-4 p-4'>
                    <div className='flex flex-col gap-4'>
                      <Link href={`/events/${ticket.event.id}`}>
                        <h3 className='text-xs font-semibold'>
                          {ticket.event.event_name}
                        </h3>
                      </Link>
                      <div className='flex items-center gap-4'>
                        <span className='text-[#f24726]'>
                          <FiMapPin />
                        </span>
                        <small className='text-xs font-bold'>
                          {ticket.event.location}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {tickets.length === 0 ? (
          <EmptyErrorAlert text='You do not have any tickets yet!' />
        ) : (
          ''
        )}
      </WrapContent>
    </MainLayout>
  );
}

export default MyTickets;
