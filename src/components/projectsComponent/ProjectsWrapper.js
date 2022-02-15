import Projects from "./Projects.js"





export default function ProjectsWrapper({pinnedProjects}){


    



    return(
        <div className="projectWrapper container grid">
            <Projects pinnedProjects={pinnedProjects} />
        </div>
    )
}