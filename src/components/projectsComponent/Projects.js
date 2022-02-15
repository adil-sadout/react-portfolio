import Project from "./Project.js"

export default function Projects({pinnedProjects}){

    return(
        <>
        {
            (pinnedProjects.length >0) &&
            <div  className="row">
                {pinnedProjects.map((project, index) => <Project key={index} project={project} />)}
            </div>
        }
        </>
        
    )
}