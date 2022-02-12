import Navbar from "./components/navbarComponents/Navbar";
import LandingPage from './components/landingpageComponents/LandingPage.js';
import {Routes , Route} from "react-router-dom";
import ContactPage from "./components/contactComponents/ContactPage.js";
import ProjectsWrapper from "./components/projectsComponent/ProjectsWrapper.js";
import {useState, useEffect} from "react";

function App() {

  const [pinnedProjects, setPinnedProjects] = useState([]);

    useEffect(()=>{
        fetch("https://gh-pinned-repos.egoist.sh/?username=adil-sadout")
        .then(res => res.json())
        .then(data => {
          setPinnedProjects(data)
        })
        .catch(err => console.log(err))
    },
    [])


  return (
    <div className="App">
      <Navbar/>
      <Routes >
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/projects" element={<ProjectsWrapper pinnedProjects={pinnedProjects} />} />
        <Route exact path="/contact" element={<ContactPage/>}/>
        <Route path="*" element="error 404"/>
      </Routes> 
    </div>
  );
}

export default App;
