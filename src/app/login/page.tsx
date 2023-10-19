import LoginComponent from '@/components/auth/LoginComponent';
import WrapContent from '@/components/common/WrapContent';
import CustomBox from '@/components/dashboard/CustomBox';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';

function LoginPage() {
  return (
    <MainLayout>
      <WrapContent>
        <div className='py-5'>
          <h1 className='px-2 py-5 text-xl capitalize'>Sign In</h1>
          <CustomBox>
            <div className='py-10'>
              <LoginComponent />
            </div>
          </CustomBox>
        </div>
      </WrapContent>
    </MainLayout>
  );
}

export default LoginPage;
