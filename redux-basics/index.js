// global State -> action -> dispatch(action) -> reducerFn -> update the state

const redux = require('redux');
const createStore = redux.createStore;

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}

const initialState = {
    count: 0,
}

const counterReducer = (state = initialState, action) => {
    console.log('REDUCER-FN', action)
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 }
        case DECREMENT:
            return { count: state.count - 1 }
        default:
            return state;
    }
}


// subscribe, getState, dispatch
const store = createStore(counterReducer);

const unsubscribeFn = store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCounter()); // 1
store.dispatch(incrementCounter()); // 2
store.dispatch(incrementCounter()); // 3
store.dispatch(decrementCounter()); // 2
store.dispatch(decrementCounter()); // 1
store.dispatch(decrementCounter()); // 0

unsubscribeFn();