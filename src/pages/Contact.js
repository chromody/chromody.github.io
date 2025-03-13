import React, { useEffect, useState } from 'react';
import Layout from './../layout/Layout';
import ReactJsonView from '@microlink/react-json-view'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Contact = () => {
    const [src, setSrc] = useState({
        email: "youremail@email.com",
        title: "title",
        message: "message",
    });
    const [displayTrue, setDisplayTrue] = useState(false);
    const [success, setSuccess] = useState("failure");
    const [count, setCount] = useState(0);

    const updateSrc = (edit) => {
        setSrc(edit.updated_src);
    }

    const handleEmail = () => {
        console.log(src);
        setDisplayTrue(true);
        setSuccess("success");
    }

    const messageColorMap = {
        "success": "success",
        "failure": "danger",
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 20000);
    
        return () => {
            setDisplayTrue(false);
            clearInterval(interval)
        };
      }, [count]); 


    return (
      <Layout>
            <Container>
                <Container className="d-flex flex-column align-content-center justify-items-center w-50">
                    <Card className="p-2 mt-4 shadow-lg bg-light">
                        <ReactJsonView 
                            src={src} 
                            name="emailForm" 
                            displayDataTypes={false} 
                            onEdit={(o) => {updateSrc(o)}}
                        />
                    </Card>
                    <Button className="mt-3" variant="success" onClick={() => {handleEmail()}}>
                        Submit
                    </Button>
                    {
                        displayTrue &&
                        <div className={`mt-3 text-${messageColorMap[success]}`}>
                            Success
                        </div>
                    }
                </Container>
            </Container>
      </Layout>
    );
};
export default Contact;