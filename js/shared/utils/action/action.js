/**
 * Ideal: The combination of action return only one payload at the one time.
 * So, we can reuse this for createAction with payload is nested property
 * @param {*} type
 */
export function createAction(type) {
	return payload => {
		return {
			type,
			payload
		};
	};
}

export default {
	createAction
};
