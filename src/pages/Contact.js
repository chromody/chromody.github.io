import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Layout from './../layout/Layout';

const Contact = () => {
    return (
      <Layout>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Card bg='dark' className="mt-4 shadow-lg p-1 text-center" style={{ display: 'inline-block' }}>
                <Card.Body>
                <Card.Text>
                    👋 Welcome!👋
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
      </Layout>
    );
};
export default Contact;