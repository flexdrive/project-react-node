import { combineReducers } from 'redux';
import subscriptionReducer from './subscriptions/reducer'

const reducers = {
   subscriptionStore: subscriptionReducer
};

export default combineReducers(reducers);