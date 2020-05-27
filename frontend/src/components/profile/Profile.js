import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import '../profile/Profile.css';

const data = [];
const Profile = (props) => {
    // if(!props.user.email){ 
    //     props.history.push('/log-in');
    // };
    if(props.user.userGroceryData ){
        let groceryProps = props.user.userGroceryData
    for(let i=0; i<31; i++){
        data.push({x: i, y: Number(groceryProps.data[i])})
    }
    return (
        <div>
            <div className="profile-container">
                <h3 className="saved-reports-header">Saved Reports: Grocery & Pharmacy</h3>
                <hr className="saved-reports-baseline"></hr>
                <h2>{groceryProps.savedLocation ? groceryProps.savedLocation : "No region"}, Snapshot taken on {groceryProps.savedDate ? groceryProps.savedDate.replace(/T.*$/,"") : "No region"}</h2>
                <div className="grocery-chart-profile">
                    <VictoryChart domainPadding={20}>
                        <VictoryAxis/>
                        <VictoryAxis dependentAxis tickFormat={(x) => (`%${x}`)}/>
                        <VictoryAxis dependentAxis={true}/>
                        <VictoryBar style={{ data: { fill: "#285f9fbb" } }} data={data} x="x" y="y" domain={{x: [0, 31], y: [-60, 20]}}/>
                    </VictoryChart>
                </div>
            </div>
        </div>
    );
    } else {
        return (
            <h3>No data saved yet!</h3>
        )
    }
    
}

export default Profile;



