import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../common/Logo';
import ConnectButton from '../web3/ConnectButton';

function DashboardHeader({
  toggle,
  open,
}: {
  toggle: () => void;
  open: boolean;
}) {
  return (
    <header className='fixed right-0 top-0 md:left-60 left-0 bg-gray-50 py-3 px-4 h-16'>
      <>
        <div className='flex items-center justify-between'>
          <div>
            <Logo />
          </div>
          <div className='flex items-center gap-3'>
            <ConnectButton />
            <button
              className='md:hidden text-4xl text-orange-500  rounded-lg hover:text-white transition-colors ease-in-out hover:bg-orange-500'
              onClick={toggle}
            >
              {open ? <AiOutlineClose /> : <BiMenuAltRight />}
            </button>
          </div>
        </div>
      </>
    </header>
  );
}

export default DashboardHeader;
