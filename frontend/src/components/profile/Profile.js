import React, {useState, useEffect} from 'react';
import '../profile/Profile.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CsvDownloader from 'react-csv-downloader';



const Profile = (props) => {

    const columns = [{
        id: 'day',
        displayName: 'Day'
      }, {
        id: 'baseline-change',
        displayName: 'Change from Baseline'
      }];
     
      const dadatas = [];

    function refreshPage() {
        window.location.reload(false);
      }

    function hideDiv(e) {
        let divToHide = e.target.parentElement.parentElement.parentElement;
        divToHide.style = 'display: none';
    }

    let grocery = props.user.userGroceryData
    let parks = props.user.userParksData


        if(grocery !== undefined){
            return (
            <>
            <div className="reports-header">
                <h1>My Snapshots</h1>
                <Button className="refresh-button" size="sm" variant="outline-info" onClick={refreshPage}>Refresh</Button>
            </div>
            
            <Container>
                <Row>
                    <div> 
                        <h3 className="saved-reports-header">Grocery & Pharmacy</h3>
                        <hr className="saved-reports-baseline"></hr>
                        {grocery.map(eachGroceryStat => {
                            return (
                                <Col>
                                    <>
                                    <div className="saved-location" id={`${eachGroceryStat.savedLocation}`}>
                                            <div className="delete-container">
                                                <h2>{eachGroceryStat.savedLocation}</h2>
                                                <Button className="delete-button" size="sm" variant="outline-danger" onClick={(e) => hideDiv(e)}>Cache Snapshot</Button>
                                            </div>
                                            <div className="export-container">
                                            <CsvDownloader
                                                filename="myfile"
                                                separator=";"
                                                wrapColumnChar="'"
                                                columns={columns}
                                                datas={eachGroceryStat.data.map((i, eachDay) => {
                                                    dadatas.push(({
                                                        first: i,
                                                        second: eachDay
                                                      }))
                                                      let myData = []
                                                      for(let i=0; i<30; i++){
                                                        myData.push(i)
                                                      }
                                                    return myData
                                                })}
                                                text="Export Snapshot"
                                            >
                                                <Button className="export-button" size="sm" variant="outline-info">Export Snapshot</Button>
                                            </CsvDownloader>
                                                
                                            </div>
                                        </div>
                                        <div className="saved-date">
                                            <h5>Snapshot from <strong>{eachGroceryStat.savedDate}</strong></h5>
                                        </div>
                                        <div className="daily-stats">
                                            <h5 className='date-header'><span className="date-span">{eachGroceryStat.dataStartDate}</span>  through<span className="date-span">{eachGroceryStat.dataEndDate}</span></h5>
                                    </div>
                                    <Accordion defaultActiveKey="1">
                                    <Card>
                                        <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            View daily data for Snapshot
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                        <Table striped bordered hover size="sm">
                                                    <thead>
                                                        <tr>
                                                            <td>Day</td>
                                                            <td>Change from Baseline</td>
                                                        </tr>
                                                    </thead>
                                                    {eachGroceryStat.data.map((eachDay, i) => {
                                                    return(
                                                        <>
                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan="1">{i}</td>
                                                                    <td colSpan="1">{eachDay}</td>
                                                                </tr>
                                                            </tbody>
                                                        </>
                                                    )})}
                                            </Table>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                    </>
                                </Col>
                            ) 
                        })}
                    </div>
                    <div>
                        <h3 className="saved-reports-header">Parks & Outdoor Rec</h3>
                        <hr className="saved-reports-baseline"></hr>
                            {parks.map(eachParkStat => {
                                return (
                                    <Col>
                                        <> 
                                        <div className="saved-location">
                                                <div className="delete-container">
                                                    <h2>{eachParkStat.savedLocation}</h2>
                                                    <Button className="delete-button" size="sm" variant="outline-danger" onClick={(e)=>hideDiv(e)}>Cache Snapshot</Button>
                                                </div>
                                                <div className="export-container">
                                                    
                                                    <Button className="export-button" size="sm" variant="outline-info">Export Snapshot</Button>
                                                </div>
                                                </div>
                                            <div className="saved-date">
                                                <h5 className='date-header'>Snapshot from <strong>{eachParkStat.savedDate}</strong></h5>
                                            </div>
                                            <div className="daily-stats">
                                                <h5 className='date-header'><span className="date-span">{eachParkStat.dataStartDate}</span>  through<span className="date-span">{eachParkStat.dataEndDate}</span></h5>
                                                <Accordion defaultActiveKey="1">
                                                <Card>
                                                    <Card.Header>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                        View daily data for Snapshot
                                                    </Accordion.Toggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                    <Table striped bordered hover size="sm">
                                                        <thead>
                                                            <tr>
                                                                <td>Day</td>
                                                                <td>Change from Baseline</td>
                                                            </tr>
                                                        </thead>
                                                        {eachParkStat.data.map((eachDay, i) => {
                                                        return(
                                                            <>
                                                                <tbody>
                                                                    <tr>
                                                                        <td colSpan="1">{i}</td>
                                                                        <td colSpan="1">{eachDay}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </>
                                                        )})}
                                                    </Table>
                                                    </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                                </Accordion>
                                            </div>
                                        </>
                                    </Col>
                                ) 
                            })}
                    </div>
                </Row>
            </Container>
            </>
            );
    } else if(!props.user.email){
        return <h1><a href='/log-in'>Log in</a> to view Profile</h1>
    } else {
        return <h1>"Loading Data..."</h1>
    }
}

export default Profile;

