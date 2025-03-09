import React, { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { CodeBlock, dracula } from 'react-code-blocks';

function App() {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [displayPopup, setDisplayPopup] = useState(false);
  const greetings = `const greeting=👋Welcome!👋\nprint(greeting)\n// Output: Welcome!`;

  useEffect(() => {
    if (charIndex < greetings.length) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prevText) => prevText + greetings[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 25); // Typing speed (100ms per character)

      // Cleanup interval on component unmount
      return () => clearInterval(typingInterval);
    }
    setDisplayPopup(true);
  }, [greetings, charIndex]); // Trigger when charIndex changes

  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow-lg">
        <Container>
          <Navbar.Brand className="fs-3 font-FiraCode">
            Jesus Villanueva-Segovia
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ paddingTop: '30px' }}>
        <div className="bg-dark p-3 rounded drop" style={{boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'}}>
          greetings.py
          <CodeBlock
            text={displayedText}
            language="python"
            showLineNumbers={50}
            theme={dracula}
          />
        </div>

        {
          displayPopup && 
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Card bg='dark' className="mt-4 shadow-lg p-1 text-center" style={{ display: 'inline-block' }}>
                <Card.Body>
                  <Card.Text>
                    👋 Welcome!👋
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
        }
      </Container>
    </div>
  );
}

export default App;
