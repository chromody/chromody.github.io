const ProjectCard = ({imgSrc, highlightImage, link, title, description}) => {
    console.log(imgSrc);
    return (
        <div className="card w-25 bg-light rounded border rounded" style={{height: "400px"}} onMouseEnter={() => {}} onMouseLeave={() => {}}>
            <img className="card-top-img rounded-top" src={imgSrc} style={{display: "block", width: "100%", height: "150px", objectFit: 'cover'}}/>
            <div className="card-body text-center">
                <h4>
                    {title}
                </h4>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;