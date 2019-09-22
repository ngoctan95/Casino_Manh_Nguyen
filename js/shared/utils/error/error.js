import AsyncStorage from "@react-native-community/async-storage";

export const getErrorMessage = async errorResponse => {
	try {
		const locale = (await AsyncStorage.setItem("locale", "en")) || "en";
		const errorMessageKey = `message_${locale.toString()}`;
		return errorResponse[errorMessageKey] || "";
	} catch (e) {
		// saving error
		return "";
	}
};

export default {
	getErrorMessage
};
