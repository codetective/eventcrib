import React from 'react';
import { AiFillHome, AiOutlineOrderedList } from 'react-icons/ai';
import ActiveLink from '../layout/navigation/ActiveLink';
import { MdNewLabel } from 'react-icons/md';
import { FiImage } from 'react-icons/fi';

const Linkclasses =
  'flex items-center hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4';

function DashboardSidebar({ toggle = false }) {
  return (
    <aside
      className={`fixed transition-all ease inset-y-0 left-0 bg-white shadow-md max-h-screen w-60 md:translate-x-0 ${
        toggle ? '' : '-translate-x-full'
      }`}
    >
      <div className='flex flex-col justify-between h-full'>
        <div className='flex-grow'>
          <div className='px-4 py-6 border-b'>
            <h1 className='text-xl font-bold leading-none'>
              <span className='text-gray-800'>Dashboard</span>
            </h1>
          </div>
          <div className='p-4'>
            <ul className='space-y-1'>
              <li>
                <ActiveLink href='/dashboard' className={Linkclasses}>
                  <div className='text-xl px-4'>
                    <AiFillHome />
                  </div>
                  Home
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href='/dashboard/create' className={Linkclasses}>
                  <div className='text-xl px-4'>
                    <MdNewLabel />
                  </div>
                  Create event
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href='/dashboard/events' className={Linkclasses}>
                  <div className='text-xl px-4'>
                    <AiOutlineOrderedList />
                  </div>
                  Your Events
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href='/dashboard/Gallery' className={Linkclasses}>
                  <div className='text-xl px-4'>
                    <FiImage />
                  </div>
                  Gallery
                </ActiveLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
