import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

  import LandingPage from "./pages/home";
  import Aboutzizi from "./pages/aboutZizi";
  import ZiziProjects from "./pages/ziziProjects";
  import Contactzizi from "./pages/contactZizi";
  import Joinzizi from "./pages/joinZizi";
  import Zizidonate from "./pages/ziziDonate";




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },

    {
      path:"/about",
      element:<Aboutzizi />
    },

    {
      path:"/projects",
      element:<ZiziProjects />
    },

    {
      path:"/contact",
      element:<Contactzizi />
    },

    {
      path:"/donate",
      element:<Zizidonate />
    },

    {
      path:"/joinus",
      element:<Joinzizi />
    },
  ]);



  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

}

export default App;
