import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';




const store = configureStore();


store.dispatch(addExpense({ description: 'Water Bill', note: 'My first water bill', amount: 60000, createdAt: 1000}));
store.dispatch(addExpense({ description: 'Gas Bill', note: 'we had a gas leaking', amount: 10000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', note: 'Forgotten rent', amount: 100000, createdAt: 2000 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
