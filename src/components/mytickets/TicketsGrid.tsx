'use client';

import React, { useState } from 'react';
import NoWalletAlert from '../Alerts/NoWalletAlert';
import { useNetwork } from 'wagmi';
import EmptyErrorAlert from '../Alerts/EmptyErrorAlert';
import LoadingSpinner from '../loader/LoadingSpinner';
import Ticket from './Ticket';

function TicketsGrid() {
  const { chain } = useNetwork();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  //todo - fix types
  const nft: any[] = [];

  const CONN_EMPTY = chain && !loading && data && data.length === 0;

  return (
    <div>
      {chain && !loading && data.length > 0 && (
        <div className='grid grid-cols-1 gap-5 pb-20 md:grid-cols-2 lg:grid-cols-3'>
          {nft?.map((ticket: any) => {
            return <Ticket key={Number(BigInt(ticket))} data={ticket} />;
          })}
        </div>
      )}
      {!chain && <NoWalletAlert />}
      {CONN_EMPTY && <EmptyErrorAlert text={'Wow, So much empty!'} />}
      {loading && <LoadingSpinner size='md' />}
    </div>
  );
}

export default TicketsGrid;
