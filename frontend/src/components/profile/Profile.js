import React, {useState, useEffect} from 'react';
import '../profile/Profile.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


const Profile = (props) => {

    function refreshPage() {
        window.location.reload(false);
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
            
            <Container fluid="md">
                <Row>
                    <div>
                        <h3 className="saved-reports-header">Grocery & Pharmacy</h3>
                        <hr className="saved-reports-baseline"></hr>
                        {grocery.map(eachGroceryStat => {
                            return (
                                <Col>
                                    <>
                                    <div className="saved-location">
                                            <div className="delete-container">
                                                <h2>{eachGroceryStat.savedLocation}</h2>
                                                <Button className="delete-button" size="sm" variant="outline-danger">Delete Snapshot</Button>
                                            </div>
                                            <div className="export-container">
                                                
                                                <Button className="export-button" size="sm" variant="outline-info">Export Snapshot</Button>
                                            </div>
                                        </div>
                                        <div className="saved-date">
                                            <h5>Snapshot taken on <strong>{eachGroceryStat.savedDate}</strong></h5>
                                        </div>
                                        <div className="daily-stats">
                                            <h5>Data Range: <em>{eachGroceryStat.dataStartDate}</em> through <em>{eachGroceryStat.dataEndDate}</em></h5>
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
                                                    <Button className="delete-button" size="sm" variant="outline-danger">Delete Snapshot</Button>
                                                </div>
                                                <div className="export-container">
                                                    
                                                    <Button className="export-button" size="sm" variant="outline-info">Export Snapshot</Button>
                                                </div>
                                                </div>
                                            <div className="saved-date">
                                                <h5>Snapshot taken on <strong>{eachParkStat.savedDate}</strong></h5>
                                            </div>
                                            <div className="daily-stats">
                                                <h5>Data Range: <em>{eachParkStat.dataStartDate}</em> through <em>{eachParkStat.dataEndDate}</em></h5>
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

