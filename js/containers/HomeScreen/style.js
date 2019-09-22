import {StyleSheet} from "react-native";
import {colors} from "../../shared/utils/colors/colors";
import {ScreenHeight, ScreenWidth} from "../../shared/utils/dimension/Divices";
import fonts from "../../shared/utils/fonts/fonts";

const HEADER_HEIGHT = ScreenHeight * 0.3;
const HEADER_WIDTH = ScreenWidth;

export const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: colors.white,
		flex: 1,
	},
	content: {
		paddingStart: 27,
		paddingEnd: 20
	},
	drawer: {
		marginStart: 10
	},
	headerBackground: {
		backgroundColor: colors.deluge,
		height: HEADER_HEIGHT,
		width: HEADER_WIDTH,
		borderBottomLeftRadius: 60
	},
	welcomeTitle: {
		fontFamily: fonts.family.nunito.regular,
		fontSize: 28,
		fontWeight: "normal",
		fontStyle: "normal",
		letterSpacing: 0,
		color: colors.textDefault,
		marginBottom: 22,
		marginTop: 11
	},
	signInTitle: {
		fontFamily: fonts.family.nunito.regular,
		fontSize: 14,
		fontWeight: "normal",
		fontStyle: "normal",
		letterSpacing: 0,
		marginTop: 8,
		color: colors.textDefaultWithOpacity
	},
	mainContent: {
		marginStart: 32,
		marginEnd: 32,
		flex: 1,
		marginBottom: 38
	},
	headerLeft: {
		marginStart: 32
	},
	inputEmail: {
		marginTop: 34,
		marginBottom: 69
	},
	inputPass: {
		marginBottom: 9
	},
	formContainer: {
		backgroundColor: colors.white,
		borderRadius: 40,
		marginBottom: 9,
		marginTop: 40
	},
	buttonView: {
		width: 200,
		height: 65,
		// backgroundColor: null
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center"
	},
	buttonText: {
		fontFamily: fonts.family.nunito.regular,
		fontSize: 16,
		fontWeight: "normal",
		fontStyle: "normal",
		letterSpacing: 0,
		color: colors.whiteWithOpacity
	},
	leagueStyle: {
		fontFamily: fonts.family.nunito.regular,
		fontSize: 20,
		fontWeight: "normal",
		fontStyle: "normal",
		letterSpacing: 0,
		color: colors.textDefault,
		marginLeft: 20,
	},
	leagueContainer: {
		marginTop: 23,
		marginBottom: 20
	},
	marginWithBottomTitle: {
		marginBottom: 20
	},
	marginWithTopTitle: {
		marginTop: 0
	},
	leagueItemContainer: {
		borderRadius: 8,
		backgroundColor: "#ffffff",
		shadowColor: "#00000024",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowRadius: 5,
		shadowOpacity: 1,
		flexDirection: "row",
		padding: 10,
		marginEnd: 20,
		marginStart: 20,
		marginBottom: 20,
	},
	imageItemContainer: {
		width: 90,
		height: 90,
		borderRadius: 10
	},
	titleItem: {
		fontFamily: fonts.family.nunito.bold,
		fontSize: 18,
		fontWeight: "normal",
		fontStyle: "normal",
		letterSpacing: 0,
		textAlign: "left",
		color: colors.black_title,
		marginEnd: 50,
	},
	eventItem: {
		fontFamily: fonts.family.nunito.regular,
		fontSize: 14,
		fontWeight: "normal",
		fontStyle: "normal",
		letterSpacing: 0,
		textAlign: "left",
		color: colors.yellow_event
	},
	eventDetailItem: {
		fontFamily: fonts.family.nunito.regular,
		fontSize: 14,
		fontWeight: "normal",
		fontStyle: "normal",
		letterSpacing: 0,
		textAlign: "left",
		color: colors.yellow_event_title
	},
	descItem: {
		fontFamily: fonts.family.nunito.regular,
		fontSize: 14,
		fontWeight: "normal",
		fontStyle: "normal",
		letterSpacing: 0,
		textAlign: "left",
		paddingRight: 30,
		marginRight: 30,
		color: colors.textDefaultWithOpacity
	},
	itemContentContainer: {
		marginLeft: 10,
		marginRight: 40,
		paddingEnd: 30,
		flexDirection: "column",
		alignContent: "flex-start",
		alignItems: "flex-start",
		justifyContent: "center"
	},
	imgContentContainer: {
		borderRadius: 5,
		alignSelf: "center"
	},
	badge: {
		position: "absolute",
		height: 10,
		width: 10,
		backgroundColor: colors.yellow_default,
		borderRadius: 10,
		bottom: 6,
		left: 0
	},
	plusBtn: {
		position: "absolute",
		bottom: 10,
		right: 15,
		width: 63,
		height: 63
	},
	titleLeague: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20
	},
	scrollContainer: {
		marginStart: 8,
		marginEnd: 1
	}
});

export default styles;
