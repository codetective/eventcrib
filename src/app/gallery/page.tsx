import WrapContent from '@/components/common/WrapContent';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';

function Gallery() {
  return (
    <MainLayout>
      <WrapContent>
        <div className='py-5'>
          <h1 className='px-2 py-5 text-xl capitalize'>EVENTS GALLERY</h1>
          <GalleryGrid />
        </div>
      </WrapContent>
    </MainLayout>
  );
}

export default Gallery;
