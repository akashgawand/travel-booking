import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from "react-redux"
import store from './store/store.js';
import i18n from './scripts/i18.js';
import { I18nextProvider } from 'react-i18next';

import Layout from './layout.jsx';
import LanguageMap from './components/languageMap.jsx';
import LocationMap from './components/location.jsx';
import BookingCalendar from './pages/bookingCalander.jsx';
import "./scripts/i18.js"
import BookingDescription from './pages/bookingDescription.jsx';
import BookingForm from './pages/form.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Common layout
    children: [
      { path: '/', element: <LanguageMap /> },
      { path: '/location', element: <LocationMap /> },
      { path: '/booking', element: <BookingCalendar /> },
    ],

  },
  {
    path: '/description/:location',
    element: <BookingDescription />
  },
  {
    path: '/description/:location/form',
    element: <BookingForm/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </I18nextProvider>
  </StrictMode>
);
