import "./style/ProjectCard.css";
import { useState, useEffect } from "react";

const ProjectCard = ({imgSrc, highlightImage, link, title, description}) => {
    let [active, setActive] = useState(false);

    return (
        <div className={`card bg-light rounded ${active ? "active" : ""}`} style={{ height: "400px", width: "250px" }} onMouseEnter={() => {setActive(true)}} onMouseLeave={() => {setActive(false);}}>
            
            <div style={{position: "relative"}}>
                <img className={`card-top-img ${active ? "" : "rounded-top"}`} src={imgSrc} style={{display: "block", width: "100%", height: "150px", objectFit: 'cover'}}/>
                <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    {
                        active && highlightImage != "" ? 
                            <a href={link}>
                                <img src={highlightImage}/>
                            </a>
                        : 
                            <></>
                    }
                </div>
            </div>
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