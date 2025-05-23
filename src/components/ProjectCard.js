import "./style/ProjectCard.css";
import { useState } from "react";
import SVG from "react-inlinesvg";

const ProjectCard = ({imgSrc, highlightImage, link, title, description}) => {
    let [active, setActive] = useState(false);

    return (
        <div className={`card bg-light rounded ${active ? "active" : ""}`} style={{ height: "650px", width: "350px", border: active ? "solid #378dfc 4px" : "none" }} onMouseEnter={() => {setActive(true)}} onMouseLeave={() => {setActive(false);}}>
            <div className="position-relative overflow-hidden">
                <img className={`card-top-img rounded-top`} src={imgSrc} alt="" style={{display: "block", width: "100%", height: "200px", objectFit: 'cover'}}/>
                <div className={`${active ? "overlay" : ""} d-flex align-items-center justify-content-center`}>
                    {
                        active && highlightImage !== "" ? 
                            <a target="_blank" rel="noopener noreferrer" href={link} style={{color: "blue"}}>
                                <SVG src={highlightImage} className="svg-icon" style={{ height: "50px", width: "50px"}} preProcessor={(code) => code.replace(/fill=".*?"/g, 'fill="currentColor"')} />
                            </a>
                        : 
                            <></>
                    }
                </div>
            </div>
            <div className="card-body overflow-scroll">
                <h4 className="w-full text-center" style={{color: "#485785" }}>
                    {title}
                </h4>
                <small className="w-full h-full text-start text-body text-small">
                    {description}
                </small>
            </div>
        </div>
    );
}


export default ProjectCard;