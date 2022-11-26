import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/home";
import Aboutzizi from "./pages/aboutZizi";
import Joinzizi from "./pages/joinZizi";
import OurProjects from "./pages/ourProjects";
import Contact from "./pages/contact";
import Donate from "./pages/donate";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },

    {
      path: "/about",
      element: <Aboutzizi />,
    },

    {
      path: "/join_us",
      element: <Joinzizi />,
    },

    {
      path: "/our_projects",
      element: <OurProjects />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },

    {
      path: "/donate",
      element: <Donate />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
