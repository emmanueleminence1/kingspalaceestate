import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Apartments } from './pages/Apartments';
import { ApartmentDetail } from './pages/ApartmentDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'apartments', Component: Apartments },
      { path: 'apartments/:id', Component: ApartmentDetail },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
    ],
  },
]);
