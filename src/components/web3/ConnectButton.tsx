'use client';
import Link from 'next/link';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Spinner from '../common/Spinner';
import { useDisconnect } from 'wagmi';
import { usePathname, useRouter } from 'next/navigation';

function ConnectButton() {
  const { data: session, status }: any = useSession();
  const { disconnectAsync } = useDisconnect();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleLogout = async () => {
    if (pathname?.includes('/dashboard')) {
      disconnectAsync();
      signOut({ callbackUrl: '/' });
      return;
    }
    push('/dashboard');
    return;
  };

  if (status === 'authenticated') {
    return (
      <button
        title={pathname?.includes('/dashboard') ? 'logout' : 'go to dashboard'}
        onClick={handleLogout}
        className='px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full'
      >
        {session ? (
          session.user!.address.slice(0, 8) + '...'
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </button>
    );
  }
  if (status === 'loading') {
    return (
      <button className='px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full'>
        <div>
          <Spinner />
        </div>
      </button>
    );
  }
  return (
    <div className=''>
      {/* <Web3Button label='Connect' /> */}
      <Link href='/login'>
        <button className='px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full'>
          Sign in
        </button>
      </Link>
    </div>
  );
}

export default ConnectButton;
