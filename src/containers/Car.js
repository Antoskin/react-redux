import React, { Component } from 'react';
import { connect } from 'react-redux';

class Car extends Component {
    render() {
        return (
            <div className="col-sm-4">
                <h1>{this.props.car.model}</h1>
            </div>
        );
    }
}

export default connect(
    state => ({
        car: state.car
    })
)(Car)