import React from 'react';
import Link from 'next/link';

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-[#1F3578] bg-[url('/images/bannerbackground.png')] bg-fixed bg-cover bg-no-repeat text-center text-white bg-blend-overlay">
      <h1 className='text-6xl font-semibold leading-[1.2]'>
        Bring your events <br />
        <span className='rounded-lg px-3 text-[#f24726]'>on-chain!</span>{' '}
      </h1>
      <p className='text-lg'>
        Eventcrib is the first and best web3 event management system <br />
        powered by IPFS!
      </p>
      <div className='my-10 flex items-center gap-5 font-bold'>
        <Link href='/dashboard'>
          <button className=' rounded-lg bg-[#f24726] p-4 text-white hover:bg-[#f24726]/80'>
            Create an event
          </button>
        </Link>
        <Link href='#howitworks'>
          <button className='rounded-lg bg-transparent p-4 text-white hover:bg-black/80'>
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
