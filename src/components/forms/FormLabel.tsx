import React, { ReactNode } from 'react';

function FormLabel({ children, name }: { children: ReactNode; name: string }) {
  return (
    <label
      className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
      htmlFor={name}
    >
      {children}
    </label>
  );
}

export default FormLabel;
