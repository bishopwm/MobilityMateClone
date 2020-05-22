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
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
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
