import { activityIndicatorReducer } from './activityindictor/activityindicator';
import { combineReducers } from 'redux';

export const allreducers = combineReducers({
    indicator: activityIndicatorReducer
})