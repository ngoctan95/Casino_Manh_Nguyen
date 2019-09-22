/**
 * Ideal: convert an array data to data: [key1, key2, key3], map: {key1: {}, key2: {}, key3: {}}.
 * We can work well with PureComponent's sallow comparison, Easy handle list item
 * @param {Array} arr
 */
export const getMapDataFromArray = arr => {
	const map = {};

	const data = arr.map(item => {
		map[item.id] = item;
		return item.id;
	});

	return {map, data};
};

export default {
	getMapDataFromArray
};
