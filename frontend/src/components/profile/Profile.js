import React from 'react';

const Profile = (props) => {
    if(!props.user.email){ 
        props.history.push('/log-in');
    }   
    return (
        <div>
            <div>
                <h1>Profile</h1>
                <span>Logged in as {props.user.email} </span>
            </div>
            <div>
                <h3>Your saved data</h3>
                <p>{props.user.userGroceryData.savedDate}</p>
                <ul>{props.user.userGroceryData.data.map( (eachDay, i) => {
                    return <li key={i}>{eachDay}</li>
                })}</ul>
            </div>
        </div>
    );
}

export default Profile;