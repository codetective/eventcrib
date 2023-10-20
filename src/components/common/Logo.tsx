import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link href='/'>
      <div className='flex-1 cursor-pointer relative  w-32 h-[30px]'>
        <Image src='/images/logo.png' alt='logo' fill />
      </div>
    </Link>
  );
}

export default Logo;
