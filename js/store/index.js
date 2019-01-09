import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combinedPReducers } from '../reducers';

let store = createStore(
    combinedPReducers,
    {},
    applyMiddleware(thunk));

export {
    store
};
