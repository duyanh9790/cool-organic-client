import { useState, useEffect } from 'react';
import { LoadingCenter } from '../../components/Loading';

import orderApi from './../../api/orderApi';
import formatPrice from './../../utils/formatPrice';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getOrders = async () => {
      setIsLoading(true);
      try {
        const res = await orderApi.getOrders();
        setOrders(res.data.orders);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getOrders();
  }, []);

  return (
    <div>
      {isLoading && (
        <div className='flex items-center justify-center h-96'>
          <LoadingCenter />
        </div>
      )}

      {!isLoading && orders.length === 0 && (
        <div>
          <h2>Hiện chưa có đơn hàng nào</h2>
        </div>
      )}

      {!isLoading && orders.length > 0 && (
        <table className='w-full border border-collapse table-auto border-borderColor'>
          <thead>
            <tr>
              <th className='px-1 py-1.5 font-medium text-center text-white border border-borderColor bg-primaryColor'>
                Mã đơn hàng
              </th>
              <th className='px-1 py-1.5 font-medium text-center text-white border border-borderColor bg-primaryColor'>
                Ngày đặt hàng
              </th>
              <th className='px-1 py-1.5 font-medium text-center text-white border border-borderColor bg-primaryColor'>
                Địa chỉ
              </th>
              <th className='px-1 py-1.5 font-medium text-center text-white border border-borderColor bg-primaryColor'>
                Giá trị đơn hàng
              </th>
              <th className='px-1 py-1.5 font-medium text-center text-white border border-borderColor bg-primaryColor'>
                Trạng thái thanh toán
              </th>
              <th className='px-1 py-1.5 font-medium text-center text-white border border-borderColor bg-primaryColor'>
                Trạng thái vận chuyển
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className='px-1 py-2 text-center border border-borderColor'>
                  <Link
                    to={`/my-info/orders/${order.id}`}
                    className='text-[#2F80ED] hover:opacity-80'
                  >
                    #{order.id}
                  </Link>
                </td>
                <td className='px-1 py-2 text-center border border-borderColor'>
                  {formatDate(order.createdAt)}
                </td>
                <td className='px-1 py-2 text-center border border-borderColor'>
                  {`${order.ward}, ${order.district}, ${order.city}`}
                </td>
                <td className='px-1 py-2 text-center border border-borderColor'>
                  {formatPrice(order.totalPrice)}
                </td>
                <td className='px-1 py-2 text-center border border-borderColor'>
                  {order.paymentStatus}
                </td>
                <td className='px-1 py-2 text-center border border-borderColor'>
                  {order.shippingStatus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistory;
