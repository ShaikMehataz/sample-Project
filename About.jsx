import React from 'react';
import { Button, Row, Col, Toast, Card, Carousel, CardColumns, Navbar } from 'react-bootstrap';
import './App.css';

class About extends React.Component {

    render() {
        return (

            <div className="about" style={{ marginRight: '10%', marginBottom: '20%', marginLeft: '10%' }}>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home"></Navbar.Brand>
                </Navbar>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.moneycontrol.com/static-mcnews/2017/05/Bank_banks-770x433.jpg" height="500"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/59184347599521.587f5b5451734.jpg" height="500"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.shutterstock.com/z/stock-photo-businessman-holding-word-banking-in-hand-with-icon-network-connection-on-virtual-screen-dark-1150180799.jpg" height="500"
                            alt="second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/aa82a58f-2854-4017-a7c7-7eb9c87819ce/Personal/Home/content/Budget-Dictionary-Website-Banner-716X298.png" height="500"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.shutterstock.com/z/stock-vector-bank-office-interior-professional-banking-service-finance-manager-and-clients-credit-deposit-1432952840.jpg" height="500"
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        )
    }
}
export default About;