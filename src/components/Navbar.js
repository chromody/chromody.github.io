import React, { useState, useEffect } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

const Topbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-lg">
          <Container>
            <Navbar.Brand className="fs-3 font-FiraCode">
              Jesus Villanueva-Segovia
            </Navbar.Brand>
          </Container>
        </Navbar>
    );
}

export default Topbar;