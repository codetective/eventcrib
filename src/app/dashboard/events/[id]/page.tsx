import CustomBox from '@/components/dashboard/CustomBox';
import db from '@/utils/db';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaLocationArrow } from 'react-icons/fa';
import { SplitDate, formatTime } from '../page';
import getShortMonthName from '@/utils/getShortMonthName';
import { CgOptions } from 'react-icons/cg';
import { MdAttachMoney } from 'react-icons/md';
import { PiUsersBold } from 'react-icons/pi';
import { LuTimerOff } from 'react-icons/lu';

async function SingleEvent({ params }: any) {
  const event = await db.event.findUnique({ where: { id: params.id } });

  return (
    <div>
      <CustomBox>
        <h1 className='font-bold text-2xl'>{event?.event_name}</h1>
        <small className='text-lg'>{event?.event_desc}</small>
      </CustomBox>
      <CustomBox>
        <div className='flex flex-col lg:flex-row-reverse gap-5'>
          <div className='relative p-4 lg:w-[55%] min-h-[400px] bg-gray-50 border'>
            <Image
              className='object-contain'
              fill
              src={event!.banner}
              alt={event!.event_name}
            />
          </div>
          <div className='lg:w-[45%] flex flex-col gap-5'>
            {/* price */}
            <div className='flex gap-2 text-lg items-center'>
              <h2 className='text-xl text-orange-500'>
                <MdAttachMoney />
              </h2>
              <p>{event!.price === 0 ? 'FREE' : '$' + event?.price}</p>
            </div>

            {/* date */}
            <div className='flex gap-2 text-lg items-center'>
              <h2 className='text-xl text-orange-500'>
                <FaCalendarAlt />
              </h2>
              <p>
                {SplitDate(event!.start_date).day +
                  ' ' +
                  getShortMonthName(
                    parseInt(SplitDate(event!.start_date).month)
                  ) +
                  ' ' +
                  SplitDate(event!.start_date).year}
              </p>
            </div>
            {/* type */}

            <div className='flex gap-2 text-lg items-center'>
              <h2 className='text-xl text-orange-500'>
                <CgOptions />
              </h2>
              <p className='capitalize'>{event?.event_type + ' event'} </p>
            </div>

            {/* location */}

            <div className='flex gap-2 text-lg items-center'>
              <h2 className='text-xl text-orange-500'>
                <FaLocationArrow />
              </h2>
              <p>{event?.location}</p>
            </div>

            {/* time */}
            <div className='flex gap-2 text-lg items-center'>
              <h2 className='text-xl text-orange-500'>
                <FaClock />
              </h2>
              <p>{formatTime(event!.time)}</p>
            </div>
            {/* attendees */}
            <div className='flex gap-2 text-lg items-center'>
              <h2 className='text-xl text-orange-500'>
                <PiUsersBold />
              </h2>
              <p>{event!.attendees + ' attendees'}</p>
            </div>

            {/* ending */}
            {event?.end_date && (
              <div className='flex gap-2 text-lg items-center'>
                <h2 className='text-xl text-orange-500'>
                  <LuTimerOff />
                </h2>
                <p>
                  Ends:{' '}
                  {SplitDate(event!.end_date).day +
                    ' ' +
                    getShortMonthName(
                      parseInt(SplitDate(event!.end_date).month)
                    ) +
                    ' ' +
                    SplitDate(event!.end_date).year}
                </p>
              </div>
            )}

            {/* info */}
            <div>
              <h2 className='text-xl underline'>INFO</h2>
              <p>{event?.event_info}</p>
            </div>
          </div>
        </div>
      </CustomBox>
    </div>
  );
}

export default SingleEvent;
