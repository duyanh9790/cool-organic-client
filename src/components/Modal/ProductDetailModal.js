import React from 'react';
import ProductDetailContent from '../ProductDetailContent';

import Modal from './Modal';
import Portal from './Portal';

const ProductDetailModal = ({
  product,
  handleCloseModal,
  showModal,
  classContainer,
}) => {
  return (
    <Portal showModal={showModal} classContainer={classContainer}>
      <Modal
        className={`${classContainer} py-1 px-4 fixed z-[2000] xl:w-[85%] 2xl:w-[70%] 3xl:w-[60%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white rounded-[20px] overflow-hidden shadow-lg`}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      >
        <Modal.Header handleCloseModal={handleCloseModal} />
        <Modal.Body className='pb-6 bg-white'>
          <ProductDetailContent product={product} className='gap-5' />
        </Modal.Body>
      </Modal>
    </Portal>
  );
};

export default ProductDetailModal;
