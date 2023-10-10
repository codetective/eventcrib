import React from 'react';
import { ReactNode } from 'react';

import { FaTwitter, FaFacebook } from 'react-icons/fa';

import { AiOutlineMail } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import { FiPhoneCall } from 'react-icons/fi';
import Link from 'next/link';
import WrapContent from '@/components/common/WrapContent';
import Logo from '@/components/common/Logo';

const Footer = () => {
  const getFullYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <>
      <div className='bg-gray-50 py-10 text-sm text-gray-700'>
        <WrapContent>
          <div className='grid grid-cols-1 grid-rows-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col items-start gap-4'>
              <span className='font-lg mb-2 font-semibold'>
                <Logo />
              </span>

              <div>
                <p className='text-sm'>
                  The first and best web3 event booking & ticketing system,
                  powered by IPFS!
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start gap-1'>
              <ListHeader>Menu</ListHeader>
              <Link href={'/create'}>Create Event</Link>
              <Link href={'/events'}>All Events</Link>
              <Link href={'/'}>My Tickets</Link>
            </div>
            <div className='flex flex-col items-start gap-1'>
              <ListHeader>Legal</ListHeader>
              <Link href={'#'}>Cookies Policy</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Service</Link>
            </div>
            <div className='flex flex-col items-start gap-1'>
              <ListHeader>Contact</ListHeader>
              <div className='text-sm'>
                <div className='flex items-center gap-2'>
                  <SlLocationPin />

                  <p>Port Harcourt</p>
                </div>
              </div>

              <Link href='tel:+2348165407995'>
                <div className='flex items-center gap-2'>
                  <FiPhoneCall />

                  <p>+2348165407995</p>
                </div>
              </Link>
              <Link href='mailto:adoms@digemart.com'>
                <div className='flex items-center gap-2'>
                  <AiOutlineMail />
                  <p>adoms@digemart.com</p>
                </div>
              </Link>
            </div>
          </div>
        </WrapContent>
      </div>
      <div className='border-t border-t-gray-200 bg-gray-50'>
        <WrapContent className='container mx-auto flex flex-col items-center justify-between gap-4 py-4 md:flex-row'>
          <p>
            © <>{getFullYear()}</> Adom Labs. All rights reserved
          </p>
          <div className='flex items-center gap-6'>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaFacebook />
            </SocialButton>
          </div>
        </WrapContent>
      </div>
    </>
  );
};

export default Footer;

const ListHeader = ({ children }: { children: ReactNode }) => {
  return <p className='font-lg mb-2 font-semibold'>{children}</p>;
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className='ease inline-flex h-8 w-8  cursor-pointer items-center justify-center rounded-full bg-black/10 transition-all duration-300 hover:bg-black/20 '
    >
      <div className='visually-hidden'>{label}</div>
      {children}
    </Link>
  );
};
