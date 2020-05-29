import React, { Component } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import USAMap from "react-usa-map";
import { Redirect } from 'react-router-dom';
import mobilityLogo from '../../assets/images/Original.png';
import Button from 'react-bootstrap/Button';



class Home extends Component {


  state = { 
    redirect: null 
  };

  mapHandler = (event) => {
    console.log(event.target.dataset.name);
    // console.log(this.props.match.path);
    this.props.setRegion(event.target.dataset.name);
    this.setState({
      redirect: '/region'
    })
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return(
      <div>
      <br></br>
      <Container fluid="md">
        <Row>
          <Col>
          <img alt=" " src={mobilityLogo} id="mobility-logo"></img>
          <div className="big-div">
            <div className="jumbotron-elements-container">
              <div className="intro-container">
                <div className="mobility-container">
                  {/* <h1 className="mobility-mate-header">MobilityMate</h1> */}
                  <p className="about-mobility-mate">
                    <span id="mobility-word">MobilityMate</span> is a visualization tool based on Google's Mobility Trends report, which details changes in people's movement over time to various public venues such as parks, grocery stores, transit, and more. 
                    <br></br>
                    <br></br>
                    We've visualized the ever-changing data to make trends visible at a glance!
                  </p>
                  <Button variant="outline-info" size="sm"><a id="google-link" target='_blank' rel="noopener noreferrer" href="https://www.google.com/covid19/mobility/">Learn more</a></Button>{' '}
                </div>
              </div>
            </div>
          </div>
            <div>
              <div className="App">
                <USAMap onClick={this.mapHandler} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
    )
  }
}

export default Home;
