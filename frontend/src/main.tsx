import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx';
import './index.css';
import Homepage from './pages/Homepage.tsx';
import ProductPage from './pages/ProductPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Homepage />} />
      <Route path="Product/:slug" element={<ProductPage />} />
      {/* <Route path="dashboard" element={<Dashboard />} />*/}
      {/* ... etc. */}
    </Route>
  )
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
