import React from "react";
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'; // Note 1

// import routed components
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// Define the router with routes
const router = createHashRouter([
  {
    path: '/',          // This is the root route
    element: <Home />,   // The component rendered for this route
  },
  {
    path: '/contact',   // The "Contact" route
    element: <Contact />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
