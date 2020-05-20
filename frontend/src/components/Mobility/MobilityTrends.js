import React, { Component } from 'react';
import actions from '../../services/index';
import flKeys from '../../../src/assets/images/fl_keys.png';
import './../home/Home.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';


class MobilityTrends extends Component {


    state = {
        mobilityData: [],
        groceryStats: [1, 1],
        dateStats: [1, 1],
        parkStats: [1, 1],
        transitStats: [1, 1],
        residentialStats: [1, 1]
    
      }
    
      async componentDidMount() {
          console.log("hello", this.props.regionName)
        let res = await actions.returnMobilityData(this.props.regionName);
        console.log("data", res);
        let rawData = [...res.data.mobilities]
        let lastFew = rawData.slice(rawData.length-10, rawData.length-1)
        let groceryStats = lastFew.map(eachDataPoint => {
          return eachDataPoint.grocery_and_pharmacy_percent_change_from_baseline
        });
        let dateStats = lastFew.map(eachDataPoint => {
          return eachDataPoint.date
        });
        let parkStats = lastFew.map(eachDataPoint => {
          return eachDataPoint.parks_percent_change_from_baseline
        });
        let transitStats = lastFew.map(eachDataPoint => {
          return eachDataPoint.transit_stations_percent_change_from_baseline
        });
        let residentialStats = lastFew.map(eachDataPoint => {
          return eachDataPoint.residential_percent_change_from_baseline
        });
        this.setState({
          mobilityData: res.data.mobilities,
          dateStats: dateStats,
          groceryStats: groceryStats,
          parkStats: parkStats,
          transitStats: transitStats,
          residentialStats: residentialStats
        })
      }
    
      showGraphGroceryPharmacy = () => {
        const data = [
          {x: new Date(Date.parse(this.state.dateStats[0])), y: this.state.groceryStats[0]},
          {x: new Date(Date.parse(this.state.dateStats[1])), y: this.state.groceryStats[1]},
          {x: new Date(Date.parse(this.state.dateStats[2])), y: this.state.groceryStats[2]},
          {x: new Date(Date.parse(this.state.dateStats[3])), y: this.state.groceryStats[3]},
          {x: new Date(Date.parse(this.state.dateStats[4])), y: this.state.groceryStats[4]},
          {x: new Date(Date.parse(this.state.dateStats[5])), y: this.state.groceryStats[5]},
          {x: new Date(Date.parse(this.state.dateStats[6])), y: this.state.groceryStats[6]},
          {x: new Date(Date.parse(this.state.dateStats[7])), y: this.state.groceryStats[7]},
          {x: new Date(Date.parse(this.state.dateStats[8])), y: this.state.groceryStats[8]},
          {x: new Date(Date.parse(this.state.dateStats[9])), y: this.state.groceryStats[9]}
        ];
        return (
          <div className="groceryPharmacy">
            <XYPlot height={300} width= {900} xType="time">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries data={data} />
            </XYPlot>
          </div>
        );
      }
    
      showGraphParks = () => {
        const data = [
          {x: new Date(Date.parse(this.state.dateStats[0])), y: this.state.parkStats[0]},
          {x: new Date(Date.parse(this.state.dateStats[1])), y: this.state.parkStats[1]},
          {x: new Date(Date.parse(this.state.dateStats[2])), y: this.state.parkStats[2]},
          {x: new Date(Date.parse(this.state.dateStats[3])), y: this.state.parkStats[3]},
          {x: new Date(Date.parse(this.state.dateStats[4])), y: this.state.parkStats[4]},
          {x: new Date(Date.parse(this.state.dateStats[5])), y: this.state.parkStats[5]},
          {x: new Date(Date.parse(this.state.dateStats[6])), y: this.state.parkStats[6]},
          {x: new Date(Date.parse(this.state.dateStats[7])), y: this.state.parkStats[7]},
          {x: new Date(Date.parse(this.state.dateStats[8])), y: this.state.parkStats[8]}
        ];
        return (
          <div className="parks">
            <XYPlot height={300} width= {900} xType="time">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries data={data} />
            </XYPlot>
          </div>
        );
      }
    
      showGraphTransit = () => {
        const data = [
          {x: new Date(Date.parse(this.state.dateStats[0])), y: this.state.transitStats[0]},
          {x: new Date(Date.parse(this.state.dateStats[1])), y: this.state.transitStats[1]},
          {x: new Date(Date.parse(this.state.dateStats[2])), y: this.state.transitStats[2]},
          {x: new Date(Date.parse(this.state.dateStats[3])), y: this.state.transitStats[3]},
          {x: new Date(Date.parse(this.state.dateStats[4])), y: this.state.transitStats[4]},
          {x: new Date(Date.parse(this.state.dateStats[5])), y: this.state.transitStats[5]},
          {x: new Date(Date.parse(this.state.dateStats[6])), y: this.state.transitStats[6]},
          {x: new Date(Date.parse(this.state.dateStats[7])), y: this.state.transitStats[7]},
          {x: new Date(Date.parse(this.state.dateStats[8])), y: this.state.transitStats[8]}
        ];
        return (
          <div className="parks">
            <XYPlot height={300} width= {900} xType="time">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries data={data} />
            </XYPlot>
          </div>
        );
      }
    
      showGraphResidential = () => {
        const data = [
          {x: new Date(Date.parse(this.state.dateStats[0])), y: this.state.residentialStats[0]},
          {x: new Date(Date.parse(this.state.dateStats[1])), y: this.state.residentialStats[1]},
          {x: new Date(Date.parse(this.state.dateStats[2])), y: this.state.residentialStats[2]},
          {x: new Date(Date.parse(this.state.dateStats[3])), y: this.state.residentialStats[3]},
          {x: new Date(Date.parse(this.state.dateStats[4])), y: this.state.residentialStats[4]},
          {x: new Date(Date.parse(this.state.dateStats[5])), y: this.state.residentialStats[5]},
          {x: new Date(Date.parse(this.state.dateStats[6])), y: this.state.residentialStats[6]},
          {x: new Date(Date.parse(this.state.dateStats[7])), y: this.state.residentialStats[7]},
          {x: new Date(Date.parse(this.state.dateStats[8])), y: this.state.residentialStats[8]}
        ];
        return (
          <div className="parks">
            <XYPlot height={300} width= {900} xType="time">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries data={data} />
            </XYPlot>
          </div>
        );
      }
    
      showMobilityData = () => {
        console.log("sup", this.state.mobilityData)
        return this.state.mobilityData.map(eachDataPoint => {
          return( <li key={eachDataPoint._id}>
              <h4>{eachDataPoint.sub_region_1} Keys</h4>
              <img className="geo_logo" alt="" src={flKeys}></img>
              <h6>{eachDataPoint.sub_region_2}</h6><br></br>
              <h6>Date: {eachDataPoint.date}</h6><br></br>
              <h6>Grocery Stores & Pharmacies Mobility: {eachDataPoint.grocery_and_pharmacy_percent_change_from_baseline}</h6><br></br>
              <h6>Parks: {eachDataPoint.parks_percent_change_from_baseline}</h6><br></br>
              <h6>Residential: {eachDataPoint.residential_percent_change_from_baseline}</h6><br></br>
              <h6>Shopping & Dining: {eachDataPoint.retail_and_recreation_percent_change_from_baseline}</h6><br></br>
              <h6>Transit: {eachDataPoint.transit_stations_percent_change_from_baseline}</h6><br></br>
              <h6>Work: {eachDataPoint.workplaces_percent_change_from_baseline}</h6>
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
                    Hello from allll the way from APP: {this.props.regionName}
                  <h1>Mobility Trends (%, by day)</h1>
                  
                  
                  <h3>Grocery Stores & Pharmacies</h3>
                  {this.showGraphGroceryPharmacy()}
                  <h3>Parks</h3>
                  {this.showGraphParks()}
                  <h3>Transit</h3>
                  {this.showGraphTransit()}
                  <h3>Residential</h3>
                  {this.showGraphResidential()}
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
    

export default MobilityTrends;