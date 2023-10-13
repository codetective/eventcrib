'use client';

import WrapContent from '@/components/common/WrapContent';
import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';
import React from 'react';

const TicketsGrid = dynamic(
  () => import('@/components/mytickets/TicketsGrid'),
  {
    ssr: false,
  }
);

function MyTickets() {
  return (
    <MainLayout>
      <WrapContent>
        <div className='py-5'>
          <h1 className='px-2 py-5 text-xl capitalize'>MY TICKETS</h1>
          <span className='pl-3 italic'>
            To view NFT on other networks, switch connected network
          </span>
        </div>
        <TicketsGrid />
      </WrapContent>
    </MainLayout>
  );
}

export default MyTickets;
