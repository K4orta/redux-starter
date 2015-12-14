import { combineReducers } from 'redux';
import reducer from './reducer';
import {routeReducer} from 'redux-simple-router';
export default combineReducers(Object.assign({}, {reducer}, {
  routing: routeReducer
}));
