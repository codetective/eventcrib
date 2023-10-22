import { saveGalleryImage } from '@/actions/actions';
import Input from '@/components/forms/Input';
import makeGatewayURL from '@/utils/makeGatewayURL';
import makeStorageClient from '@/utils/makeStorageClient';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

function UploadImageModal({
  evt,
  close,
}: {
  evt: {
    id: string;
    event_name: string;
    start_date: string;
  } | null;
  close: () => void;
}) {
  const [imageFile, setImage] = useState<File | null>(null);
  const [loading, setloading] = useState(false);

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

  const storeImage = async () => {
    if (!imageFile) {
      toast.error('Please select a validimage');
      return;
    }
    setloading(true);
    try {
      const client = makeStorageClient();
      let file = imageFile;
      let fileName = file!.name;
      const imgCID = await client.put([file], { name: fileName });
      const imgURL = makeGatewayURL(imgCID, fileName);

      let res = await saveGalleryImage(evt?.id as string, imgURL);
      if (!res) {
        toast.error('error occurred while saving image');
        return;
      }
      toast.success('image saved');
      close();
    } catch (error) {
      console.log(error);

      toast.error('error occurred while saving image');
    }
  };

  return (
    <div>
      <Rodal
        visible={evt ? true : false}
        closeOnEsc={false}
        height={500}
        width={400}
      >
        <div className='pb-2'>
          <p>Upload image for event :</p>
          <h1 className='font-bold py-2'>{evt ? evt.event_name : 'null'}</h1>
        </div>

        <div className='flex flex-col gap-1 items-center justify-center'>
          <div className='w-full md:w-[60%]  px-3'>
            <div className='w-full'>
              <Input
                id='image'
                type='file'
                name='image'
                accept='image/*'
                onChange={handleImageChange}
              />
            </div>
          </div>
          {/* preview image bos */}
          <div className='w-full md:w-[60%] h-[70%] relative border border-gray-400 bg-gray-100 px-3 mb-2 md:mb-0'>
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

          <button
            onClick={storeImage}
            className='px-5 text-white text-xl rounded-full py-1 hover:border bg-orange-500 hover:bg-transparent hover:border-orange-800 hover:text-orange-800'
          >
            {loading ? 'loading ...' : 'Save'}
          </button>
        </div>
      </Rodal>
    </div>
  );
}

export default UploadImageModal;
