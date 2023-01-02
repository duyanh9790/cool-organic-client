import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { LoadingCenter } from '../../../components/Loading';
import Portal from '../../../components/Modal/Portal';
import Pagination from '../../../components/Pagination/Pagination';
import Modal from '../../../components/Modal/Modal';
import cartApi from '../../../api/cartApi';
import userApi from '../../../api/userApi';
import formatDate from '../../../utils/formatDate';
import role from './../../../constants/role';

const User = () => {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      try {
        const res = await userApi.getUsers({
          params: {
            page: currentPage,
            limit: 10,
          },
        });
        setUsers(res.data.users);
        setTotalPages(res.data.pagination.totalPages);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    getUsers();
  }, [currentPage]);

  const handleDeleteUser = async () => {
    try {
      await userApi.deleteUser(currentUserId);
      const res = await cartApi.deleteCart(currentUserId);
      console.log(res);
      toast.success('Xóa người dùng thành công!');
      const newUsers = users.filter((user) => user.id !== currentUserId);
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
      toast.error('Xóa người dùng thất bại, Vui lòng thử lại sau!');
    }
    setShowModal(false);
  };

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='pt-8 pb-5 text-2xl font-semibold'>Người Dùng</h2>
        <Link
          className='py-3.5 px-5 inline-block border rounded-lg text-white font-bold bg-primaryColor border-[#ccc] hover:opacity-80 transition-opacity'
          to={`${window.location.pathname}/add`}
        >
          <span>
            <i className='mr-2 fa-solid fa-plus'></i>
          </span>
          Thêm người dùng
        </Link>
      </div>
      {isLoading ? (
        <div className='flex items-center justify-center h-[516px]'>
          <LoadingCenter />
        </div>
      ) : (
        <Fragment>
          <table className='w-full border border-collapse table-auto border-borderColor'>
            <thead>
              <tr>
                <th className='px-1 py-3.5 font-bold text-center border-b border-[#ccc]'>
                  STT
                </th>
                <th className='px-1 py-3.5 font-bold text-center border-b border-[#ccc]'>
                  Họ Và Tên
                </th>
                <th className='px-1 py-3.5 font-bold text-center border-b border-[#ccc]'>
                  Email
                </th>
                <th className='px-1 py-3.5 font-bold text-center border-b border-[#ccc]'>
                  Quyền Hạn
                </th>
                <th className='px-1 py-3.5 font-bold text-center border-b border-[#ccc]'>
                  Ngày Tạo Tài Khoản
                </th>
                <th className='px-1 py-3.5 font-bold text-center border-b border-[#ccc]'>
                  Thao Tác
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className='px-1 py-5 font-semibold text-center border-b border-[#ccc]'>
                    {(currentPage - 1) * 10 + index + 1}
                  </td>
                  <td className='px-1 py-5 font-semibold text-center border-b border-[#ccc]'>
                    {user.fullName}
                  </td>
                  <td className='px-1 py-5 font-semibold text-center border-b border-[#ccc]'>
                    {user.email}
                  </td>
                  <td className='px-1 py-5 font-semibold text-center border-b border-[#ccc]'>
                    {role[user.role]}
                  </td>
                  <td className='px-1 py-5 font-semibold text-center border-b border-[#ccc]'>
                    {formatDate(user.createdAt)}
                  </td>
                  <td className='px-1 py-2 font-semibold text-center border-b border-[#ccc]'>
                    <Link
                      className='py-2 px-5 inline-block border rounded-lg text-primaryColor border-[#ccc] hover:text-white hover:bg-primaryColor transition-colors'
                      to={`${window.location.pathname}/view/${user.id}`}
                    >
                      Xem
                    </Link>
                    <Link
                      className='ml-2.5 py-2 inline-block px-5 border rounded-lg text-thirdColor border-[#ccc] hover:text-white hover:bg-thirdColor transition-colors'
                      to={`${window.location.pathname}/update/${user.id}`}
                    >
                      Sửa
                    </Link>
                    <button
                      className='ml-2.5 text-red-500 py-2 px-5 border rounded-lg  border-[#ccc] hover:bg-red-500 hover:text-white transition-colors'
                      onClick={() => {
                        setShowModal(true);
                        setCurrentUserId(user.id);
                      }}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page.selected + 1)}
            className='my-8'
          />
        </Fragment>
      )}

      {showModal && (
        <Portal showModal={showModal} classContainer={'modal-delete-user'}>
          <Modal
            showModal={showModal}
            handleCloseModal={() => setShowModal(false)}
            className='fixed z-[2000] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl overflow-hidden bg-white w-[500px] px-5 pb-4 shadow-lg'
          >
            <Modal.Header
              handleCloseModal={() => setShowModal(false)}
              className='pt-4 mb-3'
            >
              <h2 className='text-xl font-semibold leading-6 w-[85%]'>
                Bạn có chắc chắn muốn xóa người dùng này không?
              </h2>
            </Modal.Header>
            <Modal.Body className='mb-5'>
              <p className='text-lg leading-5'>
                Bạn có chắc chắn muốn xóa người dùng này không? Sau khi xóa, bạn
                sẽ không thể khôi phục lại thông tin người dùng này.
              </p>
            </Modal.Body>
            <Modal.Footer className='pb-1.5'>
              <div className='flex items-center justify-end gap-3'>
                <button
                  className='px-4 py-3 text-white transition-opacity rounded-md bg-slate-400 hover:opacity-80 min-w-[80px]'
                  onClick={() => setShowModal(false)}
                >
                  Hủy bỏ
                </button>
                <button
                  className='px-4 py-3 text-white transition-opacity bg-red-500 rounded-md hover:opacity-80 min-w-[80px]'
                  onClick={handleDeleteUser}
                >
                  Xóa
                </button>
              </div>
            </Modal.Footer>
          </Modal>
        </Portal>
      )}
    </div>
  );
};

export default User;
