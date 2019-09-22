import {getJoinedLeaguesMock, getCreatedLeaguesMock} from "./mock_data";
import Constant from "../../shared/utils/constant/Constant";
import {AxiosFetch} from "../../api/AxiosFetch";

// League
// eslint-disable-next-line no-empty-pattern
export function getLeague({ }) {
	// eslint-disable-next-line no-unused-vars
	return new Promise((rs, rj) => {
		AxiosFetch({
			method: "GET",
			url: Constant.URL.API_URL_PATH.league.allLeague.url + "?page=1&perPage=100000",
			contentType: "application/json",
			onSuccess: data => {
				rs(data);
			},
			onError: error => {
				rj(error);
			},
			hasToken: true
		});
	});
}

// Upcomming events
// eslint-disable-next-line no-empty-pattern
export function getUpcommingEvents({ }) {
	return new Promise((rs, rj) => {
		AxiosFetch({
			method: "GET",
			url: Constant.URL.API_URL_PATH.eventUpcomming.url,// + `?page=1&perPage=1000`,
			contentType: "application/x-www-form-urlencoded",
			onSuccess: data => {
				rs(data);
			},
			onError: error => {
				rj(error);
			},
			hasToken: true
		});
	});
}

// Created league
// eslint-disable-next-line no-empty-pattern
export function getCreatedLeagues({ }) {
	// eslint-disable-next-line no-unused-vars
	return new Promise((rs, rj) => {
		rs(getCreatedLeaguesMock.goodResponse);
	});
}

// Joined league
// eslint-disable-next-line no-empty-pattern
export function getJoinedLeagues({ }) {
	// eslint-disable-next-line no-unused-vars
	return new Promise((rs, rj) => {
		rs(getJoinedLeaguesMock.goodResponse);
	});
}

// Update device token
export function updateDeviceTokenByOs({token, os}) {
	return new Promise((rs, rj) => {
		AxiosFetch({
			method: "PUT",
			url: Constant.URL.API_URL_PATH.notification.changeDeviceToken.url,
			data: {"token": token, "os": os},
			onSuccess: data => {
				rs(data);
			},
			onError: error => {
				rj(error);
			},
			hasToken: true
		});
	});
}

export default {
	getLeague,
	getUpcommingEvents,
	updateDeviceTokenByOs
};
