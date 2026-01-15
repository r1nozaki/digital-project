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
const GalleryPage = lazy(() => import('../pages/Gallery/GalleryPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage/ProjectsPage'));
const ContactPage = lazy(() => import('../pages/ContactUsPage/ContactUsPage'));
const Page404 = lazy(() => import('../pages/404/Page404'));

export const router = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTER_PATHS.GALLERY, element: <GalleryPage /> },
      { path: ROUTER_PATHS.PROJECTS, element: <ProjectsPage /> },
      { path: ROUTER_PATHS.CONTACTS, element: <ContactPage /> },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]);
