import { Fragment } from 'react';
import PropTypes from 'prop-types';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { useLocation } from 'react-router-dom';

import BreadCrumbSkeleton from '../Skeleton/BreadCrumbSkeleton';
import { backgroundBreadCrumb } from '../../assets/images/common';
import { Link } from 'react-router-dom';

const routes = [
  {
    path: '/',
    breadCrumbName: 'Trang chủ',
  },
  {
    path: '/products',
    breadCrumbName: 'Tất cả sản phẩm',
  },
  {
    path: '/top-selling',
    breadCrumbName: 'Sản phẩm bán chạy',
  },
  {
    path: '/cart',
    breadCrumbName: 'Giỏ hàng',
  },
  {
    path: '/search',
    breadCrumbName: 'Trang tìm kiếm',
  },
  {
    path: '/my-info',
    breadCrumbName: 'Trang khách hàng',
  },
  {
    path: '/products/:slug',
    breadCrumbName: 'Chi tiết sản phẩm',
  },
  {
    path: '/:categorySlug',
    breadCrumbName: 'Danh mục sản phẩm',
  },
  {
    path: '/login',
    breadCrumbName: 'Đăng nhập',
  },
  {
    path: '/register',
    breadCrumbName: 'Đăng ký',
  },
  {
    path: '/introduce',
    breadCrumbName: 'Giới thiệu',
  },
  {
    path: '/contact',
    breadCrumbName: 'Liên hệ',
  },
  {
    path: '/*',
    breadCrumbName: 'Trang không tồn tại',
  },
];

const BreadCrumb = ({ children, isLoading = false }) => {
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();

  return (
    <div
      className='flex items-center justify-center py-10 mb-5 md:mb-8 lg:mb-10 md:py-12 lg:py-14'
      style={{
        backgroundImage: `url(${backgroundBreadCrumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {isLoading ? (
        <BreadCrumbSkeleton />
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <div className='mb-3'>
            <h1 className='text-3xl font-bold text-center md:text-4xl'>
              {children ||
                breadcrumbs[breadcrumbs.length - 1].match.route.breadCrumbName}
            </h1>
          </div>
          <div>
            {children && children === 'Trang không tồn tại' ? (
              <Fragment>
                <Link to='/' className='text-base hover:text-primaryColor'>
                  Trang chủ
                </Link>
                <span className='text-sm'>
                  <i className='mx-3 fa-solid fa-angle-right'></i>
                </span>
                <span className='text-base text-primaryColor'>
                  Trang không tồn tại
                </span>
              </Fragment>
            ) : (
              <Fragment>
                {breadcrumbs.map(({ match }, index) => (
                  <Fragment key={match.pathname}>
                    {index < breadcrumbs.length - 1 ? (
                      <Link
                        to={match.pathname}
                        className='text-base hover:text-primaryColor'
                      >
                        {match.route.breadCrumbName}
                      </Link>
                    ) : (
                      <span className='text-base text-primaryColor'>
                        {location.pathname === '/search'
                          ? match.route.breadCrumbName
                          : children || match.route.breadCrumbName}
                      </span>
                    )}

                    {index < breadcrumbs.length - 1 && (
                      <span className='text-sm'>
                        <i className='mx-3 fa-solid fa-angle-right'></i>
                      </span>
                    )}
                  </Fragment>
                ))}
              </Fragment>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

BreadCrumb.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export default BreadCrumb;
