export function selectCar(car) {
    console.log(`your choose is:`, car.model);
    return {
        type: 'CAR_SELECTED',
        payload: car
    }
}