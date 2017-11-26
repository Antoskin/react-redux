import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCar } from '../actions/index';
// import { bindActionCreators } from 'redux';


class Cars extends Component {
    renderCars(){
        return this.props.cars.map( (car, id) => (
            <li 
                className="list-group-item" 
                onClick={() => this.props.selector(car) }
                key={id}>{car.model}
            
            </li>
        ))
    };
    render() {
        return (
            <ul className="list-group col-sm-2 col-xs-6">
                {this.renderCars()}
            </ul>
        );
    }
}

// function mapStateToProps(state) {
//     return { cars: state.cars }
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({selectCar}, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Cars);

export default connect(
    state => ({cars: state.cars}),
    dispatch => ({
        selector: (selected) => 
            dispatch(selectCar(selected))
    })
)(Cars)