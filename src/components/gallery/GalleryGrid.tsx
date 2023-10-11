import React from 'react';
import { mockTickets } from '@/utils/mockData';
import GalleryItem from './GalleryItem';

function GalleryGrid() {
  return (
    <div className='grid grid-cols-1 gap-8 pb-20 sm:grid-cols-2 lg:grid-cols-3'>
      {mockTickets?.map((ticket) => (
        <GalleryItem key={ticket.id} item={ticket} />
      ))}
    </div>
  );
}

export default GalleryGrid;
