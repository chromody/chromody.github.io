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

    const handleEmail = () => {
        const form = document.createElement('form');

        // Manually create inputs and append them to the form
        const titleInput = document.createElement('input');
        titleInput.name = 'title';
        titleInput.value = src.title;
        form.appendChild(titleInput);

        const nameInput = document.createElement('input');
        nameInput.name = 'name';
        nameInput.value = src.name;
        form.appendChild(nameInput);

        const messageInput = document.createElement('textarea');
        messageInput.name = 'message';
        messageInput.value = src.message;
        form.appendChild(messageInput);

        const emailInput = document.createElement('input');
        emailInput.name = 'email';
        emailInput.value = src.email;
        form.appendChild(emailInput);

        emailjs
        .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form, {
            publicKey: process.env.REACT_APP_PUBLIC_KEY,
        })
        .then(
            () => {
                console.log('SUCCESS!');
                setDisplayTrue(true);
                setSuccess("success");
            },
            (error) => {
                setDisplayTrue(true);
                setSuccess("failure");
                console.log(error)
            },
        );
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