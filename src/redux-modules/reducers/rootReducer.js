import { combineReducers } from 'redux';
import sitesReducer from './sitesReducer';
import formReducer from './formReducer';

export default combineReducers({
    sites: sitesReducer,
    form: formReducer,
});
