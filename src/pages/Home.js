import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { TypingCodeBlock, typingCodeBlockTimer } from "react-code-blocks-typing";
import Layout from './../layout/Layout';
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const greetings = `greeting="👋Welcome!👋"\nprint(greeting)\ndisplayButtonToPortfolio()\n// Output: Welcome!\n//->`;
    const typingSpeed = 25;
    const [displayPopup, setDisplayPopup] = useState(false);
    typingCodeBlockTimer(greetings, typingSpeed).then( () => {
      setDisplayPopup(true);
    })
    
    return (
      <Layout> 
          <div className="bg-dark p-3 rounded drop" style={{boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'}}>
            greetings.py
            <TypingCodeBlock
              text={greetings}
              language={"python"}
              showLineNumbers={50}
              theme={"dracula"}
              typingSpeed={typingSpeed}
            />
          </div>
  
          {
            displayPopup && 
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <Card bg='dark' className="mt-4 shadow-lg p-1 text-center" style={{ display: 'inline-block' }}>
                    <Card.Body>
                      <Card.Text>
                        <span className="d-flex flex-column">
                          <span>👋 Welcome!👋</span>
                          <Button className="button-primary mt-2 p-0" onClick={() => {
                            navigate("/portfolio")
                          }}>
                            <FaArrowRightLong />
                          </Button>
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </div>
          }
      </Layout>
    );
};
export default Home;
