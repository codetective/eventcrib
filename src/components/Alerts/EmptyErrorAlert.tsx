'use client';

import React from 'react';
import { FaExclamation } from 'react-icons/fa';

function EmptyErrorAlert({ text }: { text: string }) {
  return (
    <div className='flex flex-col items-center justify-center gap-3 bg-gray-50 p-10'>
      <div className='text-3xl text-red-500'>
        <FaExclamation />{' '}
      </div>
      <p className='text-xl'>{text}</p>
    </div>
  );
}

export default EmptyErrorAlert;
