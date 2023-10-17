import React from 'react';
import GeneralCreateForm from './GeneralCreateForm';

function CreateEventFormSelect({
  category,
}: {
  category: string | null | undefined;
}) {
  return (
    <div className='h-full w-[99%]'>
      <div className='mb-5'>
        <h1 className='text-xl md:text-2xl'>
          Create new <b>{category}</b> event
        </h1>
        <p className='italic'>fill the form below to continue.</p>
      </div>
      <div style={{ height: '80%' }} className='w-full overflow-y-scroll pr-4'>
        {category && <GeneralCreateForm category={category} />}
      </div>
    </div>
  );
}

export default CreateEventFormSelect;
