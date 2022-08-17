import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Admin from '../pages/Admin';
import Login from '../pages/Login';
import Register from '../pages/Register';

import { ADMIN_LAYOUT } from '../constants/layouts';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/cart',
    component: Cart,
    protected: true,
  },
  {
    path: '/products/:slug',
    component: ProductDetail,
  },
  {
    path: '/admin',
    component: Admin,
    protected: true,
    layout: ADMIN_LAYOUT,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];

export default routes;