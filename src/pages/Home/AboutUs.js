import React from 'react';

import SectionHomeLayout from './SectionHomeLayout';
import {
  aboutUs1,
  aboutUs2,
  aboutUs3,
  aboutUs4,
} from '../../assets/images/common';

const listItems = [
  {
    title: 'Trang trại hữu cơ',
    description: 'Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất',
    imageUrl: aboutUs1,
  },
  {
    title: 'Thực phẩm sạch',
    description: 'Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất',
    imageUrl: aboutUs2,
  },
  {
    title: 'An toàn sinh học',
    description: 'Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất',
    imageUrl: aboutUs3,
  },
  {
    title: 'Đa dạng sinh học',
    description: 'Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất',
    imageUrl: aboutUs4,
  },
];

const AboutUs = () => {
  return (
    <SectionHomeLayout title='Về chúng tôi' path='/introduce'>
      <p className='mb-10 text-[#8b8b99] text-sm max-w-[840px] w-full mx-auto'>
        Hiện tại vùng nguyên liệu của chúng tôi có thể cung cấp các thực tập
        tươi sạch với số lượng lớn vì đang vào vụ mùa thu hoạch nên chúng tôi có
        thể cung ứng cho tất cả các đối tác xuất khẩu nông sản trên cả nước.
      </p>
      <div className='scroll-snap-list flex gap-8 justify-between'>
        {listItems.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center scroll-snap-item'
          >
            <div className='w-[135px] h-[127px]'>
              <img src={item.imageUrl} alt='' />
            </div>
            <h3 className='py-4 text-lg font-bold'>{item.title}</h3>
            <p className='leading-6 text-textColor max-w-[280px] w-full text-sm'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionHomeLayout>
  );
};

export default AboutUs;
