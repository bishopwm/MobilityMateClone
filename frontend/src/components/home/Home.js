import React, { Component } from 'react';
import actions from '../../services/index';
import flKeys from '../../../src/assets/images/fl_keys.png';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import USAMap from "react-usa-map";
import ZingChart from 'zingchart-react';



class Home extends Component {
  state = {
    mobilityData: [],
    config1: {
      type: 'line',
      'scale-x': {
        labels: [ "January", "February", "March", "April", "May", "June", "July" ]
      },
      'scale-y': {
        values: "-80:100:80",
        format: "%%v",
        negation: "currency" //To change the placement of the negation sign.
      },
      plotarea: {
        'margin-left': "dynamic"
      },
      series: [
        {
          values: [50,-30,-40,20,60,90,140]
        }
      ]
    },
    config2: {
      type: 'line',
      'scale-x': {
        labels: [ "January", "February", "March", "April", "May", "June", "July" ]
      },
      'scale-y': {
        values: "-80:100:80",
        format: "%%v",
        negation: "currency" //To change the placement of the negation sign.
      },
      plotarea: {
        'margin-left': "dynamic"
      },
      series: [
        {
          values: [50,-30,-40,20,60,90,140]
        }
      ]
    }
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


 organizeMobilityData = () => {
   let datesAndGrocery = []
   let rawData = this.state.mobilityData;
   let lastFew = rawData.slice(rawData.length-10, rawData.length-1)
   console.log("last 10,",lastFew);
   let dateStats = lastFew.map(eachDataPoint => {
     return eachDataPoint.date
   })
   let groceryStats = lastFew.map(eachDataPoint => {
     return eachDataPoint.grocery_and_pharmacy_percent_change_from_baseline
   });
   console.log("last 10, just dates", dateStats);
   console.log("last 10, just grocery", groceryStats);
   datesAndGrocery.push(dateStats);
   datesAndGrocery.push(groceryStats);
  //  return datesAndGrocery;
  console.log("array holding dates and grocery stats", datesAndGrocery)
  
 }

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
          {/* <h4>Residential: {eachDataPoint.residential_percent_change_from_baseline}</h4>
          <h4>Shopping & Dining: {eachDataPoint.retail_and_recreation_percent_change_from_baseline}</h4>
          <h4>Transit: {eachDataPoint.transit_stations_percent_change_from_baseline}</h4>
          <h4>Work: {eachDataPoint.workplaces_percent_change_from_baseline}</h4> */}
      </li>
      )
    })
  }

  render() {
    return (
    <div>
    {this.organizeMobilityData()}
      <br></br>
      <Container fluid="md">
        <Row>
          <Col>
            <div>
              <div className="App">
                <USAMap onClick={this.mapHandler} />
              </div>
              <h1>Grocery/Pharmacy</h1>
              <ZingChart data={this.state.config1}/>
              <h1>Parks</h1>
              <ZingChart data={this.state.config2}/>
              <ul className="justify-content-center mobility-data-list">
                {/* {this.showMobilityData()} */}
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
