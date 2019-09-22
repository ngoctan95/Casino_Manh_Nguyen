import update from "immutability-helper";
import {FetchStatus} from "../../shared/utils/fetchStatus/fetchStatus";
import * as constants from "./constants";

const initialState = {
	leagues: {
		status: FetchStatus.default(),
		error: null,
		data: []
	},
	upCommingEvents: {
		status: FetchStatus.default(),
		error: null,
		data: []
	},
	createdLeagues: {
		status: FetchStatus.default(),
		error: null,
		data: []
	},
	joinedLeagues: {
		status: FetchStatus.default(),
		error: null,
		data: []
	},
	updateDeviceToken: {
		error: null,
		data: []
	}
};

function homeReducer(state = initialState, action) {
	switch (action.type) {
	case constants.GET_LIST_LEAGUES: {
		return update(state, {
			leagues: {
				status: {$set: FetchStatus.fetching()},
				error: {$set: null},
			}
		});
	}
	case constants.GET_LIST_LEAGUES_SUCCESS: {
		const {data} = action.payload.result.data;
		return update(state, {
			leagues: {
				status: {$set: FetchStatus.success()},
				data: {$set: data}
			}
		});
	}
	case constants.GET_LIST_LEAGUES_FAILURE: {
		const {error} = action.payload;
		return update(state, {
			leagues: {
				status: {$set: FetchStatus.failure()},
				error: {$set: error}
			}
		});
	}
	case constants.GET_LIST_UPCOMMING_EVENTS: {
		return update(state, {
			upCommingEvents: {
        status: {$set: FetchStatus.fetching()},
        error: {$set: null},
			}
		});
	}
	case constants.GET_LIST_UPCOMMING_EVENTS_SUCCESS: {
		const {data} = action.payload.result;
		return update(state, {
			upCommingEvents: {
				status: {$set: FetchStatus.success()},
				data: {$set: data.data}
			}
		});
	}
	case constants.GET_LIST_UPCOMMING_EVENTS_FAILURE: {
		const {error} = action.payload;
		return update(state, {
			upCommingEvents: {
				status: {$set: FetchStatus.failure()},
				error: {$set: error}
			}
		});
	}
	case constants.GET_LIST_CREATED_LEAGUES: {
		return update(state, {
			createdLeagues: {
				status: {$set: FetchStatus.fetching()}
			}
		});
	}
	case constants.GET_LIST_CREATED_LEAGUES_SUCCESS: {
		const {data} = action.payload.result;
		return update(state, {
			createdLeagues: {
				status: {$set: FetchStatus.success()},
				data: {$set: data}
			}
		});
	}
	case constants.GET_LIST_CREATED_LEAGUES_FAILURE: {
		const {error} = action.payload;
		return update(state, {
			createdLeagues: {
				status: {$set: FetchStatus.failure()},
				error: {$set: error}
			}
		});
	}
	case constants.GET_LIST_JOINED_LEAGUE: {
		return update(state, {
			joinedLeagues: {
				status: {$set: FetchStatus.fetching()}
			}
		});
	}
	case constants.GET_LIST_JOINED_LEAGUE_SUCCESS: {
		const {data} = action.payload.result;
		return update(state, {
			joinedLeagues: {
				status: {$set: FetchStatus.success()},
				data: {$set: data}
			}
		});
	}
	case constants.GET_LIST_JOINED_LEAGUE_FAILURE: {
		const {error} = action.payload;
		return update(state, {
			joinedLeagues: {
				status: {$set: FetchStatus.failure()},
				error: {$set: error}
			}
		});
	}
	case constants.UPDATE_DEVICE_TOKEN: {
		return state;
	}
	case constants.UPDATE_DEVICE_TOKEN_SUCCESS: {
		return state;
	}
	case constants.UPDATE_DEVICE_TOKEN_FAILURE: {
		return state;
	}
	case constants.RESET_REDUCER: {
		return state;
	}
	default:
		return state;
	}
}

export default homeReducer;
