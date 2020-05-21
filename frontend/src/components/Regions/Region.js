import React, { Component } from 'react';
import MobilityTrends from '../Mobility/MobilityTrends';

class Region extends Component {

    
    render() {    
        return (
            <div>
                <MobilityTrends regionName={this.props.regionName} />
            </div>
        );
    }
}

export default Region;