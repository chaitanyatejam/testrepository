
import { createStore, applyMiddleware } from 'redux';
import { allreducers } from '../reducers/index';
import { hideActivityIndicator } from '../actions/activityindicator/';

const apiMiddleware = ({ dispatch }) => next => action => {

    next(action);

    // if (action.type !== 'http') return;
    // dispatch(showActivityIndicator());

}
export const Store = createStore(allreducers, applyMiddleware(apiMiddleware));