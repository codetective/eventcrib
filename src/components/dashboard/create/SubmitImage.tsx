import React, { Dispatch, SetStateAction } from 'react';

function SubmitImage({
  image,
  setImageUrl,
}: {
  image: File;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <div>
      <button className='py-2 px-5 rounded-full text-white bg-green-500'>
        Upload
      </button>
    </div>
  );
}

export default SubmitImage;
