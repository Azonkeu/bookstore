import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

const reducer = combineReducers({
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
