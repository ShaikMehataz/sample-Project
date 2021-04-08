import React, { Fragment, useState, useEffect, cloneElement } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem, Row, Col, Navbar, Nav, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const UsersDetails = (props) => {
    const [user, setUser] = useState({
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        aadhar: ' ',
        pan: '',
        balance: ' ',
        cType: ' ',
        sType: ' ',
        currentbalance: '0',
        account: ''

    });
    const [showButton, setShowBotton] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }
    const userButton = () => {
        props.history.push('/addamount');
    }
    const currentAddAmount = () => {
        props.history.push('/currentadd');
    }
    const userButton1 = () => {
        props.history.push('/subamount');
    }
    const currentWithAmount = () => {
        props.history.push('/currentsub');
    }
    const currentButton = () => {
        setShowBotton(!true);
    }
    const savingsButton = () => {
        setShowBotton(true);
    }
    return (
        <center>


            <div className="userpage">
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home">Welcome!</Navbar.Brand>


                    <Nav className="mr-auto">

                    </Nav>

                    <Nav.Link>
                        <Link to="/main">Logout</Link>
                    </Nav.Link>
                </Navbar>
                <h3 > User Id :{id}</h3>
                <h3 > Account No :{user.account}</h3>
                <CardColumns>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src="https://cdn.dribbble.com/users/2266613/screenshots/5981611/card-dribbble_4x.jpg" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                            <Card.Text style={{ color: 'white', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '90px' }} ><Button variant="primary" size="sm" onClick={currentButton} block>Current</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card >
                    <Card style={{ width: '10rem' }} className="">
                        <Card.Img variant="top" src="https://www.clipartkey.com/mpngs/m/47-472448_indian-money-logo-png-indian-currency-notes-png.png" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                            <Card.Text style={{ color: 'white', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '90px' }} ><Button variant="primary" size="sm" onClick={savingsButton} block>Savings</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card>
                </CardColumns>


                <div className='demo' style={{ width: '40rem', marginLeft: "40px" }}>
                    {
                        showButton === true && (
                            <div>
                                <hr />
                                <button class="btn btn-outline-primary btnAdd mr-2" onClick={userButton}>Add Amount</button><br /><br />
                                <button class="btn btn-outline-primary btnAdd" onClick={userButton1}>Withdraw Amount</button>
                                <br /><br />
                                <ListGroup>

                                    <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                    <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                    <ListGroup.Item>Account No : {user.account}</ListGroup.Item>
                                    <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>
                                    <ListGroup.Item>Balance : {user.balance}</ListGroup.Item>
                                    <ListGroup.Item>Account Type : {user.sType}</ListGroup.Item>

                                    <br />

                                </ListGroup>
                            </div>
                        )}{(showButton === false &&
                            <div>
                                <hr />
                                <button class="btn btn-outline-primary btnAdd mr-2" onClick={currentAddAmount}>Add Amount</button><br />
                                <button class="btn btn-outline-primary btnAdd" onClick={currentWithAmount}>Withdraw Amount</button>
                                <br /><br />
                                <ListGroup>

                                    <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                    <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                    <ListGroup.Item>Account No : {user.account}</ListGroup.Item>
                                    <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>
                                    <ListGroup.Item>Balance : {user.currentbalance}</ListGroup.Item>
                                    <ListGroup.Item>Account Type : {user.cType}</ListGroup.Item>

                                    <br />
                                </ListGroup>
                            </div>
                        )}
                </div>


            </div><br />

        </center>

    )

}
export default UsersDetails;