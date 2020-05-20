import React, { Component } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import USAMap from "react-usa-map";



class Home extends Component {



  componentDidMount() {

  }

  mapHandler = (event) => {
    console.log(event.target.dataset.name);
  };

  render() {
    return (
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
    );
  }
}

export default Home;
