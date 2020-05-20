import React, { Component } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
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
