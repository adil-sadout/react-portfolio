

export default function Project({project}){
    return(
        <div className="projectWithImage">

            <img src={project.image} alt={project.name} />
            <div className="projectContent">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div>
                    <a class="defaultbutton" href={project.livesite} target="_blank" rel="noreferrer" >Live Site</a>
                    <a class="defaultbutton" href={project.sourcecode} target="_blank" rel="noreferrer" >Source Code</a>
                </div>
                
            </div>
        </div>
        
    )
}