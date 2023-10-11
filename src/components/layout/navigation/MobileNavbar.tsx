import React from 'react';
import { MdClose } from 'react-icons/md';
import Link from 'next/link';

const MobileNavbar = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: any;
  setOpenMenu: any;
}) => {
  // handle close
  const handleClose = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpenMenu((current: any) => !current);
  };
  return (
    <div
      className={
        openMenu
          ? 'z-80 fixed left-0 top-0 h-screen w-full bg-black/10 duration-50 ease-in-out lg:hidden'
          : 'bg-sm8/60 z-80 duration-50 fixed -left-[100%] top-0 h-screen w-full ease-in-out lg:hidden'
      }
      onClick={handleClose}
    >
      <div
        className={
          openMenu
            ? ' z-80 fixed left-0 top-0 h-screen w-[70%] bg-slate-200 px-3 pt-3  shadow-xl duration-500 ease-in md:w-[50%]'
            : 'z-80 fixed -left-[100%] top-0 h-screen w-[75%] bg-slate-200 px-3 pt-3 shadow-xl  duration-500 ease-in md:w-[55%]'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <div
            onClick={handleClose}
            className='flex h-7 w-7 items-center justify-center rounded-full bg-white'
          >
            <MdClose className='h-6 w-6 text-orange-500' />
          </div>
        </div>
        {/* the side bar tools */}
        <div className='flex flex-col space-y-8 text-xl font-semibold'>
          <Link href='/'>Home</Link>
          <Link href='/events'>All Events</Link>
          <Link href='/create'>Create Event</Link>
          <Link href='/gallery'>Gallery</Link>
          <Link href='/my_tickets'>My Tickets</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
