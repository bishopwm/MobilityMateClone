import React, { Component } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import USAMap from "react-usa-map";
import { Redirect } from 'react-router-dom';



class Home extends Component {


  state = { 
    redirect: null 
  };

  mapHandler = (event) => {
    console.log(event.target.dataset.name);
    console.log(this.props.match.path);
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
          <Jumbotron className="jumbotron">
            <h1>MobilityMate</h1>
            <p>
              MobilityMate is a visualization tool based on Google's Mobility Trends report, which details changes in people's movement over time to various public venues such as parks, grocery stores, transit, and more. 
              <br></br>
              <br></br>
              We've visualized the ever-changing data to make trends visible at a glance! 
              <br></br> 
              <br></br>
              <a href="https://www.google.com/covid19/mobility/">Learn more</a>
            </p>
          </Jumbotron>
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
