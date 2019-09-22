import {createAction} from "../../shared/utils/action/action";
import * as constants from "./constants";

// Get leagues
export const getListLeague = createAction(constants.GET_LIST_LEAGUES);
export const getListLeagueSuccess = createAction(constants.GET_LIST_LEAGUES_SUCCESS);
export const getListLeagueFailure = createAction(constants.GET_LIST_LEAGUES_FAILURE);

// Get upcomming events
export const getListUpcommingEvents = createAction(constants.GET_LIST_UPCOMMING_EVENTS);
export const getListUpcommingEventsSuccess = createAction(constants.GET_LIST_UPCOMMING_EVENTS_SUCCESS);
export const getListUpcommingEventsFailure = createAction(constants.GET_LIST_UPCOMMING_EVENTS_FAILURE);

// Get created leagues
export const getListCreatedLeagues = createAction(constants.GET_LIST_CREATED_LEAGUES);
export const getListCreatedLeaguesSuccess = createAction(constants.GET_LIST_CREATED_LEAGUES_SUCCESS);
export const getListCreatedLeaguesFailure = createAction(constants.GET_LIST_CREATED_LEAGUES_FAILURE);

// Get joined leagues
export const getListJoinedLeagues = createAction(constants.GET_LIST_JOINED_LEAGUE);
export const getListJoinedLeaguesSuccess = createAction(constants.GET_LIST_JOINED_LEAGUE_SUCCESS);
export const getListJoinedLeaguesFailure = createAction(constants.GET_LIST_JOINED_LEAGUE_FAILURE);

// Update device token
export const updateDeviceToken = createAction(constants.UPDATE_DEVICE_TOKEN);
export const updateDeviceTokenSuccess = createAction(constants.UPDATE_DEVICE_TOKEN_SUCCESS);
export const updateDeviceTokenFailure = createAction(constants.UPDATE_DEVICE_TOKEN_FAILURE);

// Reset
export const resetReducer = createAction(constants.RESET_REDUCER);