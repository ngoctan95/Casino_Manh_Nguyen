import {combineEpics} from "redux-observable";
import {combineReducers} from "redux";

import homeReducer from "../containers/HomeScreen/reducer";

/**
 * Combine all the epics into root
 */
export const rootEpic = combineEpics(

);

/**
 * Combine all the reducers into root
 */
export const rootReducer = combineReducers({
	homeReducer,
});
