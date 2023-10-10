import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link href='/'>
      <h2 className='flex-1 cursor-pointer text-sm '>
        <span className='text-primary font-semibold text-black'>LO</span>
        <span className='font-semibold text-orange-500'>GO</span>
      </h2>
    </Link>
  );
}

export default Logo;
