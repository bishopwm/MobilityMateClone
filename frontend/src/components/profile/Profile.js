import React from 'react';
import '../profile/Profile.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Profile = (props) => {
    console.log(props.user.userGroceryData)
   
    let grocery = props.user.userGroceryData
    let parks = props.user.userParksData
        if(grocery !== undefined){
            return (
            <>
            <h1>My Saved Reports</h1>
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
                                            <h2>{eachGroceryStat.savedLocation}</h2>
                                        </div>
                                        <div className="saved-date">
                                            <h5>Snapshot taken on <strong>{eachGroceryStat.savedDate}</strong></h5>
                                        </div>
                                        <div className="daily-stats">
                                            <h5>Data Range: <em>{eachGroceryStat.dataStartDate}</em> through <em>{eachGroceryStat.dataEndDate}</em></h5>
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
                                        </div>
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
                                                <h2>{eachParkStat.savedLocation}</h2>
                                            </div>
                                            <div className="saved-date">
                                                <h5>Snapshot taken on <strong>{eachParkStat.savedDate}</strong></h5>
                                            </div>
                                            <div className="daily-stats">
                                                <h5>Data Range: <em>{eachParkStat.dataStartDate}</em> through <em>{eachParkStat.dataEndDate}</em></h5>
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



