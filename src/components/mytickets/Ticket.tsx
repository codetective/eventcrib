import Image from 'next/image';

type TicketDataType = {
  price: number;
  image: string;
  title: string;
  startdate: string;
  desc: string;
};

const formatDate = (date: any) => {
  let d = new Date(date);
  return d.toDateString();
};

const Ticket = ({ data }: any) => {
  const NFTData: TicketDataType | null = null;

  const { price, image, title, startdate, desc } = NFTData!;

  return (
    <div className='relative flex flex-col rounded-lg bg-white shadow-lg'>
      {NFTData && (
        <>
          <div className='absolute left-[10px] top-[20px] rounded-lg bg-white px-2 py-1 font-bold text-gray-800 shadow-lg'>
            ${NFTData && price}
          </div>
          <div className='h-[150px] lg:h-[180px] xl:h-[200px]'>
            <Image
              height='100'
              width='100'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              className='rounded-lg'
              unoptimized
              src={NFTData && image}
              alt={NFTData && title}
            />
          </div>
          <div className='flex items-start gap-4 p-5'>
            <div className='w-[20%] text-center text-xs font-bold'>
              {NFTData && formatDate(startdate)}
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='text-xs font-semibold'>{NFTData && title}</h3>
              <p>{NFTData && desc}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Ticket;
