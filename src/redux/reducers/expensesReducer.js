const initialState = [];

const budgetReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SPEND_MONEY':
            return [...state, {day: action.payload.day, name: action.payload.name, amount: action.payload.amount}];
        default:
            return state;
    }
}

export default budgetReducer;