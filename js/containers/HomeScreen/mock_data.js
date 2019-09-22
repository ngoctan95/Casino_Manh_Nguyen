// Get all leagues
export const getLeagueMock = {
	goodResponse: {
		code: 200,
		success: true,
		data: [
			{
				title: "Game of Thrones",
				description: "Game of Thrones is an American fantasy drama television series",
				image: "https://unsplash.it/800/800?image=504",
				imageFull: "https://unsplash.it/1200/1200?image=504",
				imageBlur: "https://unsplash.it/1200/1200?image=1083&blur",
			},
			{
				title: "Breaking bad",
				description: "Breaking Bad is an American neo-Western crime drama television series…",
				image: "https://unsplash.it/800/800?image=532",
				imageFull: "https://unsplash.it/1200/1200?image=532",
				imageBlur: "https://unsplash.it/1200/1200?image=532&blur",
			},
			{
				title: "Viet Nam",
				description: "Viet Nam is a powerful country with amazing military power. ",
				image: "https://unsplash.it/800/800?image=529",
				imageFull: "https://unsplash.it/1200/1200?image=529",
				imageBlur: "https://unsplash.it/1200/1200?image=529&blur",
			}
		]
	},
	badResponse: {
		error_code: 104,
		message_en: "Error while requesting",
	}
};

// Get all upcomming leagues
export const getUpcommingEventsMock = {
	goodResponse: {
		code: 200,
		success: true,
		data: [
			{
				title: "Oscar Award",
				description: "The Oscars, are a set of awards for artistic and technical merit in the film industry.",
				image: "https://unsplash.it/800/800?image=674",
				imageFull: "https://unsplash.it/1200/1200?image=674",
				imageBlur: "https://unsplash.it/1200/1200?image=674&blur",
			},
			{
				title: "MTV Awards",
				description: "The 2019 MTV Movie & TV Awards ceremony will take place June 17, 2019…",
				image: "https://unsplash.it/800/800?image=668",
				imageFull: "https://unsplash.it/1200/1200?image=668",
				imageBlur: "https://unsplash.it/1200/1200?image=668&blur",
			}
		]
	},
	badResponse: {
		error_code: 104,
		message_en: "Error while requesting",
	}
};

// Get all created leagues
export const getCreatedLeaguesMock = {
	goodResponse: {
		code: 200,
		success: true,
		data: [
			{
				event: "Oscar Award",
				title: "Allen lee Awards",
				description: "The Oscars, are a set of awards for artistic and technical",
				image: "https://unsplash.it/800/800?image=674",
				imageFull: "https://unsplash.it/1200/1200?image=674",
				imageBlur: "https://unsplash.it/1200/1200?image=674&blur",
			},
			{
				event: "MTV Awards",
				title: "Allen lee MTV Awards",
				description: "The Oscars, are a set of awards for artistic and technical merit in the film industry.",
				image: "https://unsplash.it/800/800?image=668",
				imageFull: "https://unsplash.it/1200/1200?image=668",
				imageBlur: "https://unsplash.it/1200/1200?image=668&blur",
			}
		]
	},
	badResponse: {
		error_code: 104,
		message_en: "Error while requesting",
	}
};

// Get all joined leagues
export const getJoinedLeaguesMock = {
	goodResponse: {
		code: 200,
		success: true,
		data: [
			{
				event: "Game of Thrones",
				description: "The Oscars, are a set of awards for artistic and technical",
				image: "https://unsplash.it/800/800?image=668",
				imageFull: "https://unsplash.it/1200/1200?image=668",
				imageBlur: "https://unsplash.it/1200/1200?image=668&blur",
			}
		]
	},
	badResponse: {
		error_code: 104,
		message_en: "Error while requesting",
	}
};
