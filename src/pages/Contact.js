import React, { useEffect, useState } from 'react';
import Layout from './../layout/Layout';
import ReactJsonView from '@microlink/react-json-view'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [src, setSrc] = useState({
        email: "youremail@email.com",
        name: "name",
        title: "title",
        message: "message",
    });
    const [displayTrue, setDisplayTrue] = useState(false);
    const [success, setSuccess] = useState("failure");
    const [count, setCount] = useState(0);

    const updateSrc = (edit) => {
        setSrc(edit.updated_src);
    }


    /*
    emailjs.send("SERVICE","TEMPLATE",{
        title: "TITLE",
        name: "NAME",
        message: "MESSAGE",
        email: "EMAIL@gmail.com",
    });
    */

    const handleEmail = async () => {
        const form = new FormData();
        form.append('title', src.title);
        form.append('name', src.name);
        form.append('message', src.message);
        form.append('email', src.email);

        try {
            const response = await fetch("https://email-chromody.gbus.workers.dev/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: src.title,
                    name: src.name,
                    message: src.message,
                    email: src.email
                }),
            });

            if (response.ok) {
                console.log("SUCCESS!");
                setDisplayTrue(true);
                setSuccess("success");
            } else {
                throw new Error("Failed to send email");
            }
        } catch (error) {
            console.error("Error:", error);
            setDisplayTrue(true);
            setSuccess("failure");
        }
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
                            result
                        </div>
                    }
                </Container>
            </Container>
      </Layout>
    );
};
export default Contact;