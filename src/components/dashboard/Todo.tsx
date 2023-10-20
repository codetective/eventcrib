'use client'
import React, { useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { FaAngleRight } from 'react-icons/fa'

const Todo = ({todo}: {todo: string}) => {
  const [checked, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(prev => !prev);
  }
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center space-x-2'>
        <div className='w-4 h-4 border-2 rounded-sm'>
          <div className='w-full h-full flex items-center justify-center' onClick={handleCheck}>
            {checked && <BiCheck className='text-orange-500 text-7xl font-extrabold' />}
          </div>
        </div>
        <div>{todo}</div>
      </div>
      <div><FaAngleRight className='cursor-pointer hover:text-orange-500 duration-300' /></div>
    </div>
  )
}

export default Todo