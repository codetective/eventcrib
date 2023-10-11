import Link from 'next/link';
import React from 'react';
import WrapContent from '../common/WrapContent';
import { categories } from '@/utils/mockData';

const CategoryGrid = () => {
  return (
    <WrapContent>
      <div className='mx-auto space-y-4 px-4 py-10 '>
        <h2 className='py-4 text-center font-bold'>
          Choose Different Category
        </h2>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {categories?.map((category) => (
            <Link
              href={`/category/${category.name}`}
              className='rounded-2xl px-8 py-20 text-center font-bold text-white shadow-sm'
              key={category.id}
              style={{
                backgroundImage: `url(${
                  '/images/category/' + category.catImage
                })`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundColor: 'rgba(0,0,0,0.5)',
                backgroundBlendMode: 'darken',
              }}
            >
              {category.catTitle}
            </Link>
          ))}
        </div>
      </div>
    </WrapContent>
  );
};

export default CategoryGrid;
