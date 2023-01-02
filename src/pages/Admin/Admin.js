import { Routes, Route } from 'react-router-dom';
import DashBoard from './DashBoard';
import User from './User/User';
import ViewUser from './User/ViewUser';
import AddUser from './User/AddUser';
import UpdateUser from './User/UpdateUser';
import Product from './Product/Product';
import AddProduct from './Product/AddProduct';
import UpdateProduct from './Product/UpdateProduct';
import Order from './Order/Order';
import ViewOrder from './Order/ViewOrder';
import AddOrder from './Order/AddOrder';
import UpdateOrder from './Order/UpdateOrder';
import Category from './Category/Category';
import Inventory from './Inventory/Inventory';

const Admin = () => {
  return (
    <Routes>
      <Route index element={<DashBoard />} />
      <Route path='/users' element={<User />} />
      <Route path='/users/view/:id' element={<ViewUser />} />
      <Route path='/users/add' element={<AddUser />} />
      <Route path='/users/update/:id' element={<UpdateUser />} />
      <Route path='/products' element={<Product />} />
      <Route path='/products/add' element={<AddProduct />} />
      <Route path='/products/update/:slug' element={<UpdateProduct />} />
      <Route path='/orders' element={<Order />} />
      <Route path='/orders/view/:id' element={<ViewOrder />} />
      <Route path='/orders/add' element={<AddOrder />} />
      <Route path='/orders/update/:id' element={<UpdateOrder />} />
      <Route path='/categories' element={<Category />} />
      <Route path='/inventory' element={<Inventory />} />
    </Routes>
  );
};

export default Admin;
