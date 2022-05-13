import React from 'react';
import { Accordion } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='d-flex justify-content-center' style={{ margin: '100px 0' }}>
                <Accordion defaultActiveKey="0" className=' accordian' >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Difference between javascript and nodejs</Accordion.Header>
                        <Accordion.Body>
                            Javascript is a programming language that is used for writing scripts on the website.
                            NodeJS is a Javascript runtime environment.Javascript can only be run in the browsers.Whereas we can run Javascript outside the browser with the help of NodeJS.Js is used in client side but Node js is used in server side.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
                        <Accordion.Body>
                            JWT means Json Web Token.JWT are a good way of securely transmitting information to the user. JWT consists of three parts: a header, payload, and signature. The header typically consists of two parts: the type of the token, which is JWT, and the algorithm that is used.
                            In JWT basically the server generates a token (JWT) that certifies the user identity, and sends it to the client.When The client  need data and hit the API for data then the the client will send the token back to the server for , then the server will check the identity and give the data to the particular user.In this way other user can't get the access of other user data.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="">
                        <Accordion.Header>When should you use nodejs and when should you use mongodb?</Accordion.Header>
                        <Accordion.Body>
                            SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases display data in form of tables so it is known as table-based database.NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.MySQL, Oracle etc. are the example of SQL database.MongoDB, BigTable etc. are the example of nosql database
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;