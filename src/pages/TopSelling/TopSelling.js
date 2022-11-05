import React, { useState, useEffect, Fragment } from 'react';

import ProductHeaderFilter from '../../components/ProductHeaderFilter';
import ProductList from '../../components/ProductList';
import BreadCrumb from '../../components/BreadCrumb';
import Pagination from '../../components/Pagination/Pagination';
import productApi from '../../api/productApi';
import useSearchParams from '../../hooks/useSearchParams';
import handleQueryParam from '../../utils/handleQueryParam';
import FilterSideBar from './../../components/FilterSideBar/index';

const TopSelling = () => {
  const searchParams = useSearchParams();

  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState(() => {
    return {
      price: '',
      date: '',
      salePrice: [],
      supplier: [],
    };
  });
  const [currentPage, setCurrentPage] = useState(() => {
    return Number(searchParams.get('page')) || 1;
  });

  const perPage = 8;
  useEffect(() => {
    const fetchTopSellingProducts = async () => {
      setIsLoading(true);
      try {
        const response = await productApi.getTopSellingProducts({
          params: {
            page: currentPage,
            limit: perPage,
            ...filters,
          },
        });
        handleQueryParam('page', currentPage);
        handleQueryParam('price', filters.price);
        handleQueryParam('date', filters.date);
        handleQueryParam('salePrice', filters.salePrice, 'multiple');
        handleQueryParam('supplier', filters.supplier, 'multiple');

        setProductList(response.data.products);
        setCurrentPage(response.data.pagination.currentPage);
        setTotalPages(response.data.pagination.totalPages);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchTopSellingProducts();
  }, [filters, currentPage]);

  const handlePageChange = (currentPageIndex) => {
    const currentPage = currentPageIndex.selected + 1;
    setCurrentPage(currentPage);
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => {
      return {
        ...prev,
        ...newFilters,
      };
    });
  };

  return (
    <Fragment>
      <BreadCrumb isLoading={isLoading} />
      <div className='container'>
        <ProductHeaderFilter
          categoryName='Sản phẩm bán chạy'
          isLoading={isLoading}
          onFilterChange={handleFilterChange}
          setCurrentPage={setCurrentPage}
        />
        <div className='flex flex-col w-full lg:flex-row'>
          <div className='lg:w-[16.66667%] w-full mr-5'>
            <FilterSideBar
              filters={filters}
              handleFilterChange={handleFilterChange}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className='lg:w-[83.33333%] w-full'>
            <ProductList
              productList={productList}
              isLoading={isLoading}
              skeletonItem={perPage}
            />
          </div>
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          isLoading={isLoading}
        />
      </div>
    </Fragment>
  );
};

export default TopSelling;
