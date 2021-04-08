import React, { useState, Fragment, useEffect } from 'react';
import { Form, Button, Card, Alert, Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ResetLogin from './ResetLogin';
import Email from './Email';
import Password from './Password';


import { userDetails } from './Actions';
import './App.css';
import { connect } from 'react-redux';
import App from './App';


function Admin(props) {
    // const [changeMobile, setChangeMobile] = useState(false);
    // const [changeEmail, setChangeEmail] = useState(false);
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [admin, setAdmin] = useState([]);
    // const showEmail = () => {
    //     setChangeMobile(!true);
    // }

    // const showMobile = () => {
    //     setChangeMobile(true);
    // }

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }
    useEffect(() => {
        loadAdmin();
    }, []);

    const loadAdmin = async () => {
        const result = await axios.get("http://localhost:3003/admin");
        setAdmin(result.data.reverse());
    }

    const onSubmit = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passwordVal);

        if (isEmailValid && isPasswordValid) {
            for (let i = 0; i < admin.length; i++) {
                debugger
                if (emailVal == admin[i].email && passwordVal == admin[i].password) {
                    return props.history.push('/home');
                    //props.userDetails(emailVal);

                } else {
                    if (i == admin.length - 1) {
                        alert("User name and password not matched");
                        //    }else {
                        //        alert("Success")
                    }
                }
            }
        }
        else {
            alert("Invalid Credentials");
        }
    }

    const goToForgot = () => {
        props.history.push('/ResetLogin');
    }
    return (
        <Fragment>
            <div className="admin">
                <Card style={{ width: '22rem' }}>
                    <Card.Body style={{ backgroundImage: `url("https://www.bing.com/th?id=OIP.5f59WwP6EcFsgKe922PcbAHaEo&w=246&h=160&c=8&rs=1&qlt=90&dpr=1.5&pid=3.1&rm=2")`, backgroundSize: 'cover' }}>
                        <Card.Title className=''>Admin Login</Card.Title><br />
                        <Card.Text>
                            <br />
                            <Form>
                                <div style={{ marginRight: '200px' }}>

                                </div>
                                <Email emailVal={emailVal}
                                    emailValueChange={emailValueChange} />

                                <Password
                                    passwordVal={passwordVal}
                                    passwordChange={passwordValueChange} />

                                <Button variant="warning" size="sm" onClick={onSubmit} block>Log In</Button>
                                {
                                    showAlert === true && (
                                        <Alert variant="success">Success</Alert>
                                    )}{(showAlert === false &&
                                        <Alert variant="warning">Failure</Alert>
                                    )}
                                <br />


                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br /><br />
            </div>
        </Fragment>

    )
}
//export default Admin;
const mapStateToProps = (state) => ({ userData: state.userData });

function mapDispatchToProps(dispatch) {
    return {
        userDetails: function (userData) {
            return dispatch(userDetails(userData))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
