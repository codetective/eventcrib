'use client';
import { saveEventBooking } from '@/actions/actions';
import polygonCtx from '@/config/contracts';
import { useSession } from 'next-auth/react';
import React from 'react';
import toast from 'react-hot-toast';
import { polygonMumbai } from 'viem/chains';
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';

function BookEvent({
  eventId,
  booking,
}: {
  eventId: string;
  booking: boolean;
}) {
  const { data: session }: any = useSession();
  const { config } = usePrepareContractWrite({
    address: polygonCtx.address,
    abi: polygonCtx.abi,
    functionName: 'purchaseTickets',
    chainId: polygonMumbai.id,
    args: [eventId, 1],
  });

  const contractWrite = useContractWrite(config);
  const waitTf = useWaitForTransaction({
    hash: contractWrite.data?.hash,
  });

  async function bookEvent() {
    await saveEventBooking(eventId, session?.user.address);
    toast('accept transaction in wallet');
    contractWrite.write?.();
  }

  return (
    <div>
      {booking ? (
        <button
          disabled
          className='rounded-full disabled:bg-green-500 text-white px-5 py-2 text-lg font-bold '
        >
          Booked!
        </button>
      ) : (
        <button
          onClick={bookEvent}
          disabled={waitTf.isLoading || waitTf.isSuccess}
          className='rounded-full disabled:bg-green-500 bg-orange-500 text-white px-5 py-2 text-lg font-bold hover:bg-orange-600'
        >
          {waitTf.isSuccess ? 'Booked!' : 'Book event'}
        </button>
      )}
    </div>
  );
}

export default BookEvent;
