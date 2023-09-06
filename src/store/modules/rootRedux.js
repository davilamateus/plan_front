import { combineReducers } from 'redux';
import message from './message/reducer';
import pageTitle from './pageTitle/reducer'
import avatar from './avatar/reducer';

export default combineReducers({
    message, pageTitle, avatar
});