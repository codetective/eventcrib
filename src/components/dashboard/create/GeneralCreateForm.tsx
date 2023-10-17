'use client';

import FormLabel from '@/components/forms/FormLabel';
import Input from '@/components/forms/Input';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';

function GeneralCreateForm({ category }: { category: string }) {
  const [imageFile, setImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files![0];
    if (!file) {
      return;
    }
    setImage(file);
  };

  return (
    <form className='w-full flex flex-col gap-5 pb-10'>
      {/* event name */}

      <div className='w-full'>
        <FormLabel name={'name'}>Event Name</FormLabel>
        <Input
          id='name'
          type='text'
          placeholder='eg. Jays Haloween Party'
          name='name'
          required={true}
        />
      </div>

      {/* event desc */}

      <div className='w-full'>
        <FormLabel name={'desc'}>Short description</FormLabel>
        <Input
          id='desc'
          type='text'
          placeholder='eg. haloween party for everyone to attend'
          name='desc'
          required={true}
        />
      </div>
      {/* more info */}

      <div className='w-full'>
        <FormLabel name={'info'}>More Information</FormLabel>
        <textarea
          className='
            block appearance-none  bg-gray-200  border-gray-200 text-gray-700
            resize-none w-full h-32 p-2 border rounded-md focus:bg-white focus:outline-none focus:border-orange-500'
          name='info'
          id='info'
          placeholder='eg. haloween party for everyone to attend'
          required={true}
        />
      </div>

      {/* event type and website  */}

      <div className='flex flex-wrap -mx-3 mb-2'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <FormLabel name='event_type'>Event Type</FormLabel>
          <div className='relative'>
            <select
              className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-orange-500'
              id='event_type'
              name='event_type'
            >
              <option>Physical</option>
              <option>Virtual</option>
              <option>Hybrid</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>

        {/* website */}
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'website'}>Website (if any)</FormLabel>
            <Input
              id='website'
              type='url'
              placeholder='www.....'
              name='website'
            />
          </div>
        </div>
      </div>

      {/* location */}

      <div className='w-full'>
        <FormLabel name={'location'}>Location</FormLabel>
        <Input
          id='location'
          type='text'
          placeholder='Town Hall 6, Vegas'
          name='location'
          required={true}
        />
        <p className='text-xs italic text-gray-500'>
          Enter a live streaming address or a physical location.
        </p>
      </div>

      {/* ticket price and max participants */}

      <div className='flex flex-wrap -mx-3 mb-2'>
        {/* ticket price */}
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'price'}>Ticket Price($)</FormLabel>
            <Input
              id='price'
              type='number'
              placeholder='3'
              name='price'
              min={0.1}
            />
          </div>
        </div>

        {/* attendees */}
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'attendees'}>Maximum Participants</FormLabel>
            <Input
              id='attendees'
              type='number'
              placeholder='100'
              name='attendees'
              min={1}
            />
          </div>
        </div>
      </div>

      {/* date and time */}
      <div className='flex flex-wrap -mx-3 mb-2'>
        {/* start sate */}
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'start_date'}>Event Date</FormLabel>
            <Input
              id='start_date'
              type='date'
              placeholder='05/05/2023'
              name='start_date'
            />
          </div>
        </div>

        {/* end date */}
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'end_date'}>Ending Date</FormLabel>
            <Input
              id='end_date'
              type='date'
              placeholder='05/05/2023'
              name='end_date'
            />
            <p className='text-xs italic text-gray-500'>leave blank if none</p>
          </div>
        </div>

        {/* event time */}
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'event_time'}>Time of Event</FormLabel>
            <Input
              id='event_time'
              type='time'
              placeholder='0800'
              name='event_time'
            />
          </div>
        </div>
      </div>

      {/* image */}

      <div className='flex flex-wrap -mx-3 mb-2'>
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'image'}>Event Banner/Image</FormLabel>
            <Input
              id='image'
              type='file'
              name='image'
              accept='image/*'
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className='w-full md:w-1/2 h-60 relative border border-gray-400 bg-gray-100 px-3 mb-6 md:mb-0'>
          {imageFile ? (
            <Image
              src={URL.createObjectURL(imageFile!)}
              fill
              objectFit='contain'
              alt='viewing image before upload'
            />
          ) : (
            ''
          )}
          <p className='absolute bottom-1 text-red-500 right-1 text-sm italic'>
            {imageFile ? 'preview' : 'no image selected'}
          </p>
        </div>
      </div>
      <div className='flex justify-end'>
        <button className='py-2 px-5 rounded-full text-white bg-green-500'>
          Upload
        </button>
      </div>
    </form>
  );
}

export default GeneralCreateForm;
