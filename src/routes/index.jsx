import { createBrowserRouter } from 'react-router-dom';
import App from '../app.js'
import Home from '../pages/home.jsx';
import AboutMe from '../pages/aboutMe.jsx';
import ContactMe from '../pages/contactMe.jsx';
import ErrorPage from '../pages/errorPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <ContactMe />,
      } 
    ],
  },
]);
