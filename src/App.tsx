import React from 'react';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage /> 
  }
])

const App = () => {
  return (
    <div className="App container w-full h-full">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
