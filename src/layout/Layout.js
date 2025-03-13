import React, { useState, useEffect } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Footer from "./../components/Footer";
import Topbar from "./../components/Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Topbar />
            <Container style={{ paddingTop: '30px' }}>
                {children}
            </Container>
            <Footer />
        </div>
    );
};

export default Layout;