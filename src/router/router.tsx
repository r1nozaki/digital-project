import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

export const ROUTER_PATHS = {
  HOME: '/',
  GALLERY: '/gallery',
  PROJECTS: '/projects',
  CONTACTS: '/contacts',
};

const LayoutWrapper = lazy(() => import('../components/layout/Layout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Page404 = lazy(() => import('../pages/404/Page404'));

export const router = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]);
