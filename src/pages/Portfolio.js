import { useState, useEffect } from "react";
import Layout from './../layout/Layout';
import { projectData } from "./../data/project";
import ProjectCard from "./../components/ProjectCard";

const Portfolio = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            let projectInfo = await projectData();
            setData(projectInfo);
        }
        getData().then(() => {
            console.log(data);
        })
    }, [])

    return(
        <Layout>
            <div className='row rows-cols-1 rows-cols-md-2 gap-3'>
                {
                    data.map( (project, i) => {
                        console.log(project);
                        return (
                            <div className="col d-flex align-items-center justify-content-center" style={{maxWidth: "250px"}} key={i}>
                                <ProjectCard imgSrc={project.imageSrc} highlightImage={project.highlightImage} link={project.link} title={project.title} description={project.description} />
                            </div>
                        );
                    })
                }
            </div>
        </Layout>
    )
}

export default Portfolio;
