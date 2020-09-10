import authReducer from './Authentication';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    authReducer
    //in case there's multiple reducers, they should appear here
})
export default allReducers