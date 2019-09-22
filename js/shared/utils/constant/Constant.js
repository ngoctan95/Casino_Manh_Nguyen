export default {
	/**
   * Define staging and production URL
   */
	URL: {
		urls: {
			staging: "https://dev-fanathon.inapps.technology/api",
			production: "https://dev-fanathon.inapps.technology/api"
		},
		socket: {
			url: "https://adsc.inapps.technology"
		},
		API_URL_PATH: {
			login: {
				url: "/auth/login",
				desc: "Login user name and password",
				params: [
					{
						type: "facebook|google|original",
						email: "string",
						password: "string",
						token: "string"
					}
				],
				method: "POST"
			},
			reset_password: {
				url: "/auth/recoverPassword",
				desc: "Recover password via email",
				params: [
					{
						email: "string"
					}
				],
				method: "GET"
			},
			signup: {
				url: "/auth/register",
				desc: "Register new user name and password",
				params: [
					{
						email: "string",
						password: "string"
					}
				],
				method: "POST"
			},
			change_password: {
				url: "/auth/resetPassword",
				desc: "Change password",
				params: [
					{
						password: "string",
						token: "string"
					}
				],
				method: "POST"
			},
			eventUpcomming: {
				url: "/events/upcoming",
				desc: "Get upcomming events",
				params: [
					{

					}
				],
				method: "POST"
			},
			notification: {
				changeDeviceToken: {
					url: "/users/me/notification",
					desc: "Change notification token",
					params: [
						{
							token: "string",
							os: "android||ios",
						}
					],
					method: "POST"
				}
			}
		}
	},
	PLATFORMS: {
		ANDROID: "android",
		IOS: "ios"
	},
	/**
   * Define methods for request apis
   */
	METHOD: {
		post: "POST",
		put: "PUT",
		get: "GET"
	},
	LOGIN_TYPE: {
		facebook: "facebook",
		google: "google",
		original: "original"
	},
	/**
   * Set timeout request
   */
	TIME_OUT_REQUEST: 100000,

	/**
   * Constant for key/value in storage manager
   */
	USER: {
		USER_INFO: "USER_INFO",
		TOKEN_INFO: "TOKEN_INFO",
		TOKEN_FIRST_TIME: "TOKEN_FIRST_TIME",
		DEVICE_TOKEN: "DEVICE_TOKEN",
	},
	NOTIFICATION: {
		VIBRATE_TIME: 500,
	},

	/**
   * Constant for mocking data
   */
	MOCKING_DATA: {
		USER: {
			USERNAME: "Admin@gmail.com",
			PASSWORD: "admin"
		},
		PLACE_HOLDER: "https://smithssanitationsupply.ca/wp-content/uploads/2018/06/noimage-1.png"
	},
	WEB_CLIENT_ID:
    "277276858297-u1gbl7jb8vib8co624tik5t26lpldc6e.apps.googleusercontent.com",
	LOCATION_BACKGROUND_BTN: [0, 0.36, 1],
	COLOR_BACKGROUND_BTN: ["#e2c85d", "#d9bf52", "#b89438"],
	SPLASH_TIME_OUT: 5500,
	CONTENT_TIME_OUT: 3000,
	BUTTON_TIME_OUT: 2000,
	LINK: "https://ff312.ku11.net",
	LINK1: "https://docs.google.com/forms/d/1nPEmfQwJY55DM_iVdPWEFOi35sclNJWQYuKlopcAk4U/viewform?edit_requested=true",
	LINK2: "https://zalo.me/kucasino?gidzl=cCS-CqBNCX-MqJmpJS4n69JSFZTNnZ8UZOmxPbR7FKhTZZ8m0PDe7ehODJS2nZ9ArjzhCZFjA3yPHzWq6G",
};
