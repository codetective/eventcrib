import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { ReactNode } from 'react';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';

const walletID = process.env.WALLET_CONNECT_PROJECT_ID;
let projectId = walletID!.toString()!;

const chains = [polygonMumbai];

const { publicClient } = configureChains(chains, w3mProvider({ projectId }));
const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(config, chains);

function WagmiProvider({ children }: { children: ReactNode }) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}

export default WagmiProvider;
