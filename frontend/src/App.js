import React, {Component, Fragment} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Profile from './components/profile/Profile';
import actions from './services/index';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Region from './components/Regions/Region';
import MobilityTrends from './components/Mobility/MobilityTrends';

class App extends Component {
  
  state = { }
  
  async componentDidMount() {
    let user = await actions.isLoggedIn()
    // This is coming from index.js
    // same as --> await Axios.get('http:localhost:5000/is-logged-in', { withCredentials: true }
    this.setState({...user.data})
    console.log('coolest ')

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
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      {this.state.email}

      <Nav variant="tabs" defaultActiveKey="/home"
        activeKey="/"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/" eventKey="/">Home</Nav.Link>
        </Nav.Item>
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
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/log-in">Log In</Nav.Link>
          </Nav.Item>
        </Fragment>
        }
      </Nav>
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


