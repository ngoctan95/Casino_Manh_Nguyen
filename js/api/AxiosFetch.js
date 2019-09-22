/**
 * Author: UraNashel - tan.nguyen@inapp.net
 */

import Constant from "../shared/utils/constant/Constant";
import Axios from "axios";
import LogManager from "../shared/utils/logging/LogManager";
import IALocalStorage from "../shared/utils/storage/IALocalStorage";

const AxiosInstance = Axios.create({
	timeout: Constant.TIME_OUT_REQUEST
});

function methodGet({url, ...config}) {
	return AxiosInstance.get(url, {...config});
}

async function methodPost({url, data}) {
	return AxiosInstance.post(url, data);
}

function methodPut({url, data, ...config}) {
	return AxiosInstance.put(url, data, {...config});
}

function methodDelete({url, ...config}) {
	return AxiosInstance.delete(url, {...config});
}

const methodFunctions = {
	[Constant.METHOD.post]: methodPost,
	[Constant.METHOD.put]: methodPut,
	[Constant.METHOD.get]: methodGet,
	[Constant.METHOD.delete]: methodDelete
};

export async function AxiosFetch({
	method,
	data = undefined,
	url,
	onSuccess = () => {},
	onError = () => {},
	hasToken = false,
	contentType = "application/json",
	customBaseUrl // custom url service
}) {
	//Set token for all request if needed
	const token = await IALocalStorage.getTokenUserInfo();

	// Set custom service url
	AxiosInstance.defaults.baseURL = (customBaseUrl && customBaseUrl) || Constant.URL.urls.staging;

	console.log(`Fanathon - URL Fetching: ${AxiosInstance.defaults.baseURL + url}`);
	console.log(`Fanathon - Data and Method: ${LogManager.parseJsonObjectToJsonString(data? data : {})}, Method ${method}`);
	console.log(`Fanathon - Token: ${token}`);

	// get axios function by method
	methodFunctions[method]({url, data, headers: {
		"Accept":"application/json, text/plain, */*",
		"Content-Type": contentType ? contentType : "application/json",
		"Authorization":  hasToken ? "Bearer " + token : null
	}})
		.then(res => {
			LogManager.showFullLog(`Fanathon - Fetched Response: ${LogManager.parseJsonObjectToJsonString(res.data)}`);
			onSuccess(res.data);
		})
		.catch(error => {
			LogManager.showFullLog(`Fanathon - Fetched Error:  ${LogManager.parseJsonObjectToJsonString(error.message)}`);
			onError(error.response);
		});
}

export default {
	AxiosFetch
};
