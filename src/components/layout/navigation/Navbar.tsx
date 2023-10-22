'use client';
import Logo from '@/components/common/Logo';
import ConnectButton from '@/components/web3/ConnectButton';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import MobileNavbar from './MobileNavbar';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='border-b border-[#f3f4f6] bg-white shadow-sm'>
      <div className='lg:container mx-auto flex items-center justify-between bg-white px-5 py-5'>
        <div className='logo'>
          <Logo />
        </div>
        <div className='flex flex-row space-x-3'>
          <div className='hidden items-center space-x-5 sm:space-x-4 md:flex'>
            <Link href='/'>Home</Link>
            <Link href='/events'>All Events</Link>
            <Link href='/dashboard'>Create Event</Link>
            <Link href='/gallery'>Gallery</Link>
            <Link href='/my_tickets'>My tickets</Link>
          </div>
          <ConnectButton />

          <div className='text-orange-500 duration-300 ease-in  flex items-center justify-center md:hidden'>
            <button
              className='p-0 text-orange-500'
              aria-label='mobile-nav'
              onClick={() => setOpenMenu((current) => !current)}
            >
              <span style={{ fontSize: '25px' }}>
                {openMenu ? <MdClose /> : <MdMenu />}
              </span>
            </button>
          </div>
        </div>
      </div>
      <MobileNavbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </nav>
  );
}

export default Navbar;
