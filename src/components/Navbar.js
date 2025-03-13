import React, { useState } from 'react';
import { Navbar, Container, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'; // Import tray/hamburger icon from react-icons

const Topbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="light" expand="lg" className="shadow-lg">
                <Container>
                    <Navbar.Brand className="fs-3 font-FiraCode">
                        Jesus Villanueva-Segovia
                    </Navbar.Brand>
                    
                    {/* Tray Icon for opening Offcanvas */}
                    <div className="ms-auto">
                        <FaBars 
                            size={30} 
                            onClick={handleShow} 
                            style={{ cursor: 'pointer' }} // Make the icon clickable
                        />
                    </div>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="list-unstyled">
                        <li>
                            <a href="/" className="text-decoration-none">Home</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-decoration-none">Contact</a>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Topbar;
