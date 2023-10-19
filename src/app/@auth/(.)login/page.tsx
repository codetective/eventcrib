'use client';

import LoginComponent from '@/components/auth/LoginComponent';
import { useRouter } from 'next/navigation';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

function LoginModal() {
  const { back } = useRouter();

  return (
    <>
      <Rodal
        visible
        closeOnEsc={false}
        onClose={() => back()}
        closeMaskOnClick={false}
        className='wallet_modal'
        customStyles={{
          borderRadius: '30px',
          ZIndex: 0,
        }}
      >
        <LoginComponent />
      </Rodal>
    </>
  );
}

export default LoginModal;
