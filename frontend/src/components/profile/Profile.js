import React from 'react';
import '../profile/Profile.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Profile = (props) => {
    // if(!props.user.email){ 
    //     props.history.push('/log-in');
    // };
    // if(props.user.userGroceryData ){
    //     let groceryProps = props.user.userGroceryData
    console.log(props.user.userGroceryData)
    let grocery = props.user.userGroceryData
        if(grocery !== undefined){
            return (
                <div>
                    <h3 className="saved-reports-header">Saved Reports: Grocery & Pharmacy</h3>
                    <hr className="saved-reports-baseline"></hr>
                    <div>
                        {grocery.map(eachStat => {
                            return (
                                <Container fluid="md">
                                    <Row>
                                        <Col>
                                            <> 
                                                <div className="saved-location">
                                                    <h2>{eachStat.savedLocation}</h2>
                                                </div>
                                                <div className="saved-date">
                                                    <h5>Snapshot taken on <strong>{eachStat.savedDate}</strong></h5>
                                                </div>
                                                <div className="daily-stats">
                                                <h5>Data Range: <em>{eachStat.dataStartDate}</em> through <em>{eachStat.dataEndDate}</em></h5>
                                                <Table striped bordered hover size="sm">
                                                        <thead>
                                                            <tr>
                                                                <td>Day</td>
                                                                <td>Change from Baseline</td>
                                                            </tr>
                                                        </thead>
                                                        {eachStat.data.map((eachDay, i) => {
                                                        return(
                                                            <>
                                                                <tbody>
                                                                    <tr>
                                                                        <td colSpan="1">{i}</td>
                                                                        <td colSpan="1">{eachDay}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </>
                                                        )
                                                    })}
                                                </Table>
                                                </div>
                                            </>
                                        </Col>
                                    </Row>
                                </Container>
                            ) 
                        })}
                    </div>
                </div>
            );
    } else if(!props.user.email){
        return <h1><a href='/log-in'>Log in</a> to view Profile</h1>
    } else {
        return <h1>"Loading Data..."</h1>
    }
}

export default Profile;



