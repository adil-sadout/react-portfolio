

export default function Project({project}){
    return(
        <div>
            <h2>{project.repo}</h2>
            <a href={project.repo} target="_blank" rel="noreferrer" >Github Link</a>
            
            
        </div>
    )
}