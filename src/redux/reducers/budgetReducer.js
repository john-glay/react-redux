const initialState = 0;

const budgetReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DEPOSIT_MONEY':
            return state + action.payload;
        case 'WITHDRAW_MONEY':
            return state - action.payload;
        default:
            return state;
    }
}

export default budgetReducer;