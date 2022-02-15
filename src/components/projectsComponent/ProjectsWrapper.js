import Projects from "./Projects.js"





export default function ProjectsWrapper({pinnedProjects}){


    



    return(
        <div className="projectWrapper container grid pb-4">
            <Projects pinnedProjects={pinnedProjects} />
        </div>
    )
}