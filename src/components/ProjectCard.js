import "./style/ProjectCard.css";
import { useState, useEffect } from "react";
import SVG from "react-inlinesvg";

const ProjectCard = ({imgSrc, highlightImage, link, title, description}) => {
    let [active, setActive] = useState(false);

    return (
        <div className={`card bg-light rounded ${active ? "active" : ""}`} style={{ height: "400px", width: "250px", border: active ? "solid #378dfc 4px" : "none" }} onMouseEnter={() => {setActive(true)}} onMouseLeave={() => {setActive(false);}}>
            <div className="position-relative overflow-hidden">
                <img className={`card-top-img rounded-top`} src={imgSrc} style={{display: "block", width: "100%", height: "150px", objectFit: 'cover'}}/>
                <div className={`${active ? "overlay" : ""} d-flex align-items-center justify-content-center`}>
                    {
                        active && highlightImage != "" ? 
                            <a target="_blank" rel="noopener noreferrer" href={link} style={{color: "blue"}}>
                                <SVG src={highlightImage} className="svg-icon" style={{ height: "50px", width: "50px"}} preProcessor={(code) => code.replace(/fill=".*?"/g, 'fill="currentColor"')} />
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