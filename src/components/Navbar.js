import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";

const Topbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const [logoActive, setLogoActive] = useState(false);

    return (
        <>
            <Navbar bg="light" expand="lg" className="shadow-lg">
                <Container>
                    <Navbar.Brand className="fs-3 font-FiraCode">
                        <span onMouseEnter={() => {setLogoActive(true)}} onMouseLeave={() => {setLogoActive(false)}} onClick={() => {navigate("/")}} className={logoActive === true ? "text-primary" : ""}>Jesus Villanueva-Segovia</span>
                    </Navbar.Brand>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/#/">
                                <span style={{textShadow: pathname === "/" ? "4px 4px 3px" : ""}}>Home</span>
                            </Nav.Link>
                            <Nav.Link href="/#/Contact">
                                <span style={{textShadow: pathname === "/Contact" ? "4px 4px 3px" : ""}}>Contact</span>
                            </Nav.Link>
                            <Nav.Link href="/#/Portfolio">
                                <span style={{textShadow: pathname === "/Portfolio" ? "4px 4px 3px" : ""}}>Portfolio</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Topbar;
