import './App.css';
import React, { Component, Fragment } from 'react';
import { Button, Card } from 'react-bootstrap';

class MainPage extends Component {
    render() {
        return (
            <div className="main">
                {/*style={{backgroundImage: `url("https://tse2.mm.bing.net/th/id/OIP.pgN8nH-iTjrWthmPLWufMQHaEK?pid=ImgDet&rs=1")`}*/}
                <Fragment>
                    <Card className="card1">
                        <Card.Img variant="top" src="https://www.investmentexecutive.com/wp-content/uploads/sites/3/2018/03/600x800-bank-retail-branch-poemsuk-49813653.jpg" height='600px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ color: 'white', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '30px' }}>Welcome to our bank!</Card.Title>
                        </Card.ImgOverlay>

                    </Card>

                    <br />
                </Fragment>
            </div>
        )
    }
}
export default MainPage;