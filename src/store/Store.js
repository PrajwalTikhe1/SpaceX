import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { flightListReducer } from '../reducers/FlightReducers';

const reducer = combineReducers({
  flightList: flightListReducer,
});

const initialState = { flights: [] };

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
