import {StyleSheet} from "react-native";
import {colors} from "../../shared/utils/colors/colors";
import {fonts} from "../../shared/utils/fonts/fonts";
import {ScreenHeight} from "../../shared/utils/dimension/Divices";
import {ifIphoneX} from "react-native-iphone-x-helper";

const LOGO_MARGIN_TOP = ScreenHeight / 11 ;

export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: null,
		height: null,
	},
	videoContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	logo: {
		marginTop: ifIphoneX ? LOGO_MARGIN_TOP : LOGO_MARGIN_TOP - 15,
	},
	title: {
		fontFamily: fonts.family.nunito.bold,
		fontSize: 30,
		letterSpacing: 0,
		textAlign: "center",
		color: colors.white,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		alignContent: "center",
		width: "80%",
		marginTop: 40,
	},
	motto: {
		fontFamily: fonts.family.nunito.regular,
		fontSize: 16,
		marginTop: 15,
		letterSpacing: 0,
		textAlign: "center",
		color: colors.white,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		alignContent: "center",
		width: "90%",
	},
	absolute: {
		position: "absolute",
		flexDirection: "column",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		height: "100%",
		width: "100%",
		backgroundColor: "rgba(0,0,0,0.4)",
		opacity: 0.4
	},
	buttonContainer: {
		flexDirection: "column",
		width: "100%",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		alignSelf: "center",
		marginTop: 10,
	},
	login: {
		width: "80%",
		borderRadius: 20,
		backgroundColor: colors.blue_dodger,
	},
	support: {
		width: "80%",
		borderRadius: 20,
		backgroundColor: colors.yellow_default,
	},
	loginTitle: {
		fontFamily: fonts.family.nunito.bold,
		fontSize: 12,
		letterSpacing: 0,
		textAlign: "center",
		color: colors.white,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		alignContent: "center",
	},
	signUpTitle: {
		fontFamily: fonts.family.nunito.bold,
		fontSize: 12,
		letterSpacing: 0,
		textAlign: "center",
		color: colors.white,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		alignContent: "center",
	},
	signUp: {
		width: "80%",
		borderRadius: 20,
    backgroundColor: colors.red,
    marginBottom: 20,
    marginTop: 20,
	}
});

export default {
	styles
};
