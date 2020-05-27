import React, {Component, Fragment} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import '../src/App.css';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Profile from './components/profile/Profile';
import actions from './services/index';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Region from './components/Regions/Region';
import MobilityTrends from './components/Mobility/MobilityTrends';


class App extends Component {
  state = {}
  async componentDidMount() {
    let user = await actions.isLoggedIn()
    // This is coming from index.js
    // same as --> await Axios.get('http:localhost:5000/is-logged-in', { withCredentials: true }
    this.setState({...user.data})
  }
  setUser = (user) => this.setState(user)
  logOut = async () => {
    let res = await actions.logOut();
    console.log(res);
    this.setUser({email:null, createdAt: null, updatedAt: null, _id: null });
  }
  setRegion = (regionName) => {
    console.log(regionName)
    this.setState({
      regionName
    })
  }
  render(){
    return (
    <BrowserRouter>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" id="mobility-mate">MobilityMate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        {this.state.email ?
        <Fragment>
          <Nav.Item>
            <Nav.Link onClick={this.logOut} href='/#'>Log Out</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
          </Nav.Item>
        </Fragment>
        :
        <Fragment>
          <Nav.Item>
            <NavLink to="/sign-up" id="sign-up-link">Sign Up</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/log-in" id="log-in-link">Log In</NavLink>
          </Nav.Item>
        </Fragment>
        }
      </Nav>
        {this.state.email ?
            <Nav inline>
              <div>Logged in as <a href='/profile'>{this.state.email}</a></div>
            </Nav>
          :
          <div></div>
        }
        </Navbar.Collapse>
    </Navbar>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} setRegion={this.setRegion}/>} />
        <Route exact path="/sign-up" render={(props)=><SignUp {...props} setUser={this.setUser} />} />
        <Route exact path="/log-in" render={(props) => <LogIn {...props} setUser={this.setUser}/>} />
        <Route exact path="/profile" render={(props) => <Profile {...props} user={this.state}/>} />
        <Route exact path="/region" render={(props) => <Region {...props} user={this.state} regionName={this.state.regionName}/>} />
        <Route exact path="/mobility-trends" render={(props) => <MobilityTrends {...props} user={this.state}/>} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
  }
}
export default App;


