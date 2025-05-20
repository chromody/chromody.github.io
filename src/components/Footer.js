import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white text-center py-3 mt-auto fixed-bottom">
            <Container>
            <Row>
                <Col>
                <p>© {currentYear} Jesus Villanueva-Segovia. All Rights Reserved.</p>
                <p>
                    <a href="https://github.com/chromody" className="text-white" target="_blank" rel="noopener noreferrer">
                    GitHub
                    </a> | 
                    <a href="https://www.linkedin.com/in/jesusv-s/" className="text-white" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    </a> | 
                    <a href="/JesusResume.pdf" className="text-white" target="_blank" rel="noopener noreferrer" download>
                    Resume
                    </a> |
                    <a href="/#/contact" className="text-white">
                    Contact
                    </a>
                </p>
                </Col>
            </Row>
            </Container>
        </footer>
    );
}

export default Footer;