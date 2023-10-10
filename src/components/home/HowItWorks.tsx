import React, { ReactNode } from 'react';
import { MdOutlinePersonOutline, MdWorkOutline } from 'react-icons/md';
import { AiOutlineSave } from 'react-icons/ai';
import WrapContent from '../common/WrapContent';
import Link from 'next/link';

const steps = [
  {
    title: 'Connect Wallet',
    text: 'Firstly you have to connect your wallet to the DAPP',
  },

  {
    title: 'Search for Event',
    text: 'Search for an Event in your Area or specific event',
  },
  {
    title: 'Pay and Get NFT Ticket',
    text: 'Pay for the event you want and get NFT Ticket',
  },
];

const HowItWorks = () => {
  return (
    <div id='howitworks' className='py-10 text-3xl'>
      <WrapContent>
        <div className='m-auto items-center px-5 py-10 text-center'>
          <h1 className='font-3xl font-bold'>How it works</h1>
          <p className='mx-auto w-[80%] pt-3 text-sm text-gray-600 lg:w-[60%]'>
            Connect Wallet - Pay - Go! - It&apos;s that simple!
          </p>
          <div className='grid grid-cols-1 gap-5 pt-5 md:grid-cols-3'>
            <HowItWorksCard text={steps[0].text} title={steps[0].title}>
              <div className='rounded-full bg-orange-500 p-2 text-3xl'>
                <MdOutlinePersonOutline className='text-white' />
              </div>
            </HowItWorksCard>
            <HowItWorksCard text={steps[1].text} title={steps[1].title}>
              <div className='rounded-full bg-[#020648] p-2 text-3xl'>
                <MdWorkOutline className='text-white' />
              </div>
            </HowItWorksCard>
            <HowItWorksCard text={steps[2].text} title={steps[2].title}>
              <div className='bg-primary rounded-full bg-[#0CA789] p-2 text-3xl'>
                <AiOutlineSave className='text-white' />
              </div>
            </HowItWorksCard>
          </div>
        </div>
      </WrapContent>
    </div>
  );
};

export default HowItWorks;

function HowItWorksCard({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <div className='flex h-full flex-col items-center space-y-1 rounded-xl bg-white p-3 drop-shadow-md md:p-5'>
      <>{children}</>

      <h3 className='text-xl font-bold'>{title}</h3>

      <p className='text-center text-sm'>{text}</p>
    </div>
  );
}
