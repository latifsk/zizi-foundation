import React from "react";
import { Route,Routes,  } from "react-router-dom";

import LandingPage from "./pages/home";
import Aboutzizi from "./pages/aboutZizi";
import Joinzizi from "./pages/joinZizi";
import OurProjects from "./pages/ourProjects";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import ProjectDetails from "./components/projectdetails";



function App() {

  return(
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

}

export default App;
