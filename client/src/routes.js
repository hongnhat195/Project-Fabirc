import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
import DashboardAppPage from './pages/DashboardAppPage';
import DetailFabric from './pages/DetailFabric';
import ListOrdersPage from './pages/ListOrdersPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to='/dashboard/app' />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'order', element: <ListOrdersPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '',
      element: <DashboardLayout />,
      children: [{ path: '', element: <HomePage /> }],
    },
    {
      path: 'fabric',
      element: <DashboardLayout />,
      children: [{ path: '', element: <DetailFabric /> }],
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />,
    },
  ]);

  return routes;
}
