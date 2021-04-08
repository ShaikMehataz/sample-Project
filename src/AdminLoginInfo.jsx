import React, { useState, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col, Toast, Card, Carousel, CardColumns } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import User from './UserLogin';
import Admin from './AdminLogin';
import { Link } from 'react-router-dom';

function LoginInfo(props) {
    const [show, setShow] = useState(false);
    return (
        <div className="bg" >
            <Fragment>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        {/*<Form inline>

                            <Row>
                                <Col xs={6}>
                                    <Button onClick={() => setShow(true)} >LOGIN</Button>
                                </Col>
                            </Row>
                        </Form>*/}
                    </Navbar.Collapse>
                </Navbar>
                {/*<div style={{ marginRight: '0%', marginBottom: '10%', marginLeft: '10%' }}>*/}
                <div className="loginpage">
                    <Carousel>
                        {/*<Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://image.shutterstock.com/z/stock-photo-businessman-holding-word-banking-in-hand-with-icon-network-connection-on-virtual-screen-dark-1150180799.jpg" height="400"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                
                            </Carousel.Caption>
                        </Carousel.Item>*/}
                        {/*<Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/aa82a58f-2854-4017-a7c7-7eb9c87819ce/Personal/Home/content/Budget-Dictionary-Website-Banner-716X298.png" height="400"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                 </Carousel.Caption>
                        </Carousel.Item>*/}
                        {/*<Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://image.shutterstock.com/z/stock-vector-bank-office-interior-professional-banking-service-finance-manager-and-clients-credit-deposit-1432952840.jpg" height="400"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>*/}
                    </Carousel>


                    {/*<Row style={{ marginLeft: '39%' }}>
                        <Col xs={6}>

                            <Link class="btn btn-primary mr-2" to='/admin'>Admin Login</Link><br /><br />
                            <Link class="btn btn-primary mr-2" to='/user'>User Login</Link>

                        </Col>
                        </Row>*/}
                    <CardColumns>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAkFBMVEX39/cAAAD////7+/u/v7/t7e319fX29vbr6+uEhITo6OjKysra2trl5eXw8PCysrKkpKS5ubnFxcWSkpKampqsrKw5OTl+fn4eHh5AQECMjIwtLS3f399zc3PV1dXIyMhmZmYXFxdVVVVJSUldXV0mJiYbGxt2dnY1NTWAgIBGRkYODg5gYGBra2tPT0+fn5905Eor
                            AAANfklEQVR4nO1d6VbiMBSuCVT2fVFAFJTRGUTf/+2mBYHem6S9N0kXz+E7Z/4MNunXbHdPENxwww033HDDDTdcIaXQQR5R9svZI2YVroeT8WLRvGCxWIzHk+9pv9butOSRZdnvyUQ8WvXn78PuLh3Lz3G/ExMs+4WpiHh1h/NlBq0E3r7bwS8Yv2jAeqPmA53Xhd90Venhi4g1pls+rx8sF+uq0pOiPn21JnbCbtGpHj0pgtqbI7ETZoN6pdhJsWp6IXbCoV0ZdkLUvjwyizGbRhOhfIhwkHWK2WA/6ZXNTvQmO
                            RA7YVwqOxGOc2N2ZBeWxU7Ib9orfrwd3mNBcjFu/n1/Omwf6Wf7oBRxRYr+PvPV3hb9dV2nB4Stzqg/ec8+D3ej4vdMsZ6lv9TDeyxFGcXEWMWJSa7684/0hrbdYiemCJ9S3+dl2iVqLzHDXm2eOkvHBQ6dFMO0V5mPJFOqj/itJo/mFnfrooZO1FOkq6e2tPrKsWI0Nh+UzWL2FFEzvsF2GDpMn+ijtD9NTS8LGDoZzE3dL1bO60KK7sLU/Hfeq050DdvjcuoyZFdEuu3gj2FW1HMlJ5713c5qHmVbIaf6hbfPc16
                            KgYGZ5+kiZF9/KAxyIye0StrDMIeFIKT+M77ns+ikeNH1Nslpdxah9ku+hjl0JwOd8Heo57cExErX467hnZzsacS+Tb7KfySO64au4/lzyrpm65oHeQsLoqdbB22v5GRL3bf2zwUIeXrRdeSxZ9naKO2/9YoRzkVLY2iqeSOnozYpTO+QQmO48EVONlRqfqd8BsQor2kp68pa+2gVrAp3Va+QD/lL9pR233LfH5WXCFSVseP8EjJQ9OG/ZRjWxF+FXMtZo1J8ThMLavLk/Q3De2nrBxaKkXfpKH4JxeYz5VKLyNyvp4
                            vPx5PJb/PvZdzvcC0q8asoQsrWaQIJRQseMtuLNOmBzt146LNdUeox7rI61E/FpCbk8J+G2M9nHzIVWtVSw55EF8i1GzURZjlCmM4aldzacsnJHm6pz3kTKSkunnHAaVOZlnsuqXNDePfnzIBIyN0QqB0/GOPbiyl6+s1qVioWhDGjGdGge7+/OFKOchTYmFBkGzUy57xBqlFdAWeuC2wfXfGXXIg8UIzDREqjfdaAOeO0E+hI+WBzw4f28p7chOzxXftfdG1QhsgEwFkrxwawkbVL77th49tf0k08coWe5UrNSK+hq0
                            s6bY+CDZ0cXs2PLG5Y1V3QqdXtqEXk6NMSKwWcvRKP+iudWmAfbLKkv6BAHheGzVKgw4nuQBEu0Wpf9E/YhU8e6E8i+wRdilQOHx6a9I6QfEKWK9GIP9F75B3ZKujmK3TK/SM+KJFmQ17jeKZYgDz7cV9D2oMSbgeMGekejvdJ7ww6sZYkbmgq0wVtRUa3QY1+hEM1haSkSHhs00VRRd2zwZ97MjeoOf8hvCdabfRTW+9VZYNuRkMiL0GZENDUGlJ78rCRnNAj99gAz+0yB05CkwRdmtEYR+1AF+uRZJi5VQpgl3qgr+y6J
                            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" height='200px' width='10px' />
                            <Card.ImgOverlay>
                                <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                                <Card.Text style={{ color: 'white', fontFamily: 'serif', fontSize: '100px', textAlign: 'center', marginTop: '100px' }} ><Link class="btn btn-primary mr-2" to='/admin'>Admin Login</Link><br /><br /></Card.Text>
                            </Card.ImgOverlay>

                        </Card >
                        <Card style={{ width: '15rem' }} className="">
                            <Card.Img variant="top" src="data:image/png;base64,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" height='200px' width='10px' />
                            <Card.ImgOverlay>
                                <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                                <Card.Text style={{ color: 'white', fontFamily: 'serif', fontSize: '100px', textAlign: 'center', marginTop: '100px' }} ><Link class="btn btn-primary mr-2" to='/user'>User Login</Link></Card.Text>
                            </Card.ImgOverlay>

                        </Card>
                    </CardColumns>
                </div>
            </Fragment>
        </div>
    )
}
// render(<LoginInfo />);
export default LoginInfo;