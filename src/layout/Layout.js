import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from "./../components/Footer";
import Topbar from "./../components/Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Topbar />
            <Container style={{ paddingTop: '30px', paddingBottom: "125px" }}>
                {children}
            </Container>
            <div className="fixed-bottom" style={{}}>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;