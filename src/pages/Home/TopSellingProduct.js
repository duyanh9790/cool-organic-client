import { useState, useEffect } from 'react';

import SectionLayout from '../../components/SectionLayout';
import ProductList from './../../components/ProductList/index';
import productApi from '../../api/productApi';

const TopSellingProduct = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchTopSellingProducts = async () => {
      try {
        const response = await productApi.getTopSellingProducts({
          params: {
            page: 1,
            limit: 4,
          },
        });
        setProductList(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopSellingProducts();
  }, []);
  return (
    <SectionLayout title='Sản phẩm bán chạy' path='/top-selling'>
      <div className='mt-4'>
        <ProductList productList={productList} />
      </div>
    </SectionLayout>
  );
};

export default TopSellingProduct;
