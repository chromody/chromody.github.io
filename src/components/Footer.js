import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SVG from "react-inlinesvg";
import "./style/Icons.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white py-3 mt-auto w-auto h-auto">
            <Container>
                <Row>
                    <Col>
                        <div className="">
                            <span>Jesus Villanueva-Segovia</span>
                            <br />
                            <span style={{color: "#77a39d", fontSize: "14px"}}>Developer From United States</span>
                        </div>
                        <div className="pt-1 pb-1 d-flex align-items-center">
                            <a href="https://github.com/chromody" className="text-white " target="_blank" rel="noopener noreferrer">
                                <SVG className="svg-icon" src={"projectImages/Github_Invertocat_Dark.svg"}  style={{ height: "30px", width: "30px", fill: "#52e0c4"}} preProcessor={(code) => code.replace(/fill=".*?"/g, 'fill="currentColor"')} />
                            </a> 
                            <a href="https://www.linkedin.com/in/jesusv-s/" className="text-white" target="_blank" rel="noopener noreferrer">
                                <SVG className="svg-icon" src={"icons8-linkedin.svg"}  style={{ height: "35px", width: "35px", fill: "#52e0c4"}} preProcessor={(code) => code.replace(/fill=".*?"/g, 'fill="currentColor"')} />
                            </a> 
                            <a href="https://drive.google.com/file/d/1DOyr9Ph8uGpFo1pch7-HJeNHUjfc7-Sc/view?usp=drive_link" className="text-white" target="_blank" rel="noopener noreferrer" download>
                                <SVG className="svg-icon" src={"resume.svg"}  style={{ height: "30px", width: "30px", fill: "#52e0c4"}} preProcessor={(code) => code.replace(/fill=".*?"/g, 'fill="currentColor"')} />
                            </a>
                            <a href="/#/contact" className="text-white">
                                <SVG className="svg-icon" src={"email.svg"}  style={{ height: "30px", width: "30px", fill: "#52e0c4"}} preProcessor={(code) => code.replace(/fill=".*?"/g, 'fill="currentColor"')} />
                            </a>
                        </div>
                        <span style={{fontSize: "10px"}}>© {currentYear} Jesus Villanueva-Segovia</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;