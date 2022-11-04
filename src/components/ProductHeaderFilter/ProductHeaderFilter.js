import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import ProductHeaderFilterSkeleton from '../Skeleton/ProductHeaderFilterSkeleton';
import useSearchParams from './../../hooks/useSearchParams';

const ProductHeaderFilter = ({
  categoryName,
  isLoading = false,
  onFilterChange,
}) => {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState(() => {
    return {
      price: searchParams.get('price') || '',
      date: searchParams.get('date') || '',
    };
  });

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  return (
    <Fragment>
      {isLoading ? (
        <ProductHeaderFilterSkeleton />
      ) : (
        <div className='flex flex-col lg:flex-row items-center justify-between px-3 py-1.5 pb-2 lg:py-3 mb-8 border-2 border-primaryColor'>
          <h3 className='text-2xl font-medium min-h-[2rem] mb-1.5 lg:mb-0'>
            {categoryName}
          </h3>
          <div className='flex flex-col md:flex-row items-center gap-4 md:gap-5'>
            <p className='mr-5 text-sm'>Sắp xếp theo:</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5'>
              <div className='flex items-center text-sm hover:text-primaryColor'>
                <input
                  type='checkbox'
                  id='newest-product'
                  value='newest'
                  checked={filters.date === 'newest'}
                  onChange={() =>
                    setFilters({
                      ...filters,
                      date: filters.date === 'newest' ? '' : 'newest',
                    })
                  }
                  className='cursor-pointer'
                />
                <label
                  className='pl-1 select-none cursor-pointer'
                  htmlFor='newest-product'
                >
                  Hàng mới về
                </label>
              </div>
              <div className='flex items-center text-sm hover:text-primaryColor'>
                <input
                  type='checkbox'
                  id='oldest-product'
                  value='oldest'
                  checked={filters.date === 'oldest'}
                  onChange={() =>
                    setFilters({
                      ...filters,
                      date: filters.date === 'oldest' ? '' : 'oldest',
                    })
                  }
                  className='cursor-pointer'
                />
                <label
                  className='pl-1 select-none cursor-pointer'
                  htmlFor='oldest-product'
                >
                  Hàng cũ nhất
                </label>
              </div>
              <div className='flex items-center text-sm hover:text-primaryColor'>
                <input
                  type='checkbox'
                  id='asc-price'
                  value='asc'
                  checked={filters.price === 'asc'}
                  onChange={() =>
                    setFilters({
                      ...filters,
                      price: filters.price === 'asc' ? '' : 'asc',
                    })
                  }
                  className='cursor-pointer'
                />
                <label
                  className='pl-1 select-none cursor-pointer'
                  htmlFor='asc-price'
                >
                  Giá tăng dần
                </label>
              </div>
              <div className='flex items-center text-sm hover:text-primaryColor'>
                <input
                  type='checkbox'
                  id='desc-price'
                  value='desc'
                  checked={filters.price === 'desc'}
                  onChange={() =>
                    setFilters({
                      ...filters,
                      price: filters.price === 'desc' ? '' : 'desc',
                    })
                  }
                  className='cursor-pointer'
                />
                <label
                  className='pl-1 select-none cursor-pointer'
                  htmlFor='desc-price'
                >
                  Giá giảm dần
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

ProductHeaderFilter.propTypes = {
  categoryName: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  onFilterChange: PropTypes.func.isRequired,
};

export default ProductHeaderFilter;
