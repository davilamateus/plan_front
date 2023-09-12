import { combineReducers } from 'redux';
import message from './message/reducer';
import pageTitle from './pageTitle/reducer'
import avatar from './avatar/reducer';
import entraces from './finances/reducerEntraces';
import domesticCosts from './finances/reducerDomesticCosts';
import domesticGoals from './finances/reducerDomesticGoals';
import tripCosts from './finances/reducerTripCosts';

export default combineReducers({
    message, pageTitle, avatar, domesticCosts, entraces, tripCosts, domesticGoals
});