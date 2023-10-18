import CustomBox from '@/components/dashboard/CustomBox';
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
        <h1></h1>
      </CustomBox>
    </div>
  );
}

export default Dashboard;
