import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import ProfilesPage from './pages/ProfilePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx';
import { createBrowserRouter,
  RouterProvider
 } from 'react-router-dom';

 const router = createBrowserRouter([{
  path: '/',
  element: <HomePage/>,
  errorElement: <NotFoundPage />,
 },
 {
  path: 'profiles',
  element: <ProfilesPage/>
 },
 {


 },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    <App />
  </StrictMode>,
)
