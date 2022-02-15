

export default function Project({project}){
    return(
        <div className="d-flex col-lg-6 justify-content-center align-items-center gy-5">
            <div className="px-1 w-50">
                <img src={project.image} className="img-thumbnail w-100" alt={project.name} />
            </div>
            <div className="p-2 w-50">
                <p className="h2">{project.name}</p>
                <p>{project.description}</p>
                <div>
                    <a className="btn btn-sm btn-warning m-1" href={project.livesite} target="_blank" rel="noreferrer" >Live Site</a>
                    <a className="btn btn-sm btn-warning m-1" href={project.sourcecode} target="_blank" rel="noreferrer" >Source Code</a>
                </div>
                
            </div>
        </div>
        
    )
}