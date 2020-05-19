import React, { Component } from 'react';
import actions from '../../services/index';
import flKeys from '../../../src/assets/images/fl_keys.png';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import USAMap from "react-usa-map";



class Home extends Component {
  state = {
    mobilityData: []
  }

  async componentDidMount() {
    //actions.test()
    let res = await actions.returnMobilityData();
    console.log("data", res);
    this.setState({
      mobilityData: res.data.mobilities
    })
  }

  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  showMobilityData = () => {
    console.log("sup", this.state.mobilityData)
    return this.state.mobilityData.map(eachDataPoint => {
      return( <li key={eachDataPoint._id}>
          <h2>{eachDataPoint.sub_region_1} Keys</h2>
          <img className="geo_logo" alt="" src={flKeys}></img>
          <h3>{eachDataPoint.sub_region_2}</h3>
          <h4>Date: {eachDataPoint.date}</h4>
          <h4>Grocery & Pharmacy Mobility: {eachDataPoint.grocery_and_pharmacy_percent_change_from_baseline}</h4>
          <h4>Parks: {eachDataPoint.parks_percent_change_from_baseline}</h4>
          <h4>Residential: {eachDataPoint.residential_percent_change_from_baseline}</h4>
          <h4>Shopping & Dining: {eachDataPoint.retail_and_recreation_percent_change_from_baseline}</h4>
          <h4>Transit: {eachDataPoint.transit_stations_percent_change_from_baseline}</h4>
          <h4>Work: {eachDataPoint.workplaces_percent_change_from_baseline}</h4>
      </li>
      )
    })
  }

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
              <ul className="justify-content-center mobility-data-list">
                {this.showMobilityData()}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
    );
  }
}

export default Home;
