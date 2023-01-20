import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/home";
import Aboutzizi from "./pages/aboutZizi";
import Joinzizi from "./pages/joinZizi";
import OurProjects from "./pages/ourProjects";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import ProjectDetails from "./components/projectdetails";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      // errorElement: <Aboutzizi />
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

    {
      path: "/project_details",
      element: <ProjectDetails />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(

    // <React.StrictMode>
    <BrowserRouter basename="/zizifoundation">
      <RouterProvider router={router}  />
    </BrowserRouter>
    // </React.StrictMode>
  );
}

export default App;
