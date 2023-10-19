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
  setImageUrl: Dispatch<SetStateAction<string>>;
}) {
  const [loading, setLoading] = useState(false);

  const UploadImage = async () => {
    if (!image) {
      toast.error('Please select a validimage');
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
        disabled={loading}
        type='button'
        onClick={UploadImage}
        className='flex items-center gap-1 py-1 px-2 rounded-full text-white bg-blue-500'
      >
        {loading ? <Spinner /> : ''}
        Upload image
      </button>
    </div>
  );
}

export default SubmitImage;
