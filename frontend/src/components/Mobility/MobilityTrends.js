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
import smallCalendar from '../../assets/images/small_calendar.jpg';

class MobilityTrends extends Component {


    state = {
        mobilityData: [],
        groceryStats: [1, 1],
        dateStats: [1, 1],
        parkStats: [1, 1],
        transitStats: [1, 1],
        residentialStats: [1, 1],
        chartReference: React.createRef(),
        workStats: [],
        shoppingDiningStats: []
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
        if(res.data.mobilities[0] === undefined){
            res.data.mobilities[0] = 'No region selected';
            res.data.mobilities[55] = '2020-04-15';
            res.data.mobilities[84] = '2020-05-15';

        }
        console.log(workStats)
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
        // function isRegionThere() {
        //    return(res.data.mobilities[0].sub_region_1 ? res.data.mobilities[0].sub_region_1 : 'No region selected' )
        // }
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
          return Math.round(avg)
      }
      getAverageParks = () => {
        let copyParks = [...this.state.parkStats];
        let total=0;
        for(let i=0; i<copyParks.length; i++){
          total += Number(copyParks[i]);
        }
        let avg = total / copyParks.length;
        console.log("average", avg);
        return Math.round(avg)
      }
      getAverageTransit = () => {
        let copyTransit = [...this.state.transitStats];
        let total=0;
        for(let i=0; i<copyTransit.length; i++){
          total += Number(copyTransit[i]);
        }
        let avg = total / copyTransit.length;
        console.log("average", avg);
        return Math.round(avg)
      }
      getAverageResidential = () => {
        let copyResidential = [...this.state.residentialStats];
        let total=0;
        for(let i=0; i<copyResidential.length; i++){
          total += Number(copyResidential[i]);
        }
        let avg = total / copyResidential.length;
        console.log("average", avg);
        return Math.round(avg)
      }
      getAverageShoppingDining = () => {
        let copyShoppingDining = [...this.state.shoppingDiningStats];
        let total=0;
        for(let i=0; i<copyShoppingDining.length; i++){
          total += Number(copyShoppingDining[i]);
        }
        let avg = total / copyShoppingDining.length;
        console.log("average", avg);
        return Math.round(avg)
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
        return Math.round(avg)
      }

      // Construct individual graphs for last 30 days trends, for each type of place
      showGraphGroceryPharmacy = () => {
        //console.log("grocery stats", this.state.groceryStats)
        const data = [
            {x: 1, y: Number(this.state.groceryStats[0])},
            {x: 2, y: Number(this.state.groceryStats[1])},
            {x: 3, y: Number(this.state.groceryStats[2])},
            {x: 4, y: Number(this.state.groceryStats[3])},
            {x: 5, y: Number(this.state.groceryStats[4])},
            {x: 6, y: Number(this.state.groceryStats[5])},
            {x: 7, y: Number(this.state.groceryStats[6])},
            {x: 8, y: Number(this.state.groceryStats[7])},
            {x: 9, y: Number(this.state.groceryStats[8])},
            {x: 10, y: Number(this.state.groceryStats[9])},
            {x: 11, y: Number(this.state.groceryStats[10])},
            {x: 12, y: Number(this.state.groceryStats[11])},
            {x: 13, y: Number(this.state.groceryStats[12])},
            {x: 14, y: Number(this.state.groceryStats[13])},
            {x: 15, y: Number(this.state.groceryStats[14])},
            {x: 16, y: Number(this.state.groceryStats[15])},
            {x: 17, y: Number(this.state.groceryStats[16])},
            {x: 18, y: Number(this.state.groceryStats[17])},
            {x: 19, y: Number(this.state.groceryStats[18])},
            {x: 20, y: Number(this.state.groceryStats[19])},
            {x: 21, y: Number(this.state.groceryStats[20])},
            {x: 22, y: Number(this.state.groceryStats[21])},
            {x: 23, y: Number(this.state.groceryStats[22])},
            {x: 24, y: Number(this.state.groceryStats[23])},
            {x: 25, y: Number(this.state.groceryStats[24])},
            {x: 26, y: Number(this.state.groceryStats[25])},
            {x: 27, y: Number(this.state.groceryStats[26])},
            {x: 28, y: Number(this.state.groceryStats[27])},
            {x: 29, y: Number(this.state.groceryStats[28])},
            {x: 30, y: Number(this.state.groceryStats[29])},
            {x: 31, y: Number(this.state.groceryStats[30])}
            ];
    
        return (
          <div className="grocery-pharmacy">
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
        const data = [
            {x: 1, y: Number(this.state.parkStats[0])},
            {x: 2, y: Number(this.state.parkStats[1])},
            {x: 3, y: Number(this.state.parkStats[2])},
            {x: 4, y: Number(this.state.parkStats[3])},
            {x: 5, y: Number(this.state.parkStats[4])},
            {x: 6, y: Number(this.state.parkStats[5])},
            {x: 7, y: Number(this.state.parkStats[6])},
            {x: 8, y: Number(this.state.parkStats[7])},
            {x: 9, y: Number(this.state.parkStats[8])},
            {x: 10, y: Number(this.state.parkStats[9])},
            {x: 11, y: Number(this.state.parkStats[10])},
            {x: 12, y: Number(this.state.parkStats[11])},
            {x: 13, y: Number(this.state.parkStats[12])},
            {x: 14, y: Number(this.state.parkStats[13])},
            {x: 15, y: Number(this.state.parkStats[14])},
            {x: 16, y: Number(this.state.parkStats[15])},
            {x: 17, y: Number(this.state.parkStats[16])},
            {x: 18, y: Number(this.state.parkStats[17])},
            {x: 19, y: Number(this.state.parkStats[18])},
            {x: 20, y: Number(this.state.parkStats[19])},
            {x: 21, y: Number(this.state.parkStats[20])},
            {x: 22, y: Number(this.state.parkStats[21])},
            {x: 23, y: Number(this.state.parkStats[22])},
            {x: 24, y: Number(this.state.parkStats[23])},
            {x: 25, y: Number(this.state.parkStats[24])},
            {x: 26, y: Number(this.state.parkStats[25])},
            {x: 27, y: Number(this.state.parkStats[26])},
            {x: 28, y: Number(this.state.parkStats[27])},
            {x: 29, y: Number(this.state.parkStats[28])},
            {x: 30, y: Number(this.state.parkStats[29])},
            {x: 31, y: Number(this.state.parkStats[30])}
        ];
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
        const data = [
            {x: 1, y: Number(this.state.transitStats[0])},
            {x: 2, y: Number(this.state.transitStats[1])},
            {x: 3, y: Number(this.state.transitStats[2])},
            {x: 4, y: Number(this.state.transitStats[3])},
            {x: 5, y: Number(this.state.transitStats[4])},
            {x: 6, y: Number(this.state.transitStats[5])},
            {x: 7, y: Number(this.state.transitStats[6])},
            {x: 8, y: Number(this.state.transitStats[7])},
            {x: 9, y: Number(this.state.transitStats[8])},
            {x: 10, y: Number(this.state.transitStats[9])},
            {x: 11, y: Number(this.state.transitStats[10])},
            {x: 12, y: Number(this.state.transitStats[11])},
            {x: 13, y: Number(this.state.transitStats[12])},
            {x: 14, y: Number(this.state.transitStats[13])},
            {x: 15, y: Number(this.state.transitStats[14])},
            {x: 16, y: Number(this.state.transitStats[15])},
            {x: 17, y: Number(this.state.transitStats[16])},
            {x: 18, y: Number(this.state.transitStats[17])},
            {x: 19, y: Number(this.state.transitStats[18])},
            {x: 20, y: Number(this.state.transitStats[19])},
            {x: 21, y: Number(this.state.transitStats[20])},
            {x: 22, y: Number(this.state.transitStats[21])},
            {x: 23, y: Number(this.state.transitStats[22])},
            {x: 24, y: Number(this.state.transitStats[23])},
            {x: 25, y: Number(this.state.transitStats[24])},
            {x: 26, y: Number(this.state.transitStats[25])},
            {x: 27, y: Number(this.state.transitStats[26])},
            {x: 28, y: Number(this.state.transitStats[27])},
            {x: 29, y: Number(this.state.transitStats[28])},
            {x: 30, y: Number(this.state.transitStats[29])},
            {x: 31, y: Number(this.state.transitStats[30])}
        ];
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
        const data = [
            {x: 1, y: Number(this.state.residentialStats[0])},
            {x: 2, y: Number(this.state.residentialStats[1])},
            {x: 3, y: Number(this.state.residentialStats[2])},
            {x: 4, y: Number(this.state.residentialStats[3])},
            {x: 5, y: Number(this.state.residentialStats[4])},
            {x: 6, y: Number(this.state.residentialStats[5])},
            {x: 7, y: Number(this.state.residentialStats[6])},
            {x: 8, y: Number(this.state.residentialStats[7])},
            {x: 9, y: Number(this.state.residentialStats[8])},
            {x: 10, y: Number(this.state.residentialStats[9])},
            {x: 11, y: Number(this.state.residentialStats[10])},
            {x: 12, y: Number(this.state.residentialStats[11])},
            {x: 13, y: Number(this.state.residentialStats[12])},
            {x: 14, y: Number(this.state.residentialStats[13])},
            {x: 15, y: Number(this.state.residentialStats[14])},
            {x: 16, y: Number(this.state.residentialStats[15])},
            {x: 17, y: Number(this.state.residentialStats[16])},
            {x: 18, y: Number(this.state.residentialStats[17])},
            {x: 19, y: Number(this.state.residentialStats[18])},
            {x: 20, y: Number(this.state.residentialStats[19])},
            {x: 21, y: Number(this.state.residentialStats[20])},
            {x: 22, y: Number(this.state.residentialStats[21])},
            {x: 23, y: Number(this.state.residentialStats[22])},
            {x: 24, y: Number(this.state.residentialStats[23])},
            {x: 25, y: Number(this.state.residentialStats[24])},
            {x: 26, y: Number(this.state.residentialStats[25])},
            {x: 27, y: Number(this.state.residentialStats[26])},
            {x: 28, y: Number(this.state.residentialStats[27])},
            {x: 29, y: Number(this.state.residentialStats[28])},
            {x: 30, y: Number(this.state.residentialStats[29])},
            {x: 31, y: Number(this.state.residentialStats[30])}
        ];
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
        const data = [
            {x: 1, y: Number(this.state.shoppingDiningStats[0])},
            {x: 2, y: Number(this.state.shoppingDiningStats[1])},
            {x: 3, y: Number(this.state.shoppingDiningStats[2])},
            {x: 4, y: Number(this.state.shoppingDiningStats[3])},
            {x: 5, y: Number(this.state.shoppingDiningStats[4])},
            {x: 6, y: Number(this.state.shoppingDiningStats[5])},
            {x: 7, y: Number(this.state.shoppingDiningStats[6])},
            {x: 8, y: Number(this.state.shoppingDiningStats[7])},
            {x: 9, y: Number(this.state.shoppingDiningStats[8])},
            {x: 10, y: Number(this.state.shoppingDiningStats[9])},
            {x: 11, y: Number(this.state.shoppingDiningStats[10])},
            {x: 12, y: Number(this.state.shoppingDiningStats[11])},
            {x: 13, y: Number(this.state.shoppingDiningStats[12])},
            {x: 14, y: Number(this.state.shoppingDiningStats[13])},
            {x: 15, y: Number(this.state.shoppingDiningStats[14])},
            {x: 16, y: Number(this.state.shoppingDiningStats[15])},
            {x: 17, y: Number(this.state.shoppingDiningStats[16])},
            {x: 18, y: Number(this.state.shoppingDiningStats[17])},
            {x: 19, y: Number(this.state.shoppingDiningStats[18])},
            {x: 20, y: Number(this.state.shoppingDiningStats[19])},
            {x: 21, y: Number(this.state.shoppingDiningStats[20])},
            {x: 22, y: Number(this.state.shoppingDiningStats[21])},
            {x: 23, y: Number(this.state.shoppingDiningStats[22])},
            {x: 24, y: Number(this.state.shoppingDiningStats[23])},
            {x: 25, y: Number(this.state.shoppingDiningStats[24])},
            {x: 26, y: Number(this.state.shoppingDiningStats[25])},
            {x: 27, y: Number(this.state.shoppingDiningStats[26])},
            {x: 28, y: Number(this.state.shoppingDiningStats[27])},
            {x: 29, y: Number(this.state.shoppingDiningStats[28])},
            {x: 30, y: Number(this.state.shoppingDiningStats[29])},
            {x: 31, y: Number(this.state.shoppingDiningStats[30])}
        ];
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
        const data = [
            {x: 1, y: Number(this.state.workStats[0])},
            {x: 2, y: Number(this.state.workStats[1])},
            {x: 3, y: Number(this.state.workStats[2])},
            {x: 4, y: Number(this.state.workStats[3])},
            {x: 5, y: Number(this.state.workStats[4])},
            {x: 6, y: Number(this.state.workStats[5])},
            {x: 7, y: Number(this.state.workStats[6])},
            {x: 8, y: Number(this.state.workStats[7])},
            {x: 9, y: Number(this.state.workStats[8])},
            {x: 10, y: Number(this.state.workStats[9])},
            {x: 11, y: Number(this.state.workStats[10])},
            {x: 12, y: Number(this.state.workStats[11])},
            {x: 13, y: Number(this.state.workStats[12])},
            {x: 14, y: Number(this.state.workStats[13])},
            {x: 15, y: Number(this.state.workStats[14])},
            {x: 16, y: Number(this.state.workStats[15])},
            {x: 17, y: Number(this.state.workStats[16])},
            {x: 18, y: Number(this.state.workStats[17])},
            {x: 19, y: Number(this.state.workStats[18])},
            {x: 20, y: Number(this.state.workStats[19])},
            {x: 21, y: Number(this.state.workStats[20])},
            {x: 22, y: Number(this.state.workStats[21])},
            {x: 23, y: Number(this.state.workStats[22])},
            {x: 24, y: Number(this.state.workStats[23])},
            {x: 25, y: Number(this.state.workStats[24])},
            {x: 26, y: Number(this.state.workStats[25])},
            {x: 27, y: Number(this.state.workStats[26])},
            {x: 28, y: Number(this.state.workStats[27])},
            {x: 29, y: Number(this.state.workStats[28])},
            {x: 30, y: Number(this.state.workStats[29])},
            {x: 31, y: Number(this.state.workStats[30])}
        ];
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
      showMobilityData = () => {
        console.log("sup", this.state.mobilityData)
        return this.state.mobilityData.map(eachDataPoint => {
          return( <li key={eachDataPoint._id}>
              <h4>{eachDataPoint.sub_region_1}</h4>
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
          console.log("Stats: ", this.state)
        return (
        <div>
            <div className="mobility-hero">
                <div className="mobility-title-container">
                    <h1 className="mobility-title">{this.state.regionName} Mobility Trends</h1>
                </div>
            </div>
          <Container fluid="md">
            <Row>
              <Col>
                <div className="places-trends-container">
                    <div className="places-grocery">
                        <div className="places-grocery-header">
                            <h2 className="places-grocery-title">Grocery <br></br>& Pharmacy</h2>
                        </div>
                        <div className="places-grocery-content">
                            <img className="down-arrow" src={downArrow}></img>
                            <span className="trend-percentage">  {this.getAverageGrocery()} %</span>
                            
                            <div className="places-grocery-average">
                                <img src={smallCalendar} id="small-calendar-icon"></img>
                                <div className="average-description">30 Day Average, based on the latest available month provided by the <a href='https://www.google.com/covid19/mobility/'>Google Mobility Trends</a> report.</div>
                            </div>
                            <div className="graph-container">
                                <h4>Movement Trends for Grocery/Pharmacy</h4>
                                <span>{this.state.dataStart} - {this.state.dataEnd}</span>
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
                            <img className="down-arrow" src={downArrow}></img>
                            <span className="trend-percentage">  {this.getAverageParks()} %</span>
                            
                            <div className="places-grocery-average">
                                <img src={smallCalendar} id="small-calendar-icon"></img>
                                <div className="average-description">30 Day Average, based on the latest available month provided by the <a href='https://www.google.com/covid19/mobility/'>Google Mobility Trends</a> report.</div>
                            </div>
                            <div className="graph-container">
                                <h4>Movement Trends for Parks/Outdoors</h4>
                                <span>{this.state.dataStart} - {this.state.dataEnd}</span>
                                <div className="graph-subcontainer">
                                    {this.showGraphParks()}
                                </div>   
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
                                <img className="down-arrow" src={downArrow}></img>
                                <span className="trend-percentage">  {this.getAverageTransit()} %</span>
                                
                                <div className="places-grocery-average">
                                    <img src={smallCalendar} id="small-calendar-icon"></img>
                                    <div className="average-description">30 Day Average, based on the latest available month provided by the <a href='https://www.google.com/covid19/mobility/'>Google Mobility Trends</a> report.</div>
                                </div>
                                <div className="graph-container">
                                    <h4>Movement Trends for Transit/Metro</h4>
                                    <span>{this.state.dataStart} - {this.state.dataEnd}</span>
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
                                <img className="down-arrow" src={downArrow}></img>
                                <span className="trend-percentage">  {this.getAverageWork()} %</span>
                                
                                <div className="places-grocery-average">
                                    <img src={smallCalendar} id="small-calendar-icon"></img>
                                    <div className="average-description">30 Day Average, based on the latest available month provided by the <a href='https://www.google.com/covid19/mobility/'>Google Mobility Trends</a> report.</div>
                                </div>
                                <div className="graph-container">
                                    <h4>Movement Trends for Work/Industry</h4>
                                    <span>{this.state.dataStart} - {this.state.dataEnd}</span>
                                    <div className="graph-subcontainer">
                                        {this.showGraphWork()}
                                    </div>   
                                </div>
                            </div>
                        </div>

                    {/* <h2>Shopping & Dining</h2>
                    <h3>30 Day Average</h3>
                    {this.getAverageShoppingDining()}
                    <h3>30 Day Trend (from Baseline of 0)</h3>
                    {this.showGraphShoppingDining()} */}

                </div>
                 <ul className="justify-content-center mobility-data-list">
                    {/* {this.showMobilityData()} */}
                  </ul>
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
    
        </div>
        );
      }
    }

export default MobilityTrends;