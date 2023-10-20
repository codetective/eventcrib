'use client';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import CustomBox from './CustomBox';
import Todo from './Todo';

const TaskWall = () => {
  //const tasks: string[] = [];
  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const handleNewTask = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.stopPropagation();
    setTodo(evt.target.value);
  };
  const handleEnter = (evt: React.FormEvent) => {
    evt.preventDefault();

    setTasks([...tasks, todo]);
    setTodo('');
    //tasks.push(todo);
  };

  return (
    <div>
      <div className='flex items-center mb-3'>
        {/* <label htmlFor="todo"><FaPlus className='px-3 text-red-400 bg-white' /></label> */}
        <form onSubmit={handleEnter} className='w-full'>
          <input
            type='text'
            id='todo'
            placeholder='add new task'
            className='w-full rounded-lg py-3 pl-4 pr-3 focus:outline bg-gray-200 focus:outline-orange-500 caret-orange-500'
            onChange={handleNewTask}
            value={todo}
          />
        </form>
      </div>
      <div>
        {!tasks.length && <div>NO TASKS EXIST YET!</div>}
        {tasks.length > 0 && (
          <div>
            {tasks.map((task, index) => (
              <div key={++index}>
                <CustomBox>
                  <Todo todo={task} />
                </CustomBox>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskWall;
