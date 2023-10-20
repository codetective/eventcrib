'use client';

import React from 'react';
import Todo from './Todo';

export type TaskType = {
  id: string;
  task: string;
  completed: boolean;
  user_address: string;
};

const TaskWall = ({
  tasks: todos,
  action,
  toggleTodo,
  removeTodo,
}: {
  tasks: TaskType[];
  action: (data: FormData) => Promise<void>;
  toggleTodo: (id: string, complete: boolean) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
}) => {
  return (
    <div>
      <div className='flex flex-col  mb-3'>
        <div className='pb-5 text-xl'>
          <h2>Tasks</h2>
          <small className='text-sm'>
            organise tasks for your events here:
          </small>
        </div>
        <form action={action} className='w-full flex'>
          <input
            type='text'
            id='task'
            placeholder='add new task'
            name='task'
            className='w-full rounded-s-lg py-3 pl-4 pr-3 focus:outline bg-gray-200 focus:outline-orange-500 caret-orange-500'
          />
          <button
            className='bg-orange-500 text-white hover:bg-transparent hover:border hover:border-orange-600 hover:text-orange-600 rounded-e-lg px-4'
            type='submit'
          >
            Add
          </button>
        </form>
      </div>
      <div>
        {!todos.length && (
          <div className='text-center text-red-500'>NO TASKS EXIST YET!</div>
        )}
        {todos.length > 0 && (
          <div className='flex flex-col gap-5'>
            {todos.map((task) => (
              <div key={task.id}>
                <Todo
                  todo={task}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskWall;
