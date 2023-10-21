import React from 'react';

async function saveEventBooking(id: string) {
  'use server';
}

function BookEvent() {
  return (
    <div>
      <button className='rounded-full bg-orange-500 text-white px-5 py-2 text-lg font-bold hover:bg-orange-600'>
        Book event
      </button>
    </div>
  );
}

export default BookEvent;
