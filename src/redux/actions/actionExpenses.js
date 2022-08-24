export const spendMoney = (day, name, amount) => {
    return (dispatch) => {
        dispatch({
            type: 'SPEND_MONEY',
            payload: {day, name, amount}
        })
    }
}