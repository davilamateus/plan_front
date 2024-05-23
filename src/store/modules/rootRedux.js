import { combineReducers } from 'redux';
import pageTitle from './pageTitle/reducer'
import { userReducer } from './user/reducer';
import entraces from './finances/reducerEntraces';
import domesticCosts from './finances/reducerDomesticCosts';
import domesticGoals from './finances/reducerDomesticGoals';
import tripGoals from './finances/reducerTripGoals';
import { financeResumeState } from './finances/reducerResume';
import toDoList from './toDoList/reducer';
import { tripReduce } from './trip/reducer';

export default combineReducers({
    pageTitle, userReducer, tripReduce, domesticCosts, entraces, tripGoals, domesticGoals, financeResumeState, toDoList
});