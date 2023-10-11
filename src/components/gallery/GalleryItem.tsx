import { FiMapPin } from 'react-icons/fi';
import Image from 'next/image';

export type GalleryItemProps = {
  title: string;
  image: string;
  location: string;
};

const GalleryItem = ({ item }: { item: GalleryItemProps }) => {
  return (
    <div className='flex flex-col rounded-xl bg-white shadow-lg'>
      <div className='h-[180px] lg:h-[200px]'>
        <Image
          unoptimized
          className='h-full w-full rounded-lg object-cover'
          src={item.image}
          alt={item.title}
          width={100}
          height={100}
        />
      </div>
      <div className='flex items-center gap-4 p-4'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-xs font-semibold'>{item.title}</h3>
          <div className='flex items-center gap-4'>
            <span className='text-[#f24726]'>
              <FiMapPin />
            </span>
            <small className='text-xs font-bold'>{item.location}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
