import { combineReducers } from 'redux';
import message from './message/reducer';
import pageTitle from './pageTitle/reducer'
import avatar from './avatar/reducer';
import entraces from './finances/reducerEntraces';
import domesticCosts from './finances/reducerDomesticCosts';
import domesticGoals from './finances/reducerDomesticGoals';
import tripGoals from './finances/reducerTripGoals';
import cashInHand from './finances/reducerCashInHand';
import toDoList from './toDoList/reducer';

export default combineReducers({
    message, pageTitle, avatar, domesticCosts, entraces, tripGoals, domesticGoals, cashInHand, toDoList
});