// @ts-ignore
import { Web3Storage } from 'web3.storage';

const token = process.env.WEB3STORAGE_TOKEN;

function makeStorageClient() {
  return new Web3Storage({ token });
}

export default makeStorageClient;
