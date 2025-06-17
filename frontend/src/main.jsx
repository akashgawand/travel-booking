import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {Provider} from "react-redux"
import store from './store/store.js';

import Layout from './layout.jsx';
import LanguageMap from './components/languageMap.jsx';
import LocationMap from './components/location.jsx';
import BookingCalendar from './pages/bookingCalander.jsx';
import "./scripts/i18.js"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Common layout
    children: [
      { path: '/', element: <LanguageMap /> },
      { path: '/location', element: <LocationMap /> },
    ],
  },
  {
    path: '/booking',
    element: <BookingCalendar />, 
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
