import Spinner from '@/components/common/Spinner';
import makeGatewayURL from '@/utils/makeGatewayURL';
import makeStorageClient from '@/utils/makeStorageClient';
import React, { Dispatch, SetStateAction, useState } from 'react';
import toast from 'react-hot-toast';

function SubmitImage({
  image,
  setImageUrl,
}: {
  image: File | null;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
}) {
  const [loading, setLoading] = useState(false);

  const UploadImage = async () => {
    if (!image) {
      toast.error('Please select an image');
      return;
    }
    setLoading(true);
    try {
      const client = makeStorageClient();
      let file = image;
      let fileName = file!.name;
      const imgCID = await client.put([file], { name: fileName });
      const imgURL = makeGatewayURL(imgCID, fileName);
      setImageUrl(imgURL);
      setLoading(false);
    } catch (error) {
      toast.error('An error occurred');
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        type='button'
        onClick={UploadImage}
        className='flex items-center gap-1 py-2 px-5 rounded-full text-white bg-green-500'
      >
        <div role='status'>
          {loading ? <Spinner /> : ''}
          <span className='sr-only'>Loading...</span>
        </div>
        Upload image
      </button>
    </div>
  );
}

export default SubmitImage;
