import CustomBox from '@/components/dashboard/CustomBox';
import TaskWall from '@/components/dashboard/TaskWall';
import db from '@/utils/db';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import DashboardStats from '@/components/dashboard/DashboardStats';

async function createTodo(data: FormData) {
  'use server';
  const session: any = await getServerSession(authOptions);

  const user_address = session!.user.address;

  const task = data.get('task')?.valueOf();
  if (typeof task !== 'string' || task.length === 0) {
    throw new Error('Invalid task');
  }

  await db.todo.create({ data: { task, completed: false, user_address } });
  data.set('task', '');
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
  const session: any = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  const events_count = await db.event.count({
    where: {
      user_address: {
        equals: session.user.address,
      },
    },
  });
  const tasks = await db.todo.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      user_address: {
        equals: session.user.address,
      },
    },
  });

  return (
    <div>
      <CustomBox>
        <h1>Dashboard</h1>
        <small>account overview</small>
        <hr className='mt-4'></hr>
        <DashboardStats event_count={events_count} />
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
