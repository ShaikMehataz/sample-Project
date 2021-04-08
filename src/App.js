import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import CurrentBalance from './CurrentBalance';
import SubAmount from './SubAmount';
import CurrentWithBalance from './CurrentWithBalance';
import User from './UserLogin';
import Admin from './AdminLogin';
import About from './About';
import LoginInfo from './AdminLoginInfo';
import Userpage from './UserPage';
import AddAmount from './AddAmount';
import ResetLogin from './ResetLogin';
import MainPage from './MainPage';
import Home from './Home';
import AddUser from './AddUsersDetails';
import EditUser from './Edit';
import Users from './UsersDetails';
import ResetLogin1 from './ResetLogin1';
import UserView from './UserDisplay';


class App extends Component {

  render() {
    return (
      <Fragment>
        <Router>
          <div className="App">
            <Navbar bg="dark" variant="dark" sticky="top">
              <Navbar.Brand href="#home">ABC Banking</Navbar.Brand>
              <Nav className="mr-auto">

                <Nav.Link>
                  <Link to="/About">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/loginInfo">Login</Link>
                </Nav.Link>

              </Nav>
              <Navbar.Text>{this.props.userData}</Navbar.Text>
              {/*<Nav.Link>
                  <Link to="/main">Logout</Link>
              </Nav.Link>*/}
            </Navbar>


            <Switch>
              <Route exact path="/"><Redirect to="/main" /></Route>
              <Route path="/main" component={MainPage}></Route>
              <Route path="/admin" component={Admin}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/ResetLogin" component={ResetLogin}></Route>
              <Route path="/ResetLogin1" component={ResetLogin1}></Route>


              <Route path="/loginInfo" component={LoginInfo}></Route>

              <Route path="/userpage" component={Userpage}></Route>
              <Route path="/About" component={About}></Route>

              <Route path="/addamount" component={AddAmount}></Route>
              <Route path="/currentadd" component={CurrentBalance}></Route>
              <Route path="/subamount" component={SubAmount}></Route>
              <Route path="/currentsub" component={CurrentWithBalance}></Route>
              <Route path="/view/:id" component={UserView}></Route>


              <Route path="/home" component={Home}></Route>
              <Route path="/add" component={AddUser}></Route>
              <Route path="/edit/:id" component={EditUser}></Route>
              <Route path="/users/:id" component={Users}></Route>



              <Route path="**">
                <div>404 not found</div>
              </Route>
            </Switch>

          </div>
        </Router>

      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ userData: state.userData })
}
export default connect(mapStateToProps)(App);

