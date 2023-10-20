import CustomBox from '@/components/dashboard/CustomBox';
import TaskWall from '@/components/dashboard/TaskWall';
import db from '@/utils/db';
import React from 'react';

async function Dashboard() {
  const events = await db.event.findMany();

  return (
    <div>
      <CustomBox>
        <h1>Dashboard</h1>
        <small>account overview</small>
      </CustomBox>
      <CustomBox>
        <TaskWall />
      </CustomBox>
    </div>
  );
}

export default Dashboard;
