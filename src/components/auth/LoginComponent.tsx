'use client';
import React from 'react';
import { SiweMessage } from 'siwe';
import { polygonMumbai } from 'viem/chains';
import { useAccount, useSignMessage } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';
import { getCsrfToken, signIn } from 'next-auth/react';

function LoginComponent() {
  const [mounted, setMounted] = React.useState(false);
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const { signMessageAsync } = useSignMessage();
  const [hasSigned, setHasSigned] = React.useState(false);

  const handleSign = async () => {
    if (!isConnected) open();
    try {
      const message = new SiweMessage({
        domain: window.location.host,
        uri: window.location.origin,
        version: '1',
        address: address,
        statement: process.env.NEXT_PUBLIC_SIGNIN_MESSAGE,
        nonce: await getCsrfToken(),
        chainId: polygonMumbai.id,
      });

      const signedMessage = await signMessageAsync({
        message: message.prepareMessage(),
      });

      setHasSigned(true);

      const response = await signIn('web3', {
        message: JSON.stringify(message),
        signedMessage,
        redirect: true,
        callbackUrl: '/dashboard',
      });
      if (response?.error) {
        console.log('Error occured:', response.error);
      }
    } catch (error) {
      console.log('Error Occured', error);
    }
  };

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <></>;
  return (
    <div className='flex items-center  flex-col justify-center h-full w-full'>
      {!isConnected && (
        <>
          <h2 className='text-4xl mb-5 text-center font-semibold text-gray-400'>
            Connect wallet to proceed
          </h2>

          <button
            className='rounded-lg py-2 px-4 text-white hover:text-blue-800 bg-blue-700 hover:border hover:border-blue-700 hover:bg-transparent'
            onClick={() => open()}
          >
            Connect Wallet
          </button>
        </>
      )}
      {isConnected && !hasSigned && (
        <>
          <p className='text-xl font-semibold text-gray-400'>
            {address?.slice(0, 8)}... connected
          </p>
          <button
            className='rounded-full hover:text-purple-800 py-2 text-white px-4 mt-2 bg-violet-700 hover:border hover:border-violet-700 hover:bg-transparent'
            onClick={handleSign}
          >
            Sign Message to continue
          </button>
          <button
            className='rounded-full py-2 px-4 mt-2 text-white hover:text-red-800 bg-red-300 hover:border hover:border-orange-700 hover:bg-transparent'
            onClick={() => open()}
          >
            Disconnect Wallet
          </button>
        </>
      )}
      {isConnected && hasSigned && (
        <p>You are being authenticated. Please wait...</p>
      )}
    </div>
  );
}

export default LoginComponent;
