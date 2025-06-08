import { useState, useEffect } from "react";
import Layout from './../layout/Layout';
import { projectData } from "./../data/project";
import ProjectCard from "./../components/ProjectCard";
import { TypingCodeBlock } from "react-code-blocks-typing";


const Portfolio = () => {
    const [data, setData] = useState([]);
    const text = `portfolio=getPortfolioInstance()\nportfolio.display()`;
    const typingSpeed = 25;
    useEffect(() => {
        async function getData() {
            try {
                let projectInfo = await projectData();
                setData(projectInfo);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, [])

    return(
        <Layout>
            <div className="bg-dark p-3 rounded drop mb-4" style={{boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', width: "auto"}}>
                portfolio.py
                <TypingCodeBlock
                text={text}
                language={"python"}
                showLineNumbers={50}
                theme={"dracula"}
                typingSpeed={typingSpeed}
                />
            </div>

            <div className='row rows-cols-1 rows-cols-md-2 gap-3 d-flex justify-content-center align-items-center'>
                {
                    data && data.map( (project, i) => {
                        return (
                            <div className="col d-flex align-items-center justify-content-center" style={{maxWidth: "350px"}} key={i}>
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
