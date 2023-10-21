'use client';
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import FormLabel from '@/components/forms/FormLabel';
import Input from '@/components/forms/Input';
import Image from 'next/image';
import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from '@/components/common/Spinner';
import { createEventInDB } from '@/actions/actions';
import { redirect, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import polygonCtx from '@/config/contracts';
import makeGatewayURL from '@/utils/makeGatewayURL';
import makeStorageClient from '@/utils/makeStorageClient';
import { polygonMumbai } from 'viem/chains';

type FormStateType = {
  attendees: number | string;
  end_date: string;
  event_desc: string;
  event_info: string;
  event_name: string;
  event_type: string;
  location: string;
  price: number | string;
  start_date: string;
  time: string;
  website: string;
};

type ChainArgs = {
  eventId: string;
  name: string;
  ticketPrice: number;
  totalTickets: number;
};

function GeneralCreateForm({ category }: { category: string }) {
  const { push } = useRouter();
  const { data: session }: any = useSession();
  const [imageFile, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormStateType>({
    event_name: '',
    event_desc: '',
    event_info: '',
    event_type: 'physical',
    website: '',
    location: '',
    price: 0,
    attendees: 0,
    start_date: '',
    end_date: '',
    time: '',
  });
  const [chainArgs, setArgs] = useState<ChainArgs | null>(null);
  const { config } = usePrepareContractWrite({
    address: polygonCtx.address,
    abi: polygonCtx.abi,
    functionName: 'createEvent',
    chainId: polygonMumbai.id,
    args: [
      chainArgs?.eventId,
      chainArgs?.name,
      chainArgs?.ticketPrice,
      chainArgs?.totalTickets,
    ],
  });
  const contractWrite = useContractWrite(config);
  const waitTf = useWaitForTransaction({
    hash: contractWrite.data?.hash,
  });

  async function callCtx() {
    toast('accept transaction in wallet');
    contractWrite.write!();
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files![0];
    if (!file) {
      return;
    }
    if (file.size > 1 * 1000 * 1024) {
      toast.error('File with maximum size of 1MB is allowed');
      return;
    }
    setImage(file);
  };
  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>
  ) => {
    let name = e.target.name;
    let value =
      name === 'price' || name === 'attendees'
        ? Number(e.target.value).toString()
        : e.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const storeImage = async () => {
    //store image first
    if (!imageFile) {
      toast.error('Please select a validimage');
      return;
    }
    setLoading(true);
    try {
      const client = makeStorageClient();
      let file = imageFile;
      let fileName = file!.name;
      const imgCID = await client.put([file], { name: fileName });
      const imgURL = makeGatewayURL(imgCID, fileName);
      return imgURL;
    } catch (error) {
      return null;
    }
  };

  const storeEvent: FormEventHandler<HTMLFormElement> = async (e) => {
    console.log('submitting ...');
    e.preventDefault();
    let imageLink = await storeImage();
    if (!imageLink) {
      toast.error('An error occurred while saving image');
      setLoading(false);
      return;
    }

    let data = {
      ...formData,
      banner: imageLink as string,
      user_address: session.user.address,
      attendees: parseInt(formData.attendees as string),
      price: parseInt(formData.price as string),
      category: category,
    };

    const res = await createEventInDB(data);

    if (!res) {
      toast.error('Something went wrong while saving to database');
      setLoading(false);
      return;
    }
    //store to chain
    setArgs({
      eventId: res,
      name: formData.event_name,
      ticketPrice: parseInt(formData.price as string),
      totalTickets: parseInt(formData.attendees as string),
    });

    setLoading(false);
    // push('/dashboard/events');
  };

  if (waitTf.isSuccess) {
    toast.success('event submitted to blockchain, confirm in wallet!!');
    redirect('/dashboard/events');
  }

  return (
    <form
      className='w-full flex flex-col gap-5 pb-10'
      id='create_form'
      onSubmit={storeEvent}
    >
      {/* event name */}

      <div className='w-full'>
        <FormLabel name={'name'}>Event Name</FormLabel>
        <Input
          id='name'
          type='text'
          placeholder='eg. Jays Haloween Party'
          name='event_name'
          value={formData.event_name}
          onChange={handleFieldChange}
          required={true}
        />
      </div>

      {/* event desc */}

      <div className='w-full'>
        <FormLabel name={'desc'}>Short description</FormLabel>
        <Input
          id='desc'
          type='text'
          placeholder='eg. haloween party for everyone to attend'
          name='event_desc'
          value={formData.event_desc}
          onChange={handleFieldChange}
          required={true}
        />
      </div>
      {/* more info */}

      <div className='w-full'>
        <FormLabel name={'info'}>More Information</FormLabel>
        <textarea
          className='
            block appearance-none  bg-gray-200  border-gray-200 text-gray-700
            resize-none w-full h-32 p-2 border rounded-md focus:bg-white focus:outline-none focus:border-orange-500'
          name='event_info'
          value={formData.event_info}
          onChange={handleFieldChange}
          id='info'
          placeholder='eg. haloween party for everyone to attend'
          required={true}
        />
      </div>

      {/* event type and website  */}

      <div className='flex flex-wrap -mx-3 mb-2'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <FormLabel name='event_type'>Event Type</FormLabel>
          <div className='relative'>
            <select
              className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-orange-500'
              id='event_type'
              name='event_type'
              value={formData.event_type}
              onChange={handleFieldChange}
            >
              <option value='physical'>Physical</option>
              <option value='virtual'>Virtual</option>
              <option value='hybrid'>Hybrid</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>

        {/* website */}
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'website'}>Website (if any)</FormLabel>
            <Input
              id='website'
              type='url'
              placeholder='www.....'
              name='website'
              value={formData.website}
              onChange={handleFieldChange}
            />
          </div>
        </div>
      </div>

      {/* location */}

      <div className='w-full'>
        <FormLabel name={'location'}>Location</FormLabel>
        <Input
          id='location'
          type='text'
          placeholder='Town Hall 6, Vegas'
          name='location'
          value={formData.location}
          onChange={handleFieldChange}
          required={true}
        />
        <p className='text-xs italic text-gray-500'>
          Enter a live streaming address or a physical location.
        </p>
      </div>

      {/* ticket price and max participants */}

      <div className='flex flex-wrap -mx-3 mb-2'>
        {/* ticket price */}
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'price'}>Ticket Price($)</FormLabel>
            <Input
              id='price'
              type='number'
              placeholder='3'
              name='price'
              value={formData.price}
              onChange={handleFieldChange}
              min={0}
            />
          </div>
        </div>

        {/* attendees */}
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'attendees'}>Maximum Participants</FormLabel>
            <Input
              id='attendees'
              type='number'
              placeholder='100'
              name='attendees'
              value={formData.attendees}
              onChange={handleFieldChange}
              min={1}
            />
          </div>
        </div>
      </div>

      {/* date and time */}
      <div className='flex flex-wrap -mx-3 mb-2'>
        {/* start sate */}
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'start_date'}>Event Date</FormLabel>
            <Input
              id='start_date'
              type='date'
              placeholder='05/05/2023'
              name='start_date'
              value={formData.start_date}
              onChange={handleFieldChange}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
        </div>

        {/* end date */}
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'end_date'}>Ending Date</FormLabel>
            <Input
              id='end_date'
              type='date'
              placeholder='05/05/2023'
              name='end_date'
              value={formData.end_date}
              onChange={handleFieldChange}
              min={new Date().toISOString().split('T')[0]}
            />
            <p className='text-xs italic text-gray-500'>leave blank if none</p>
          </div>
        </div>

        {/* event time */}
        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'event_time'}>Time of Event</FormLabel>
            <Input
              id='time'
              type='time'
              placeholder='0800'
              name='time'
              value={formData.time}
              onChange={handleFieldChange}
              required
            />
          </div>
        </div>
      </div>

      {/* image */}

      <div className='flex  -mx-3 mb-2'>
        <div className='w-full md:w-[40%] px-3 mb-6 md:mb-0'>
          <div className='w-full'>
            <FormLabel name={'image'}>Event Banner/Image</FormLabel>
            <Input
              id='image'
              type='file'
              name='image'
              accept='image/*'
              onChange={handleImageChange}
            />
            {/* {imageUrl === '' ? (
              <SubmitImage image={imageFile} setImageUrl={setImageUrl} />
            ) : (
              ''
            )} */}
          </div>
        </div>
        {/* preview image bos */}
        <div className='w-full md:w-[60%] h-60 relative border border-gray-400 bg-gray-100 px-3 mb-6 md:mb-0'>
          {imageFile ? (
            <Image
              src={URL.createObjectURL(imageFile!)}
              fill
              className='object-contain'
              alt='viewing image before upload'
            />
          ) : (
            ''
          )}
          <p className='absolute bottom-1 text-red-500 right-1 text-sm italic'>
            image preview box
          </p>
        </div>
      </div>

      <div className='flex justify-end items-end'>
        <div className='flex flex-col items-end'>
          {!chainArgs && (
            <button
              disabled={loading || !imageFile}
              type='submit'
              form='create_form'
              className='py-2 px-5 flex items-center gap-1 rounded-full text-white bg-blue-500'
            >
              {loading ? <Spinner /> : ''}
              {loading ? 'creating event ...' : 'Create'}
            </button>
          )}

          {chainArgs && (
            <button
              disabled={waitTf.isLoading}
              type='button'
              onClick={callCtx}
              className='py-2 px-5 flex items-center gap-1 rounded-full text-white bg-green-500'
            >
              {waitTf.isLoading ? <Spinner /> : ''}
              {waitTf.isLoading ? 'saving event ...' : 'Save event'}
            </button>
          )}
          {chainArgs && (
            <small className='italic pt-3 font-bold text-red-500'>
              * this will save to the blockchain
            </small>
          )}
        </div>
      </div>
    </form>
  );
}

export default GeneralCreateForm;
