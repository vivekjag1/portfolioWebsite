import ReactDOM from 'react-dom/client';
import App from '../src/App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/routes/Home.tsx';
import About from '../src/routes/About.tsx';
import Projects from '../src/routes/Projects.tsx';
import Certifications from '../src/routes/Certifications.tsx';
import SoftEngProject from '../src/routes/SoftEngProject.tsx';
import TACompanionProject from '../src/routes/TACompanionProject.tsx';
import MLBClassifier from '../src/routes/MLBClassifier.tsx';
import Bounce from './routes/Bounce.tsx';
import ResumePage from './routes/Resume.tsx';





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/certifications',
        element: <Certifications />,
      },
      {
        path: '/BWHCS3733',
        element: <SoftEngProject />,
      },
      {
        path: '/taCompanion',
        element: <TACompanionProject />,
      },
      {
        path: '/MLBClassifier',
        element: <MLBClassifier />,
      },
       {
        path: '/secureMalloc',
        element: <Bounce />,
      },
      {
        path:'/resume', 
        element: <ResumePage/>
      }
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
