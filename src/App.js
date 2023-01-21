import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
=======
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Switch,Routes, HashRouter } from "react-router-dom";
>>>>>>> b166417131c37040c88955f7fec7dca26919da9e

import LandingPage from "./pages/home";
import Aboutzizi from "./pages/aboutZizi";
import Joinzizi from "./pages/joinZizi";
import OurProjects from "./pages/ourProjects";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import ProjectDetails from "./components/projectdetails";



function App() {
<<<<<<< HEAD
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

    {
      path: "/project_details",
      element: <ProjectDetails />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
=======

  return(
    // <BrowserRouter basename="/zizifoundation" >
    //   <Routes>
    //     <Route path="/" element={<LandingPage/>}></Route>
    //     <Route path="/about" element={<Aboutzizi/>}></Route>
    //     <Route path="/join_us" element={<Joinzizi/>}></Route>
    //     <Route path="/our_projects" element={<OurProjects/>}></Route>
    //     <Route path="/contact" element={<Contact/>}></Route>
    //     <Route path="/donate" element={<Donate/>}></Route>
    //     <Route path="/project_details" element={<ProjectDetails/>}></Route>

    //   </Routes>
    // </BrowserRouter>


      <Routes>
        <Route exact path="/" element={<LandingPage/>}></Route>
        <Route path="/about" element={<Aboutzizi/>}></Route>
        <Route path="/join_us" element={<Joinzizi/>}></Route>
        <Route path="/our_projects" element={<OurProjects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/donate" element={<Donate/>}></Route>
        <Route path="/project_details" element={<ProjectDetails/>}></Route>

      </Routes>
        
  )





  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <LandingPage />,
  //     // errorElement: <Aboutzizi />
  //   },

  //   {
  //     path: "/about",
  //     element: <Aboutzizi />,
  //   },

  //   {
  //     path: "/join_us",
  //     element: <Joinzizi />,
  //   },

  //   {
  //     path: "/our_projects",
  //     element: <OurProjects />,
  //   },

  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },

  //   {
  //     path: "/donate",
  //     element: <Donate />,
  //   },

  //   {
  //     path: "/project_details",
  //     element: <ProjectDetails />,
  //   },
  // ]);

  // ReactDOM.createRoot(document.getElementById("root")).render(

  //   // <React.StrictMode>
  //   <BrowserRouter basename="/zizifoundation">
  //     <RouterProvider router={router}  />
  //   </BrowserRouter>
  //   // </React.StrictMode>
  // );

>>>>>>> b166417131c37040c88955f7fec7dca26919da9e
}

export default App;
