export default function(state=0, action) {
    switch(action.type) {
        case 'CAR_SELECTED':
            return action.payload
        default: 
            return state
    }
}