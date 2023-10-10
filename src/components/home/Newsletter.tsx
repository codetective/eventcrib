import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <section className='bg-[#1F3578]/50 pb-8 lg:pb-12'>
      <div className='mx-auto w-full px-2 py-8 md:max-w-[90%] lg:max-w-[80%] lg:px-0 xl:max-w-[65%]'>
        <div className='pt-5'>
          <h2 className='text-center font-bold'>Newsletter</h2>
          <p className='mx-auto w-full px-3 pb-5 text-center text-xs sm:w-[80%] sm:px-0 md:text-sm lg:w-[60%]'>
            Subscribe to our Newsletter to get latest updates from our products,
            you will be the first to know our great offers
          </p>
          <div className='mx-auto flex w-full space-x-1 px-3 sm:w-[80%] sm:space-x-3 lg:w-[50%]'>
            <div className='relative w-full'>
              <input
                type='text'
                placeholder='Enter your email address'
                className='w-full rounded-sm bg-white py-1 pl-7 pr-9 text-sm text-gray-800 outline-none ring-1 ring-gray-200 placeholder:text-xs placeholder:text-gray-300 md:text-base'
              />
              <AiOutlineMail className='absolute left-2 top-1.5 text-gray-600 lg:top-2.5' />
            </div>
            <button className=' right-2 rounded-sm bg-orange-500 px-3 py-1 text-sm text-white ring-1 ring-orange-500 lg:rounded-md'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
