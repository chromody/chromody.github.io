import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { CodeBlock, dracula  } from 'react-code-blocks';

function App() {
  const helloWorld = "const greeting = 'Hello, world!';\nconsole.log(greeting);\n// Output: Hello, world!";
  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow-lg">
        <Container>
          <Navbar.Brand className="fw-bold fs-3">
            Jesus Villanueva-Segovia  
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ paddingTop: '30px' }}>
        <div className="bg-dark p-3 rounded">
          <CodeBlock
          text={helloWorld}
          language={"English"}
          showLineNumbers={50}
          theme={dracula}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
