import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from './reducers/budgetReducer';
import expensesReducer from './reducers/expensesReducer';

export const store = configureStore({
    reducer: {
        budget: budgetReducer,
        expenses: expensesReducer
    },
})