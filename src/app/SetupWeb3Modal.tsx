'use client';
import { ethereumClient } from '@/context/WagmiContext';
import { Web3Modal } from '@web3modal/react';

const walletID = process.env.WALLET_CONNECT_PROJECT_ID;
let projectId = walletID!.toString()!;

import React from 'react';

function SetupWeb3Modal() {
  return (
    <>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default SetupWeb3Modal;
