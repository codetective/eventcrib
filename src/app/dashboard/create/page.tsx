'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import event_categories from '@/utils/event_categories';
import Link from 'next/link';
import CustomBox from '@/components/dashboard/CustomBox';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import CreateEventFormSelect from '@/components/dashboard/create/CreateEventFormSelect';

function Create() {
  const typeOfEvent = useSearchParams()?.get('t');
  const { push } = useRouter();

  function generateCategoryCards() {
    return event_categories.map((category) => (
      <div
        key={category.id}
        className='card  rounded-lg  bg-base-100 shadow-xl p-4'
      >
        <div className='card-body'>
          <h2 className='card-title py-2 font-bold'>{category.title}</h2>
          <p className='text-xs italic'>{category.desc}</p>
          <div className='card-actions flex justify-end mt-5'>
            <Link
              href={`/dashboard/create?t=${category.id}`}
              title={category.title}
              id={category.id}
              className=' block'
            >
              <button className='py-1 px-4 rounded-full text-white bg-orange-700'>
                select
              </button>
            </Link>
          </div>
        </div>
      </div>
    ));
  }

  function checkEventType(event: string | null | undefined) {
    if (!event) return;
    return event_categories.find((category) => category.id === event);
  }

  return (
    <div>
      <CustomBox>
        <h1>Create an event</h1>
        <small>select type of event below to get started</small>
      </CustomBox>
      <CustomBox>
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {generateCategoryCards()}
        </div>
      </CustomBox>
      {checkEventType(typeOfEvent) ? (
        <Rodal
          visible
          closeOnEsc={false}
          onClose={() => push('/dashboard/create')}
          closeMaskOnClick={false}
        >
          <CreateEventFormSelect category={typeOfEvent} />
        </Rodal>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Create;
