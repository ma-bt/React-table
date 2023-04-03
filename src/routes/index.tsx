import IndexPage from "../pages/index"
import { lazy } from 'react';
// const IndexPage = lazy(() => import('pages/Index'));
// const AddUsers = lazy(() => import('pages/AddUser'))
import AddUser from '../pages/AddUser';

export const routes = [
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path:'/add-users',
    element:<AddUser/>
  }
];

export default routes;