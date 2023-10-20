'use client';
import React from 'react';
import { MdClose } from 'react-icons/md';
import { TaskType } from './TaskWall';

const Todo = ({
  todo,
  toggleTodo,
  removeTodo,
}: {
  todo: TaskType;
  toggleTodo: (id: string, complete: boolean) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
}) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center space-x-2'>
        <input
          id={todo.id}
          type='checkbox'
          className='cursor-pointer h-5 w-5 checked:accent-green-500 peer'
          defaultChecked={todo.completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        <label
          htmlFor={todo.id}
          className='cursor-pointer text-xl peer-checked:line-through peer-checked:text-slate-500'
        >
          {todo.task}
        </label>
      </div>
      <div>
        <MdClose
          onClick={() => {
            removeTodo(todo.id);
          }}
          className='cursor-pointer text-red-500 hover:text-orange-500 duration-300 text-3xl'
        />
      </div>
    </div>
  );
};

export default Todo;
