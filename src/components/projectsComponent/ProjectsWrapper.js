import Projects from "./Projects.js"





export default function ProjectsWrapper({pinnedProjects}){


    



    return(
        <div className="projectWrapper">
            <Projects pinnedProjects={pinnedProjects} />
        </div>
    )
}