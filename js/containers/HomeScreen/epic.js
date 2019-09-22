import {from, of} from "rxjs";
import {map, catchError, mergeMap} from "rxjs/operators";
import {ofType} from "redux-observable";
import * as constants from "./constants";
import {getLeague, getUpcommingEvents, getCreatedLeagues, getJoinedLeagues, updateDeviceTokenByOs} from "./api";
import {getListLeagueSuccess, getListLeagueFailure,
	getListUpcommingEventsSuccess, getListUpcommingEventsFailure,
	getListCreatedLeaguesFailure, getListCreatedLeaguesSuccess,
	getListJoinedLeaguesFailure, getListJoinedLeaguesSuccess, updateDeviceTokenSuccess, updateDeviceTokenFailure} from "./actions";

// Leagues
export const loadingGetLeague = () => ({type: constants.GET_LIST_LEAGUES});

export const loadingGetLeagueEpic = action$ => {
	return action$.pipe(
		ofType(constants.GET_LIST_LEAGUES),
		// eslint-disable-next-line no-unused-vars
		mergeMap(action =>
			from(getLeague({ })).pipe(
				map(result => getListLeagueSuccess({result})),
				catchError(error => of(getListLeagueFailure({error})))
			)
		)
	);
};

// Upcomming events
export const loadingGetUpcommingEvents = () => ({type: constants.GET_LIST_UPCOMMING_EVENTS});

export const loadingGetUpcommingEventsEpic = action$ => {
	return action$.pipe(
		ofType(constants.GET_LIST_UPCOMMING_EVENTS),
		// eslint-disable-next-line no-unused-vars
		mergeMap(action =>
			from(getUpcommingEvents({ })).pipe(
				map(result => getListUpcommingEventsSuccess({result})),
				catchError(error => of(getListUpcommingEventsFailure({error})))
			)
		)
	);
};


// Created leagues
export const loadingGetCreatedLeagues = () => ({type: constants.GET_LIST_CREATED_LEAGUES});

export const loadingGetCreatedLeaguesEpic = action$ => {
	return action$.pipe(
		ofType(constants.GET_LIST_CREATED_LEAGUES),
		// eslint-disable-next-line no-unused-vars
		mergeMap(action =>
			from(getCreatedLeagues({ })).pipe(
				map(result => getListCreatedLeaguesSuccess({result})),
				catchError(error => of(getListCreatedLeaguesFailure({error})))
			)
		)
	);
};

// Joined leagues
export const loadingGetJoinedLeagues = () => ({type: constants.GET_LIST_JOINED_LEAGUE});

export const loadingGetJoinedLeaguesEpic = action$ => {
	return action$.pipe(
		ofType(constants.GET_LIST_JOINED_LEAGUE),
		// eslint-disable-next-line no-unused-vars
		mergeMap(action =>
			from(getJoinedLeagues({ })).pipe(
				map(result => getListJoinedLeaguesSuccess({result})),
				catchError(error => of(getListJoinedLeaguesFailure({error})))
			)
		)
	);
};

// Update device token
export const loadingUpdateDeviceToken = () => ({type: constants.UPDATE_DEVICE_TOKEN});

export const loadingUpdateDeviceTokenEpic = action$ => {
	return action$.pipe(
		ofType(constants.UPDATE_DEVICE_TOKEN),
		mergeMap(action =>
			from(updateDeviceTokenByOs({os: action.payload.os, token: action.payload.token})).pipe (
				map(result => updateDeviceTokenSuccess({result})),
				catchError(error => of(updateDeviceTokenFailure({error})))
			))
	);
};