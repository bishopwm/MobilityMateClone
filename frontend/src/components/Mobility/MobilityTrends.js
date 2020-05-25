import React, { Component } from 'react';
import actions from '../../services/index';
import './../home/Home.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../../node_modules/react-vis/dist/style.css';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import './MobilityTrends.css';
import downArrow from '../../assets/images/down_arrow.png';
import upArrow from '../../assets/images/up_arrow.png';
import smallCalendar from '../../assets/images/small_calendar.jpg';
// Loading Screen Imports
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

class MobilityTrends extends Component {


    state = {
        mobilityData: [],
        groceryStats: [],
        dateStats: [],
        parkStats: [],
        transitStats: [],
        residentialStats: [],
        workStats: [],
        shoppingDiningStats: [],
        chartReference: React.createRef(),
        done: undefined
      }
      async componentDidMount() {
        console.log(this.chartReference);
        
        // Call backend to retrieve Google Mobility Data
        let res = await actions.returnMobilityData(this.props.regionName);
        let rawData = [...res.data.mobilities]
        let dataLastThirtyDays = rawData.slice(rawData.length-31, rawData.length-1)

        // Map through each data point (i.e., mobility trends in parks, grocery stores, transit centers, etc.) and set values to state.
        let groceryStats = dataLastThirtyDays.map(eachDataPoint => {
          return parseInt(eachDataPoint.grocery_and_pharmacy_percent_change_from_baseline)
        });
        let dateStats = dataLastThirtyDays.map(eachDataPoint => {
          return eachDataPoint.date
        });
        let parkStats = dataLastThirtyDays.map(eachDataPoint => {
          return eachDataPoint.parks_percent_change_from_baseline
        });
        let transitStats = dataLastThirtyDays.map(eachDataPoint => {
          return eachDataPoint.transit_stations_percent_change_from_baseline
        });
        let residentialStats = dataLastThirtyDays.map(eachDataPoint => {
          return eachDataPoint.residential_percent_change_from_baseline
        });
        let shoppingDiningStats = dataLastThirtyDays.map(eachDataPoint => {
          return eachDataPoint.retail_and_recreation_percent_change_from_baseline
        });
        let workStats = dataLastThirtyDays.map(eachDataPoint => {
          return eachDataPoint.workplaces_percent_change_from_baseline
        });
        if( res.data.mobilities[0] === undefined){
            res.data.mobilities[0] = 'No region selected';
            res.data.mobilities[55] = '2020-04-15';
            res.data.mobilities[84] = '2020-05-15';
        }
        this.setState({
          mobilityData: res.data.mobilities,
          regionName: res.data.mobilities[0].sub_region_1,
          dataStart: res.data.mobilities[55].date,
          dataEnd: res.data.mobilities[84].date,
          dateStats: dateStats,
          groceryStats: groceryStats,
          parkStats: parkStats,
          transitStats: transitStats,
          residentialStats: residentialStats,
          shoppingDiningStats: shoppingDiningStats,
          workStats: workStats
        })
        setTimeout(() => {
            this.setState({ done: true })
            }, 3000);
      }
      displayRegionName = () =>{
          console.log(this.state.mobilityData[55])          
      }
    
      // Calaculate average trend value, (+) or (-), for last 30 days data
      getAverageGrocery = () => {
          let copyGrocery = [...this.state.groceryStats];
          let total=0;
          for(let i=0; i<copyGrocery.length; i++){
            total += Number(copyGrocery[i]);
          }
          let avg = total / copyGrocery.length;
          console.log("average", avg);
          let roundedAvg = Math.round(avg);
          if(roundedAvg <= 0){
            return(
                <div className="places-grocery-content">
                <img id="down-arrow" src={downArrow}></img>
                <span id="trend-percentage-negative">  {roundedAvg} %</span>
                </div>
              )
          } else {
            return(
                <div className="places-grocery-content">
                <img id="up-arrow" src={upArrow}></img>
                <span id="trend-percentage-positive">  +{roundedAvg} %</span>
                </div>
            )
          }
      }
      getAverageParks = () => {
        let copyParks = [...this.state.parkStats];
        let total=0;
        for(let i=0; i<copyParks.length; i++){
          total += Number(copyParks[i]);
        }
        let avg = total / copyParks.length;
        console.log("average", avg);
        let roundedAvg = Math.round(avg);
        if(roundedAvg <= 0){
          return(
              <div className="places-grocery-content">
              <img id="down-arrow" src={downArrow}></img>
              <span id="trend-percentage-negative">  {roundedAvg} %</span>
              </div>
            )
        } else {
          return(
              <div className="places-grocery-content">
              <img id="up-arrow" src={upArrow}></img>
              <span id="trend-percentage-positive">  +{roundedAvg} %</span>
              </div>
          )
        }
      }
      getAverageTransit = () => {
        let copyTransit = [...this.state.transitStats];
        let total=0;
        for(let i=0; i<copyTransit.length; i++){
          total += Number(copyTransit[i]);
        }
        let avg = total / copyTransit.length;
        console.log("average", avg);
                  let roundedAvg = Math.round(avg);
          if(roundedAvg <= 0){
            return(
                <div className="places-grocery-content">
                <img id="down-arrow" src={downArrow}></img>
                <span id="trend-percentage-negative">  {roundedAvg} %</span>
                </div>
              )
          } else {
            return(
                <div className="places-grocery-content">
                <img id="up-arrow" src={upArrow}></img>
                <span id="trend-percentage-positive">  +{roundedAvg} %</span>
                </div>
            )
          }
      }
      getAverageResidential = () => {
        let copyResidential = [...this.state.residentialStats];
        let total=0;
        for(let i=0; i<copyResidential.length; i++){
          total += Number(copyResidential[i]);
        }
        let avg = total / copyResidential.length;
        console.log("average", avg);
                  let roundedAvg = Math.round(avg);
          if(roundedAvg <= 0){
            return(
                <div className="places-grocery-content">
                <img id="down-arrow" src={downArrow}></img>
                <span id="trend-percentage-negative">  {roundedAvg} %</span>
                </div>
              )
          } else {
            return(
                <div className="places-grocery-content">
                <img id="up-arrow" src={upArrow}></img>
                <span id="trend-percentage-positive">  +{roundedAvg} %</span>
                </div>
            )
          }
      }
      getAverageShoppingDining = () => {
        let copyShoppingDining = [...this.state.shoppingDiningStats];
        let total=0;
        for(let i=0; i<copyShoppingDining.length; i++){
          total += Number(copyShoppingDining[i]);
        }
        let avg = total / copyShoppingDining.length;
        console.log("average", avg);
                  let roundedAvg = Math.round(avg);
          if(roundedAvg <= 0){
            return(
                <div className="places-grocery-content">
                <img id="down-arrow" src={downArrow}></img>
                <span id="trend-percentage-negative">  {roundedAvg} %</span>
                </div>
              )
          } else {
            return(
                <div className="places-grocery-content">
                <img id="up-arrow" src={upArrow}></img>
                <span id="trend-percentage-positive">  +{roundedAvg} %</span>
                </div>
            )
          }
      }
      getAverageWork = () => {
          console.log(this.state.workStats)
        let copyWork = [...this.state.workStats];
        let total=0;
        for(let i=0; i<copyWork.length; i++){
          total += Number(copyWork[i]);
        }
        let avg = total / copyWork.length;
        console.log("average", avg);
                  let roundedAvg = Math.round(avg);
          if(roundedAvg <= 0){
            return(
                <div className="places-grocery-content">
                <img id="down-arrow" src={downArrow}></img>
                <span id="trend-percentage-negative">  {roundedAvg} %</span>
                </div>
              )
          } else {
            return(
                <div className="places-grocery-content">
                <img id="up-arrow" src={upArrow}></img>
                <span id="trend-percentage-positive">  +{roundedAvg} %</span>
                </div>
            )
          }
      }

      // Construct individual graphs for last 30 days trends, for each type of place
      showGraphGroceryPharmacy = () => {
        let data = []
        for(let i=0; i<31; i++){
            data.push({x: i, y: Number(this.state.groceryStats[i])})
        }
        return (
            <div className="grocery">
              <VictoryChart domainPadding={20}>
                  <VictoryAxis/>
                  <VictoryAxis dependentAxis tickFormat={(x) => (`%${x}`)}/>
                  <VictoryAxis dependentAxis={true}/>
                  <VictoryBar style={{ data: { fill: "#285f9fbb" } }} data={data} x="x" y="y" domain={{x: [0, 31], y: [-60, 20]}}/>
              </VictoryChart>
            </div>
          );
      }
    
      showGraphParks = () => {
        let data = []
        for(let i=0; i<31; i++){
            data.push({x: i, y: Number(this.state.parkStats[i])})
        }
        return (
            <div className="parks">
              <VictoryChart domainPadding={20}>
                  <VictoryAxis/>
                  <VictoryAxis dependentAxis tickFormat={(x) => (`%${x}`)}/>
                  <VictoryAxis dependentAxis={true}/>
                  <VictoryBar style={{ data: { fill: "#285f9fbb" } }} data={data} x="x" y="y" domain={{x: [0, 31], y: [-60, 20]}}/>
              </VictoryChart>
            </div>
          );
      }
      showGraphTransit = () => {
        let data = []
        for(let i=0; i<31; i++){
            data.push({x: i, y: Number(this.state.transitStats[i])})
        }
        return (
            <div className="transit">
              <VictoryChart domainPadding={20}>
                  <VictoryAxis/>
                  <VictoryAxis dependentAxis tickFormat={(x) => (`%${x}`)}/>
                  <VictoryAxis dependentAxis={true}/>
                  <VictoryBar style={{ data: { fill: "#285f9fbb" } }} data={data} x="x" y="y" domain={{x: [0, 31], y: [-60, 20]}}/>
              </VictoryChart>
            </div>
          );
      }
    
      showGraphResidential = () => {
        let data = []
        for(let i=0; i<31; i++){
            data.push({x: i, y: Number(this.state.residentialStats[i])})
        }
        return (
            <div className="residential">
              <VictoryChart domainPadding={20}>
                  <VictoryAxis/>
                  <VictoryAxis dependentAxis tickFormat={(x) => (`%${x}`)}/>
                  <VictoryAxis dependentAxis={true}/>
                  <VictoryBar style={{ data: { fill: "#285f9fbb" } }} data={data} x="x" y="y" domain={{x: [0, 31], y: [-60, 20]}}/>
              </VictoryChart>
            </div>
          );
      }
    
      showGraphShoppingDining = () => {
        let data = []
        for(let i=0; i<31; i++){
            data.push({x: i, y: Number(this.state.shoppingDiningStats[i])})
        }
        return (
            <div className="shopping-dining">
              <VictoryChart domainPadding={20}>
                  <VictoryAxis/>
                  <VictoryAxis dependentAxis tickFormat={(x) => (`%${x}`)}/>
                  <VictoryAxis dependentAxis={true}/>
                  <VictoryBar style={{ data: { fill: "#285f9fbb" } }} data={data} x="x" y="y" domain={{x: [0, 31], y: [-60, 20]}}/>
              </VictoryChart>
            </div>
          );
      }

      showGraphWork = () => {
        let data = []
        for(let i=0; i<31; i++){
            data.push({x: i, y: Number(this.state.workStats[i])})
        }
        return (
            <div className="work">
              <VictoryChart domainPadding={20}>
                  <VictoryAxis/>
                  <VictoryAxis dependentAxis tickFormat={(x) => (`%${x}`)}/>
                  <VictoryAxis dependentAxis={true}/>
                  <VictoryBar style={{ data: { fill: "#285f9fbb" } }} data={data} x="x" y="y" domain={{x: [0, 31], y: [-60, 20]}}/>
              </VictoryChart>
            </div>
          );
      }
    
      render() {
          console.log("Stats: ", this.state)
        return (
        <div>
            <div className="mobility-hero">
                <div className="mobility-title-container">
                    <h1 className="mobility-title">{this.state.regionName} Mobility Trends</h1>
                </div>
            </div>
            <div>
                {!this.state.done ? (
                <ReactLoading type={"bars"} color={"black"} />
                ) : (
                    <Container fluid="md">
                    <Row>
                      <Col>
                        <div className="places-trends-container">
                            <div className="places-grocery">
                                <div className="places-grocery-header">
                                    <h2 className="places-grocery-title">Grocery <br></br>& Pharmacy</h2>
                                </div>
                                <div className="places-grocery-content">    
                                    {this.getAverageGrocery()}
                                    <div className="places-grocery-average">
                                        <img src={smallCalendar} id="small-calendar-icon"></img>
                                        <div className="average-description">30 Day Average, based on the latest available month provided by the <a href='https://www.google.com/covid19/mobility/'>Google Mobility Trends</a> report.</div>
                                    </div>
                                    <div className="graph-container">
                                        <h4>Movement Trends for Grocery/Pharmacy</h4>
                                        <span>{this.state.dataStart} through {this.state.dataEnd}</span>
                                        <div className="graph-subcontainer">
                                            {this.showGraphGroceryPharmacy()}
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            <div className="places-parks">
                                <div className="places-parks-header">
                                    <h2 className="places-parks-title">Parks <br></br>& Outdoor Rec.</h2>
                                </div>
                                <div className="places-grocery-content">
                                    {this.getAverageParks()}
                                    <div className="places-grocery-average">
                                        <img src={smallCalendar} id="small-calendar-icon"></img>
                                        <div className="average-description">30 Day Average, based on the latest available month provided by the <a href='https://www.google.com/covid19/mobility/'>Google Mobility Trends</a> report.</div>
                                    </div>
                                    <div className="graph-container">
                                        <h4>Movement Trends for Parks/Outdoors</h4>
                                        <span>{this.state.dataStart} through {this.state.dataEnd}</span>
                                        <div className="graph-subcontainer">
                                            <br></br>
                                            {this.showGraphParks()}
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="places-shopping-dining">
                                    <div className="places-shopping-dining-header">
                                        <h2 className="places-shopping-dining-title">Shopping <br></br>& Dining</h2>
                                    </div>
                                    <div className="places-grocery-content">
                                        {this.getAverageShoppingDining()}
                                        <div className="places-grocery-average">
                                            <img src={smallCalendar} id="small-calendar-icon"></img>
                                            <div className="average-description">30 Day Average, based on the latest available month provided by the <a href='https://www.google.com/covid19/mobility/'>Google Mobility Trends</a> report.</div>
                                        </div>
                                        <div className="graph-container">
                                            <h4>Movement Trends for Work/Industry</h4>
                                            <span>{this.state.dataStart} through {this.state.dataEnd}</span>
                                            <div className="graph-subcontainer">
                                                {this.showGraphShoppingDining()}
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                      </Col>
                      <Col>
                      <div className="places-trends-container">
                                <div className="places-transit">
                                    <div className="places-transit-header">
                                        <h2 className="places-parks-title">Transit <br></br>& Metro</h2>
                                    </div>
                                    <div className="places-grocery-content">                                
                                        {this.getAverageTransit()}
                                        <div className="places-grocery-average">
                                            <img src={smallCalendar} id="small-calendar-icon"></img>
                                            <div className="average-description">30 Day Average, based on the latest available month provided by the <a href='https://www.google.com/covid19/mobility/'>Google Mobility Trends</a> report.</div>
                                        </div>
                                        <div className="graph-container">
                                            <h4>Movement Trends for Transit/Metro</h4>
                                            <span>{this.state.dataStart} through {this.state.dataEnd}</span>
                                            <div className="graph-subcontainer">
                                                {this.showGraphTransit()}
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                                <div className="places-work">
                                    <div className="places-work-header">
                                        <h2 className="places-parks-title">Work <br></br>& Industry</h2>
                                    </div>
                                    <div className="places-grocery-content">
                                        {this.getAverageWork()}
                                        <div className="places-grocery-average">
                                            <img src={smallCalendar} id="small-calendar-icon"></img>
                                            <div className="average-description">30 Day Average, based on the latest available month provided by the <a href='https://www.google.com/covid19/mobility/'>Google Mobility Trends</a> report.</div>
                                        </div>
                                        <div className="graph-container">
                                            <h4>Movement Trends for Work/Industry</h4>
                                            <span>{this.state.dataStart} through {this.state.dataEnd}</span>
                                            <div className="graph-subcontainer">
                                                {this.showGraphWork()}
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                        </div>
                      </Col>
                      <Col className="accordion-aside" xs={2}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    View Safe Dining & Shopping Options
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>[WIP] Pull restaurants with outdoor space from Yelp/Google My Business</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Check out nearby parks
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>[WIP] Pull nearby parks/green spaces</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    View Google Mobility Reports
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>[WIP] Link to Google Mobility Report</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Covid-19 Information
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>[WIP] Display latest stats</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                      </Col>
                    </Row>
                  </Container>
                )}
            </div>

        </div>
        );
      }
    }

export default MobilityTrends;