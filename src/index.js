import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'

import Home from './components/HomeComponent';
import ProjectsList from './components/ProjectsListComponent';
import ProjectDetail, { projectLoader } from './components/ProjectDetailComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <ProjectsList />
  },
  {
    path: "/projects/:projectId",
    element: <ProjectDetail />,
    loader: projectLoader,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
);
