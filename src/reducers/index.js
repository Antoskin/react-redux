import { combineReducers } from 'redux';
import car_list from './reducer_car_list';
import cur_car from './reducer_car';

const CarList = combineReducers({
    cars : car_list,
    car : cur_car
});

export default CarList;