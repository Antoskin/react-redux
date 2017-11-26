import React, { Component } from 'react';
import Cars from '../containers/Cars';
import Car from '../containers/Car';

class App extends Component {
    render() {
        return <div className="row">
            <Cars />
            <Car/>
        </div>
    }
}

export default App;