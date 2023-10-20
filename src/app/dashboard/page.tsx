import CustomBox from '@/components/dashboard/CustomBox';
import TaskWall from '@/components/dashboard/TaskWall';
import db from '@/utils/db';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

async function createTodo(data: FormData) {
  'use server';
  const session: any = await getServerSession(authOptions);

  const user_address = session!.user.address;

  const task = data.get('task')?.valueOf();
  if (typeof task !== 'string' || task.length === 0) {
    throw new Error('Invalid task');
  }

  await db.todo.create({ data: { task, completed: false, user_address } });
  redirect('/dashboard');
}

async function toggleTodo(id: string, completed: boolean) {
  'use server';

  await db.todo.update({ where: { id }, data: { completed } });
}

async function removeTodo(id: string) {
  'use server';

  await db.todo.delete({ where: { id } });
  redirect('/dashboard');
}

async function Dashboard() {
  const events = await db.event.count();
  const tasks = await db.todo.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div>
      <CustomBox>
        <h1>Dashboard</h1>
        <small>account overview</small>
      </CustomBox>
      <CustomBox>
        <TaskWall
          action={createTodo}
          tasks={tasks}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </CustomBox>
    </div>
  );
}

export default Dashboard;
