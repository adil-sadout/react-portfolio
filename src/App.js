import Navbar from "./components/navbarComponents/Navbar";
import LandingPage from './components/landingpageComponents/LandingPage.js';
import {Routes , Route} from "react-router-dom";
import ContactPage from "./components/contactComponents/ContactPage.js";
import ProjectsWrapper from "./components/projectsComponent/ProjectsWrapper.js";
import {useState, useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "./firebase-config.js";


function App() {

  const projectsCollectionRef = collection(db, "projects");
  const [pinnedProjects, setPinnedProjects] = useState([]);


  const projectList = async ()=>{
    const data = await getDocs(projectsCollectionRef);
    console.log(data);
    setPinnedProjects(data.docs.map ((doc)=> ({...doc.data(), id:doc.id}) ))
    console.log(pinnedProjects);
  }

  

  useEffect(()=>{
    projectList();

  },[])





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
