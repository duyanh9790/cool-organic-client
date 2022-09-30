import React from 'react';
import './skeleton.scss';

const ProductCardSkeleton = () => {
  return (
    <div className='border border-borderColor'>
      <div className='h-[358px] skeleton'></div>
      <div className='flex flex-col items-center justify-center h-[97px]'>
        <h3 className='h-4 skeleton w-[100px]'></h3>
        <p className='h-5 skeleton w-[150px] mt-2'></p>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
