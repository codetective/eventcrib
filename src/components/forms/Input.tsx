import React, { HTMLInputTypeAttribute } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input({
  id,
  type,
  placeholder,
  name,
  required = false,
  ...rest
}: InputProps) {
  return (
    <input
      className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white focus:border-orange-500'
      id={id ?? ''}
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      {...rest}
    />
  );
}

export default Input;
